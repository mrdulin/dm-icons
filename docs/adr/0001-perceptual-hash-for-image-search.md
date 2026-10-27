# 以图找图采用感知哈希（rosetta-squint-hash pHash），构建时预计算索引，浏览器端匹配

站点是纯静态 GitHub Pages，不能有后端，且用户截图（可能含业务 UI）不能离开浏览器。因此以图找图采用：构建时对全部图标预计算感知哈希指纹（`scripts/generate-icon-index.mjs`，输出 `src/icon-fingerprints.json`，约 250 KB），浏览器端对用户截图计算同一算法的哈希并做汉明距离排序。算法用 `rosetta-squint-hash` 的 `phash`（hashSize=16，256 bit）——它是 Python `imagehash` 4.3.2 的逐字节精确 TypeScript 移植，同时支持 Node 与浏览器、零原生依赖。两侧的归一化流水线必须保持一致：白底合成 → 内容包围盒裁剪 → 64×64 缩放（顺序与实现见 `scripts/generate-icon-index.mjs` 与 `src/icon-search.ts`，改动需同步）。

## Considered Options

- **自写 dHash**：被"优先用成熟库"原则否决，但保留为退路——实现仅约 25 行，且对二值图标最稳健。
- **`blockhash-js`**：已实际落地后放弃。其"象限中位数"阈值机制在**高覆盖率实心图标**（如 `AddCircleFilled` 圆盘占 bbox 73%+）上会退化——中位数等于极值时整段比特同值，实测 2278 个图标中 322 个（14%）指纹接近全 0/全 1，互相碰撞产生大量误配。
- **`imagehash-web`**：算法合适（DCT pHash 无中位数坍缩），但其 `imageUtils.js` 顶层 `import 'canvas'` 依赖 node-canvas 原生模块，在 Node 24 / Windows 上无预编译二进制、node-gyp 编译失败，且无法通过 stub 绕过而只保留其数学部分——依赖手术成本高于收益。
- **深度特征（CLIP/ONNX）**：最准但模型体积大（5–40 MB）、首屏加载重，对"截图查重"场景过度设计。

## Consequences

- 指纹索引与图标库版本绑定：`prebuild` 钩子保证每次站点构建自动重建；`src/icon-fingerprints.json` 同时提交到仓库，保证 dev 模式与未跑 prebuild 的场景可用。
- 截图与 SVG 光栅化的渲染差异是固有边界：同图标实测汉明距离 0–40/256，正确图标稳定排第一，次名距离 80+。若未来准确率不足，优先加大 `HASH_SIZE`（32 → 1024 bit，索引约 1 MB）而非换算法。
- 归一化常量（`trim` 阈值、光栅尺寸、哈希输入尺寸）集中在 `scripts/normalize-config.json`，构建脚本、质量校验脚本与浏览器端共同引用；修改后必须用 `scripts/check-fingerprint-quality.mjs` 回归。
- 形状去重是**前缀启发式**：名字互为前缀的图标（如 `Add` 与 `AddCircle`）会被视为同形状而只保留得分较高者。这在查重场景可接受（命中的形状家族仍在结果附近），但不是精确的形状分组。
