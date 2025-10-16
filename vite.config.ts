export default defineConfig({
  base: "/erciapps/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  server: {
    host: "::",
    port: 8080,
  },
  // 👇 esto asegura que cualquier ruta devuelva index.html
  optimizeDeps: {},
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
  // 👇 truco para GitHub Pages con SPA
  esbuild: {
    legalComments: "none",
  },
});
