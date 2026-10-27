// GENERATE BY hand, but output is committed: src/icon-fingerprints.json
// Builds the perceptual-hash index used by the site's "search by image" feature.
//
// For every icon exported by @d-matrix/icons-react:
//   1. render the component to static SVG markup (names match the site exactly)
//   2. rasterize to a 512px bitmap with sharp
//   3. trim to content bbox, flatten onto white, downscale to 64x64
//   4. compute a 256-bit pHash (DCT, hashSize=16) via rosetta-squint-hash
//      (byte-exact port of Python imagehash)
//
// The browser runs the SAME steps 3-4 on user screenshots, see src/icon-search.ts.
// Shared constants live in normalize-config.json — never duplicate them here.
// Do not add a second resize in one sharp pipeline (sharp applies extend/trim
// in a fixed internal order, not call order).

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { writeFileSync } from 'node:fs';

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as iconsReact from '@d-matrix/icons-react';
import sharp from 'sharp';
import { phash } from 'rosetta-squint-hash';
import config from './normalize-config.json' with { type: 'json' };

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const RASTER = config.rasterSize;
const SIZE = config.hashInputSize;
const HASH_SIZE = config.hashSize; // 16x16 -> 256-bit hex hash (64 chars)

function extractSvg(markup) {
  const match = markup.match(/<svg[\s\S]*<\/svg>/);
  if (!match) {
    throw new Error('rendered markup contains no <svg> element');
  }
  // Components emit width="1em" height="1em"; librsvg resolves em to ~16px,
  // destroying detail before hashing. Force an explicit pixel raster size;
  // non-square viewBoxes stay letterboxed via preserveAspectRatio.
  return match[0]
    .replace(/width="[^"]*"/, `width="${RASTER}"`)
    .replace(/height="[^"]*"/, `height="${RASTER}"`);
}

async function hashIcon(name, IconComponent, group) {
  const svgMarkup = extractSvg(renderToStaticMarkup(React.createElement(IconComponent)));

  // step 1: rasterize large (transparent background)
  const raster = await sharp(Buffer.from(svgMarkup))
    .resize(RASTER, RASTER, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toBuffer();

  // step 2: composite onto white FIRST so trim measures from the same
  // background as the browser side, then bbox-crop
  const flattened = await sharp(raster).flatten({ background: '#ffffff' }).png().toBuffer();
  const cropped = await sharp(flattened).trim({ threshold: config.trimThreshold }).png().toBuffer();

  // step 3: downscale to hash input size
  const { data, info } = await sharp(cropped)
    .resize(SIZE, SIZE, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const hash = phash({ width: info.width, height: info.height, data: new Uint8Array(data), channels: 4 }, HASH_SIZE);
  return { name, hash: hash.toString(), group };
}

async function mapWithConcurrency(items, limit, fn) {
  const results = new Array(items.length);
  let cursor = 0;
  async function worker() {
    while (cursor < items.length) {
      const index = cursor++;
      results[index] = await fn(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

async function main() {
  const { new: newIcons, ...legacyIcons } = iconsReact;

  const legacyNames = Object.keys(legacyIcons);
  const newNames = Object.keys(newIcons);
  console.log(`hashing ${newNames.length} new icons + ${legacyNames.length} legacy icons (phash, hashSize=${HASH_SIZE}, size=${SIZE}x${SIZE})...`);

  const legacyFingerprints = await mapWithConcurrency(legacyNames, 8, (name) =>
    hashIcon(name, legacyIcons[name], 'legacy'),
  );
  const newFingerprints = await mapWithConcurrency(newNames, 8, (name) =>
    hashIcon(name, newIcons[name], 'new'),
  );

  const fingerprints = [...newFingerprints, ...legacyFingerprints];

  const outFile = path.join(__dirname, '../src/icon-fingerprints.json');
  writeFileSync(outFile, JSON.stringify(fingerprints));
  console.log(`wrote ${fingerprints.length} fingerprints to ${outFile} (${(JSON.stringify(fingerprints).length / 1024).toFixed(1)} KB)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
