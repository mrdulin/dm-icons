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

添加svg文件到`packages/icons-react/src/assets`文件夹中, 调整`svg`元素的`viewBox`属性，生成React组件

```sh
npm run generate
```

切换到dev server所在terminal session, 按<kbd>r</kbd> + <kbd>enter</kbd>重启服务器
