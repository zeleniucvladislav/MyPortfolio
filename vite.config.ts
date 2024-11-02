import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      pages: path.resolve(__dirname, "./src/pages"),
      components: path.resolve(__dirname, "./src/components"),
      utils: path.resolve(__dirname, "./src/utils"),
      types: path.resolve(__dirname, "./src/types"),
      assets: path.resolve(__dirname, "./src/assets"),
      static: path.resolve(__dirname, "./src/static"),
      styles: path.resolve(__dirname, "./src/styles"),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
  },

  server: {
    port: 3000,
  },
});
