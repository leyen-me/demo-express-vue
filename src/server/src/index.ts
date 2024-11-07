import express, { Express } from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";

let app: Express | null = null;
let NODE_ENV = "production"

async function createServer() {
  app = express();

  const isProduction = NODE_ENV === "production";
  const clientRoot = isProduction
    ? path.resolve(process.cwd(), "./client")
    : path.resolve(process.cwd(), "../client");

  let vite: any;
  if (!isProduction) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
      root: clientRoot, // 设置Vite项目根目录
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(clientRoot, "dist")));
  }

  // API 路由
  app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from Express!" });
  });

  // 处理所有其他路由
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template;
      if (!isProduction) {
        // 读取 index.html
        template = fs.readFileSync(
          path.resolve(clientRoot, "index.html"),
          "utf-8"
        );

        // 应用 Vite HTML 转换
        template = await vite.transformIndexHtml(url, template);
      } else {
        template = fs.readFileSync(
          path.resolve(clientRoot, "dist/index.html"),
          "utf-8"
        );
      }

      res.status(200).set({ "Content-Type": "text/html" }).end(template);
    } catch (e) {
      !isProduction && vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });

  return app;
}

createServer();

export default app;
module.exports = app;