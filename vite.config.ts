import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/hebert29santana.github.io",
  server: { port: 3000 },
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  css: {
    preprocessorOptions: {
      sass: {
        math: "always",
        relativeUrls: true,
        javascriptEnabled: true,
      },
    },
  },
});
