# 项目介绍

- `DemoExpressVueVercel`是一个全栈项目
- 将Vue3和Express集成在一起
- 使用pnpm包管理
- 全部使用TypeScript调用
- 也可以很方便的部署到Vercel和Node

## 开发环境启动

```sh
pnpm dev
```

## 生产环境构建

```sh
pnpm build
```

## 生产环境构建预览

```sh
pnpm start
```

## 仅安装客户端依赖

```sh
pnpm --filter client install package-name
```

## 仅安装服务端依赖

```sh
pnpm --filter server install package-name
```

## 在所有项目中安装开发依赖

```sh
pnpm -r install typescript -D
```

## 部署到Vercel

```sh
vercel
```
