import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
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
  // Set base URL for GitHub Pages
  base: mode === 'production' ? '/Gurekam-Portfolio/' : '/',
  // Build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    emptyOutDir: true,
    minify: mode === 'production' ? 'esbuild' : false,
  },
  // Preview configuration
  preview: {
    port: 8080,
    strictPort: true,
  },
}));
