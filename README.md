# eve3

这个项目的目的是寻找一种简单的方法，来开发桌面应用程序。
以前也是用过Electron加Vue加Element的方法，但是设置麻烦，而且不能使用构建工具，没有热更新，有着很多问题。
也尝试过使用Quasar。感觉前端不如Element好用，调试也不很方便。

这是我的第三次尝试。
第一次是先安装VUE，再添加Electron。用Webpack。设置比较麻烦。
第二次是根据Electron Forge上的教程，先装Electron Forge，再添加VUE。但是设置好之后，无法在VSCode中调试主进程。Electron Forge的设置，还是为Webpack考虑的，对Vite项目支持不好。
最近看到electron-vite项目，可以很方便地构建Electron项目，还可以直接加入VUE3。能在VSCode中方便地调试。
[electron-vite](https://electron-vite.org/)

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```
