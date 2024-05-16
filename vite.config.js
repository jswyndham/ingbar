import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcss from "postcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss,
  },
  build: {
    outDir: "dist", // This is the default value
  },
});
