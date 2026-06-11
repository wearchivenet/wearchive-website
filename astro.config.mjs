import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: "https://we-archive.org",
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap()
  ],
  output: "server",
  adapter: vercel()
});
