// Reproduce the BROWSER pipeline (src/icon-search.ts) on a real user screenshot
// and rank it against the index, to debug real-world match failures.
// Usage: node scripts/repro-user-image.mjs <imagePath> [expectedIconName]
import { readFileSync } from 'node:fs';

import sharp from 'sharp';
import { phash, hexToHash } from 'rosetta-squint-hash';
import config from './normalize-config.json' with { type: 'json' };

const [imagePath, expectedName] = process.argv.slice(2);
const fps = JSON.parse(readFileSync(new URL('../src/icon-fingerprints.json', import.meta.url), 'utf8'));

const RASTER = config.rasterSize;
const FINAL_SIZE = config.hashInputSize;
const HASH_SIZE = config.hashSize;
const TRIM_THRESHOLD = config.trimThreshold;

// browser: createImageBitmap -> downscale to <=RASTER -> white flatten -> bbox crop -> FINAL_SIZE
const bitmapMeta = await sharp(imagePath).metadata();
const scale = Math.min(1, RASTER / Math.max(bitmapMeta.width, bitmapMeta.height));
const midW = Math.max(1, Math.round(bitmapMeta.width * scale));
const midH = Math.max(1, Math.round(bitmapMeta.height * scale));

const { data: midData, info: midInfo } = await sharp(imagePath)
  .resize(midW, midH, { fit: 'fill' })
  .flatten({ background: '#ffffff' }) // browser fills white BEFORE drawImage
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

// bbox crop (same as icon-search.ts)
let left = midInfo.width, top = midInfo.height, right = -1, bottom = -1;
for (let y = 0; y < midInfo.height; y++) {
  for (let x = 0; x < midInfo.width; x++) {
    const i = (y * midInfo.width + x) * 4;
    const diff = Math.max(Math.abs(midData[i] - 255), Math.abs(midData[i + 1] - 255), Math.abs(midData[i + 2] - 255));
    if (diff > TRIM_THRESHOLD) {
      if (x < left) left = x;
      if (x > right) right = x;
      if (y < top) top = y;
      if (y > bottom) bottom = y;
    }
  }
}
console.log(`input ${bitmapMeta.width}x${bitmapMeta.height} -> mid ${midInfo.width}x${midInfo.height}, bbox: left=${left} top=${top} right=${right} bottom=${bottom}`);
if (right < 0) {
  console.log('NO CONTENT FOUND');
  process.exit(0);
}
const cropW = right - left + 1;
const cropH = bottom - top + 1;

const { data, info } = await sharp(midData, { raw: { width: midInfo.width, height: midInfo.height, channels: 4 } })
  .extract({ left, top, width: cropW, height: cropH })
  .resize(FINAL_SIZE, FINAL_SIZE, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const q = phash({ width: info.width, height: info.height, data: new Uint8Array(data), channels: 4 }, HASH_SIZE);
const ranked = fps
  .map((f) => ({ name: f.name, group: f.group, d: hexToHash(f.hash).subtract(q) }))
  .sort((a, b) => a.d - b.d);
console.log('top 8:', ranked.slice(0, 8).map((r) => `${r.group}/${r.name}(${r.d})`).join(', '));
if (expectedName) {
  const pos = ranked.findIndex((r) => r.name === expectedName) + 1;
  const hit = ranked.find((r) => r.name === expectedName);
  console.log(`rank of ${expectedName}: #${pos}, distance ${hit?.d}`);
}
