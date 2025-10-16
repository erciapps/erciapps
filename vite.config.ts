import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// ⚙️ Configuración final para Vite + React + Tailwind + GitHub Pages
export default defineConfig({
  base: "/erciapps/", // 👈 pon aquí el nombre de tu repositorio
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
  build: {
    outDir: "dist",
  },
  server: {
    host: "::",
    port: 8080,
  },
});
