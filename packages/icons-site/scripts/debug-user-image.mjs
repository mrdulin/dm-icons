// Inspect a user screenshot's pixel composition (corners, edges, dominant colors).
import sharp from 'sharp';

const imagePath = process.argv[2];
const { data, info } = await sharp(imagePath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
console.log('size', info.width, 'x', info.height, 'channels', info.channels);
const px = (x, y) => {
  const i = (y * info.width + x) * 4;
  return [data[i], data[i + 1], data[i + 2], data[i + 3]].join(',');
};
console.log('corners:', px(0, 0), '|', px(info.width - 1, 0), '|', px(0, info.height - 1), '|', px(info.width - 1, info.height - 1));
console.log('edges mid:', px(Math.floor(info.width / 2), 0), px(Math.floor(info.width / 2), info.height - 1), px(0, Math.floor(info.height / 2)), px(info.width - 1, Math.floor(info.height / 2)));
const counts = {};
for (let i = 0; i < data.length; i += 4) {
  const k = `${data[i]},${data[i + 1]},${data[i + 2]}`;
  counts[k] = (counts[k] || 0) + 1;
}
const top = Object.entries(counts)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 8);
console.log('top colors:', top.map(([k, c]) => `${k}:${c}`).join(' | '));
