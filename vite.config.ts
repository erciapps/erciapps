import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Solo importamos el servidor si estamos en modo desarrollo
let createServer: any;
if (process.env.NODE_ENV === "development") {
  try {
    ({ createServer } = await import("./server"));
  } catch {
    // Ignorar si no existe el archivo
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: ["./client", "./shared"],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },
  build: {
    outDir: "dist",
  },
  plugins: [react(), ...(mode === "serve" && createServer ? [expressPlugin()] : [])],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // Solo en desarrollo
    configureServer(server) {
      if (createServer) {
        const app = createServer();
        server.middlewares.use(app);
      }
    },
  };
}

