
# 基于 HonoJS + Drizzle ORM + Neon PG + Cloudflare Pages 的模板代码项目


## 快速开始

- 点击右上角 Use This Template 按钮，创建一个新项目到Git
- Clone 项目到本地
- 复制 NEON 的数据库信息到剪切板


### wrangler.toml 配置

1. 在 wrangler.toml 中第一行修改 name 为你想要的项目名称
2. 配置 DATABASE_URL 。



### 开发环境项目配置


```
touch .dev.vars

# 在 .dev.vars 文件中写入 NEON 的数据库信息添加数据库信息，如下

DATABASE_URL=postgresql://xxxxxx // 这里是你的NEON数据库信息


```

## 文件

1. src/db/schema.ts 是数据库的 schema 文件，可以在这里定义数据库的表结构。
2. src/client.tsx 是客户端的代码，可以在这里定义客户端的页面。
3. src/api/demo.ts 是 API 的代码，可以在这里定义 API 的路径和方法。



## 启动

本地启动


```txt
npm install
npm run dev
```

部署到 Cloudflare Pages

```txt
npm run deploy
```
