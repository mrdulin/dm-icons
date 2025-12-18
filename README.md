# dm-icons

## 环境

- Nodejs: `>=18`

## 本地开发

安装依赖

```sh
npm install
```

启动dev server

```sh
npm run dev
```

添加svg文件到`packages/icons-react/src/assets`文件夹中，生成React组件

```sh
npm run generate
```

切换到dev server所在terminal session, 按<kbd>r</kbd> + <kbd>enter</kbd>重启服务器

## 发布

根目录下执行

```sh
# 生成React组件
npm run generate
```

```sh
git add . && git commit -m "提交信息"
```

更新`packages/icons-react`的`package.json`中的`version`

```sh
npm version patch --workspace=@d-matrix/icons-react
```

更新完成后，`postversion` npm script 会更新`packages/icons-site`包的`@d-matrix/icons-react`依赖版本，及根目录的`package-lock.json`

提交并推送到远程仓库即可

```sh
git add . && git commit -m "提交信息"
```

Github Actions有三个工作流

1. 发布`@d-matrix/icons-react`包到 npm registry
2. 发布图标预览页到 Github Pages
3. 自动创建一个`vX.X.X`的release
