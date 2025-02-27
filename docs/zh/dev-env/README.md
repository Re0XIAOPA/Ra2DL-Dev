---
title: 开发环境
icon: gear
date: 2023-11-20
category:
  - 开发指南
tag:
  - 环境配置
  - 前端开发
---
---

## IDE 选择

| 工具 | 特点 | 官网 |
|------|------|------|
| ![VS Code](https://img.icons8.com/color/48/visual-studio-code-2019.png) Visual Studio Code | 轻量级、插件生态丰富 | [官网下载](https://code.visualstudio.com/) |
| ![WebStorm](https://img.icons8.com/color/48/webstorm.png) WebStorm | 功能全面、智能提示强大 | [官网下载](https://www.jetbrains.com/webstorm/) |

::: tip 选择建议
- 新手推荐使用 VS Code
- 企业级项目推荐 WebStorm
  :::
## 框架

需要用到的框架，可在线访问官网 [Bootstrap](https://getbootstrap.com/) 、 [Vuejs](https://cn.vuejs.org/) 安装

## 安装Bootstrap

官网 [Bootstrap](https://getbootstrap.com/) 安装，或直接下载 [v5.3.3](https://github.com/twbs/bootstrap/releases/download/v5.3.3/bootstrap-5.3.3-dist.zip) 、 [v4.6.2](https://github.com/twbs/bootstrap/releases/download/v4.6.2/bootstrap-4.6.2-dist.zip)

::: tabs
@tab npm
```bash
npm i bootstrap@5.3.3
```
:::

## 安装Vue

官网 [Vue 3](https://cn.vuejs.org/) 、 [Vue 2](https://v2.cn.vuejs.org/)

::: tabs
@tab npm
```bash
npm create vue@latest
```
@tab pnpm
```bash
pnpm create vue@latest
```
@tab yarn
```bash
# For Yarn (v1+)
yarn create vue

# For Yarn Modern (v2+)
yarn create vue@latest

# For Yarn ^v4.11
yarn dlx create-vue@latest
```
@tab bun
```bash
bun create vue@latest
```
:::

官网 [Vue 2](https://v2.cn.vuejs.org/) 或直接下载 [Vue 2](https://v2.cn.vuejs.org/js/vue.js)

::: tabs
@tab npm
```bash
# 最新稳定版
$ npm install vue@^2
```
:::