import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/Gurekam-Portfolio/",
  build: {
    outDir: "docs",
    assetsDir: "assets",
    sourcemap: true,
    emptyOutDir: true,
  },
  preview: {
    port: 8080,
    strictPort: true,
  },
});
