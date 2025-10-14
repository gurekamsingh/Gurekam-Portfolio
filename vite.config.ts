import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
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
  // Use '/' for Docker, '/Gurekam-Portfolio/' for GitHub Pages
  base: mode === 'docker' ? '/' : '/Gurekam-Portfolio/',
  build: {
    outDir: mode === 'docker' ? 'dist' : 'docs',
    assetsDir: "assets",
    sourcemap: true,
    emptyOutDir: true,
  },
  preview: {
    port: 8080,
    strictPort: true,
  },
}));