import { phash, hexToHash, type Hash } from 'rosetta-squint-hash/browser';
import fingerprintsJson from './icon-fingerprints.json';
import config from '../scripts/normalize-config.json';

// Must stay in sync with scripts/generate-icon-index.mjs:
// flatten onto white -> bbox-crop -> downscale to hashInputSize -> pHash(hashSize).
// All shared constants live in ../scripts/normalize-config.json — never duplicate them here.
const RASTER = config.rasterSize;
const FINAL_SIZE = config.hashInputSize;
const HASH_SIZE = config.hashSize;
const TRIM_THRESHOLD = config.trimThreshold;

export type IconGroup = 'new' | 'legacy';

interface Fingerprint {
  name: string;
  group: IconGroup;
  hash: string;
}

export interface ImageMatch {
  name: string;
  group: IconGroup;
  distance: number;
}

export interface ImageSearchResult {
  previewUrl: string;
  matches: ImageMatch[];
}

interface DecodedFingerprint extends Fingerprint {
  hashObj: Hash;
}

// Decode all hex fingerprints once at module load instead of per query.
const fingerprints: DecodedFingerprint[] = (fingerprintsJson as Fingerprint[]).map((f) => ({
  ...f,
  hashObj: hexToHash(f.hash),
}));

export async function searchByImage(blob: Blob): Promise<ImageSearchResult> {
  const bitmap = await createImageBitmap(blob);
  try {
    // step 1: downscale to the build-side raster size (mirrors the 512px SVG raster)
    const scale = Math.min(1, RASTER / Math.max(bitmap.width, bitmap.height));
    const mid = document.createElement('canvas');
    mid.width = Math.max(1, Math.round(bitmap.width * scale));
    mid.height = Math.max(1, Math.round(bitmap.height * scale));
    const midCtx = mid.getContext('2d')!;
    midCtx.fillStyle = '#ffffff';
    midCtx.fillRect(0, 0, mid.width, mid.height);
    midCtx.drawImage(bitmap, 0, 0, mid.width, mid.height);

    // step 2: bbox-crop content differing from the white background
    const { width: mw, height: mh } = mid;
    const src = midCtx.getImageData(0, 0, mw, mh).data;
    let left = mw;
    let top = mh;
    let right = -1;
    let bottom = -1;
    for (let y = 0; y < mh; y++) {
      for (let x = 0; x < mw; x++) {
        const i = (y * mw + x) * 4;
        const diff = Math.max(Math.abs(src[i] - 255), Math.abs(src[i + 1] - 255), Math.abs(src[i + 2] - 255));
        if (diff > TRIM_THRESHOLD) {
          if (x < left) left = x;
          if (x > right) right = x;
          if (y < top) top = y;
          if (y > bottom) bottom = y;
        }
      }
    }
    if (right < 0) {
      throw new Error('图片中没有找到有效内容');
    }
    const cropWidth = right - left + 1;
    const cropHeight = bottom - top + 1;

    // step 3: fit the cropped content into the hash input size
    const canvas = document.createElement('canvas');
    canvas.width = FINAL_SIZE;
    canvas.height = FINAL_SIZE;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, FINAL_SIZE, FINAL_SIZE);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    const ratio = Math.min(FINAL_SIZE / cropWidth, FINAL_SIZE / cropHeight);
    const drawWidth = cropWidth * ratio;
    const drawHeight = cropHeight * ratio;
    ctx.drawImage(mid, left, top, cropWidth, cropHeight, (FINAL_SIZE - drawWidth) / 2, (FINAL_SIZE - drawHeight) / 2, drawWidth, drawHeight);

    const imageData = ctx.getImageData(0, 0, FINAL_SIZE, FINAL_SIZE);
    const queryHash = phash(
      { width: imageData.width, height: imageData.height, data: new Uint8Array(imageData.data), channels: 4 },
      HASH_SIZE,
    );

    const matches: ImageMatch[] = fingerprints
      .map((f) => ({ name: f.name, group: f.group, distance: f.hashObj.subtract(queryHash) }))
      .sort((a, b) => a.distance - b.distance);

    return { previewUrl: URL.createObjectURL(blob), matches };
  } finally {
    bitmap.close();
  }
}

// Greedy prefix grouping: variants of the same shape (e.g. AddCircle,
// AddCircleFilled) share a name prefix, so only the best-scoring one is kept.
// The extra part must start on a CamelCase/digit boundary to reduce false
// positives between distinct icons whose names merely share a prefix.
function isPrefixVariant(shorter: string, longer: string): boolean {
  return longer.startsWith(shorter) && longer.length > shorter.length && /[A-Z0-9]/.test(longer[shorter.length]);
}

export function dedupeByShape(matches: ImageMatch[], limit: number): ImageMatch[] {
  const kept: ImageMatch[] = [];
  for (const match of matches) {
    if (kept.some((k) => isPrefixVariant(k.name, match.name) || isPrefixVariant(match.name, k.name))) {
      continue;
    }
    kept.push(match);
    if (kept.length >= limit) {
      break;
    }
  }
  return kept;
}

export function similarityPercent(distance: number): number {
  return Math.max(0, Math.round((1 - distance / (HASH_SIZE * HASH_SIZE)) * 100));
}
