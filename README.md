# dm-icons

![Maintained with npm workspace](https://img.shields.io/badge/maintained%20with-npm%20workspace-blue.svg)

## Packages

| Framework | Package name | Latest Version | Download stats | Bundle Size | Package Size |
| --- | --- | --- | --- | --- | --- |
| SVG | [@d-matrix/icons-svg](./packages/icons-svg) | [![NPM version](https://img.shields.io/npm/v/@d-matrix/icons-svg.svg?style=flat)](https://www.npmjs.com/package/@d-matrix/icons-svg) | ![NPM downloads](https://img.shields.io/npm/dm/@d-matrix/icons-svg.svg?style=flat) |   | [![install size](https://packagephobia.com/badge?p=@d-matrix/icons-svg)](https://packagephobia.com/result?p=@d-matrix/icons-svg) |
| React | [@d-matrix/icons-react](./packages/icons-react) | [![NPM version](https://img.shields.io/npm/v/@d-matrix/icons-react.svg?style=flat)](https://www.npmjs.com/package/@d-matrix/icons-react) | ![NPM downloads](https://img.shields.io/npm/dm/@d-matrix/icons-react.svg?style=flat) | ![bundlephobia](https://img.shields.io/bundlephobia/minzip/@d-matrix/icons-react) | [![install size](https://packagephobia.com/badge?p=@d-matrix/icons-react)](https://packagephobia.com/result?p=@d-matrix/icons-react) |

## 环境

- Nodejs: `>=18`

## 本地开发

安装依赖

```sh
npm install
```

## 添加新图标

添加svg文件到`packages/icons-svg/src/public`文件夹中，发布时执行根目录命令：

```sh
npm run release:icons
```

执行过程中会提示选择版本类型：`major`、`minor` 或 `patch`，同一次发布会同时作用于 `@d-matrix/icons-svg` 和 `@d-matrix/icons-react`。

启动dev server

```sh
npm run dev
```

访问`http://localhost:5173/dm-icons/`服务，预览svg生成的react组件

## 发布

如果只想预演发布步骤而不提交、不打 tag、不推送，可以执行：

```sh
npm run release:icons -- --bump-type patch --dry-run --no-push
```

正常发布时，在根目录执行：

```sh
npm run release:icons
```

脚本会串行执行以下步骤：

1. 提交当前图标变更
2. 根据选择的版本类型更新 `@d-matrix/icons-svg`
3. 提交 svg 版本变更
4. 根据选择的版本类型更新 `@d-matrix/icons-react`
5. 提交 react 版本变更
6. 创建 `vX.Y.Z` tag
7. 推送当前分支和 tag

如需跳过交互，可直接指定版本类型：

```sh
npm run release:icons -- --bump-type minor
```

剩下的工作就交给GitHub Actions, GitHub Actions有三个工作流

1. 发布`@d-matrix/icons-react`包和`@d-matrix/icons-svg`包到npm registry
2. 发布图标预览页到 Github Pages
3. 自动创建一个`vX.X.X`的release (`@d-matrix/icons-react`包的版本)
