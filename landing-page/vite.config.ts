import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        shared: 'http://localhost:3000/assets/shared.js',
      },
      shared: ["react","react-dom"],
    }),
  ],
  preview: {
    port: 3001,
  },
  build: { 
    target: 'esnext', 
    minify: false, 
    cssCodeSplit: false
  }
});
