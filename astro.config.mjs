import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://we-archive.org",
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap()
  ],
  output: "server",
  adapter: cloudflare()
});