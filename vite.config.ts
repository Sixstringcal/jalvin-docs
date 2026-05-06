import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jalvin from "@jalvin/vite-plugin";
import { resolve } from "path";

export default defineConfig({
  base: "/",
  resolve: {
    alias: {
      src: resolve(__dirname, "src"),
    },
    extensions: [".jalvin", ".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json"],
  },
  server: {
    port: 3000,
    strictPort: true,
  },
  preview: {
    port: 3000,
    strictPort: true,
  },
  build: {
    target: "esnext",
    commonjsOptions: {
      include: [/node_modules/, /packages\/runtime\/dist/],
    },
  },
  plugins: [
    jalvin({
      entry: {
        file: "./src/DocsApp.jalvin",
        component: "DocsApp",
        title: "Jalvin Developer Docs",
      },
    }),
    react(),
  ],
});
