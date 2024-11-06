import path from "path";
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
    outDir: path.resolve(__dirname, "../server/dist/client"),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
