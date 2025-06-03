import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@Components": path.resolve(__dirname, "src/components"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@Pages": path.resolve(__dirname, "src/Pages"),
      "@Images": path.resolve(__dirname, "src/assets/Images"),
      "@Data": path.resolve(__dirname, "src/assets/data"),
      "@Layouts": path.resolve(__dirname, "src/Layouts"),
    },
  },
});
