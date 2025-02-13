// @ts-check
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://aakashkcx.github.io/",
  base: "/",
  integrations: [react(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
