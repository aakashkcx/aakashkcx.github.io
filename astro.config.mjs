// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://aakashkcx.github.io/",
  base: "/",
  vite: {
    plugins: [tailwindcss()],
  },
});
