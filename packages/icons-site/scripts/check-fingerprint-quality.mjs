// End-to-end sanity check for the image-search fingerprints.
// Simulates a user screenshot of one icon (large raster, white background,
// generous margins, optional recolor) and ranks it against the whole index.
// The source icon should rank #1 or near.
// Normalization must match src/icon-search.ts and scripts/generate-icon-index.mjs:
// flatten onto white -> bbox-crop -> downscale to 64x64.
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as iconsReact from '@d-matrix/icons-react';
import sharp from 'sharp';
import { phash, hexToHash } from 'rosetta-squint-hash';
import config from './normalize-config.json' with { type: 'json' };

const fps = JSON.parse(readFileSync(new URL('../src/icon-fingerprints.json', import.meta.url), 'utf8'));
const { new: newIcons, ...legacyIcons } = iconsReact;

const RASTER = config.rasterSize;
const SIZE = config.hashInputSize;
const HASH_SIZE = config.hashSize;
const TRIM_THRESHOLD = config.trimThreshold;

function normalizeSvg(IconComponent) {
  const markup = renderToStaticMarkup(React.createElement(IconComponent));
  const svg = markup.match(/<svg[\s\S]*<\/svg>/)[0];
  return svg
    .replace(/width="[^"]*"/, `width="${RASTER}"`)
    .replace(/height="[^"]*"/, `height="${RASTER}"`);
}

async function hashPngBuffer(buf) {
  const { data, info } = await sharp(buf)
    .resize(SIZE, SIZE, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  return phash({ width: info.width, height: info.height, data: new Uint8Array(data), channels: 4 }, HASH_SIZE).toString();
}

async function screenshotLikeHash(IconComponent, { margins = 128, color } = {}) {
  let svg = normalizeSvg(IconComponent);
  if (color) {
    svg = svg.replace(/fill="currentColor"/g, `fill="${color}"`);
  }
  const large = await sharp(Buffer.from(svg))
    .resize(RASTER, RASTER, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toBuffer();

  const withMargins = margins
    ? await sharp(large).extend({ top: margins, bottom: margins, left: margins, right: margins, background: '#ffffff' }).png().toBuffer()
    : large;

  const flattened = await sharp(withMargins).flatten({ background: '#ffffff' }).png().toBuffer();
  const cropped = await sharp(flattened).trim({ threshold: TRIM_THRESHOLD }).png().toBuffer();
  return hashPngBuffer(cropped);
}

function rank(hashHex) {
  const q = hexToHash(hashHex);
  return fps
    .map((f) => ({ name: f.name, group: f.group, d: hexToHash(f.hash).subtract(q) }))
    .sort((a, b) => a.d - b.d);
}

function report(label, hashHex, target) {
  const ranked = rank(hashHex);
  const pos = ranked.findIndex((r) => r.name === target) + 1;
  const top3 = ranked.slice(0, 3).map((r) => `${r.group}/${r.name}(${r.d})`).join(', ');
  console.log(`${label} -> rank of ${target}: #${pos}; top3: ${top3}`);
}

const cases = [
  ['AccessibilityFilled', newIcons, undefined],
  ['AddCircleFilled', newIcons, undefined],
  ['Activity', newIcons, undefined],
  ['ArrowDownOutlined', legacyIcons, undefined],
  ['AOrderAdjustmentcolumn', newIcons, '#1e6fff'], // colored variant
  ['AOrderAdjustmentcolumn', newIcons, '#000000'],
  ['RollbackOutlined', legacyIcons, undefined],
];
for (const [target, dict, color] of cases) {
  if (!dict[target]) {
    console.log(`${target}: not found`);
    continue;
  }
  const label = `${target}${color ? ` color=${color}` : ''}`;
  const hash = await screenshotLikeHash(dict[target], { color });
  report(label, hash, target);
}

// degenerate fingerprint count
const degenerate = fps.filter((f) => {
  const ones = [...f.hash].reduce((acc, c) => acc + (parseInt(c, 16).toString(2).match(/1/g) || []).length, 0);
  return ones <= 8 || ones >= 248;
});
console.log('near-uniform fingerprints:', degenerate.length, '/', fps.length);
