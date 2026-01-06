# dm-icons

![Maintained with npm workspace](https://img.shields.io/badge/maintained%20with-npm%20workspace-blue.svg)

## Packages

| Framework | Package name | Latest Version | Download stats | Bundle Size | Package Size |
| --- | --- | --- | --- | --- | --- |
| SVG | [@d-matrix/icons-svg](./packages/icons-svg) | [![NPM version](https://img.shields.io/npm/v/@d-matrix/icons-svg.svg?style=flat)](https://www.npmjs.com/package/@d-matrix/icons-svg) | ![NPM downloads](https://img.shields.io/npm/dm/@d-matrix/icons-svg.svg?style=flat) |   | [![install size](https://packagephobia.com/badge?p=@d-matrix/icons-svg)](https://packagephobia.com/result?p=@d-matrix/icons-svg) |
| React | [@d-matrix/icons-react](./packages/icons-react) | [![NPM version](https://img.shields.io/npm/v/@d-matrix/icons-react.svg?style=flat)](https://www.npmjs.com/package/@d-matrix/icons-react) | ![NPM downloads](https://img.shields.io/npm/dm/@d-matrix/icons-react.svg?style=flat) | ![bundlephobia](https://img.shields.io/bundlephobia/minzip/@d-matrix/icons-react@0.58.1) | [![install size](https://packagephobia.com/badge?p=@d-matrix/icons-react)](https://packagephobia.com/result?p=@d-matrix/icons-react) |

## 环境

- Nodejs: `>=18`

## 本地开发

安装依赖

```sh
npm install
```

## 添加新图标

添加svg文件到`packages/icons-svg/src/public`文件夹中, 更新包版本

```sh
npm version minor --workspace=@d-matrix/icons-svg
```

启动dev server

```sh
npm run dev
```

访问`http://localhost:5173/dm-icons/`服务，预览svg生成的react组件

## 发布

先发布`@d-matrix/icons-svg`包, 注意：目前需要手动发布

```bash
cd packages/icons-svg && npm run pb
```

git提交所有变更文件，提交后更新`@d-matrix/icons-react`包的版本, 根目录下执行

```sh
npm version minor --workspace=@d-matrix/icons-react
```

更新完成后，由于`postversion` npm script 会更新`packages/icons-site`包的`@d-matrix/icons-react`依赖版本，及根目录的`package-lock.json`, 需再次提交变更文件，最后推送到远程仓库。

剩下的工作就交给GitHub Actions, GitHub Actions有三个工作流

1. 发布`@d-matrix/icons-react`包和`@d-matrix/icons-svg`包到npm registry
2. 发布图标预览页到 Github Pages
3. 自动创建一个`vX.X.X`的release (`@d-matrix/icons-react`包的版本)
