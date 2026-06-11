import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import { loadEnv } from "vite";

const env = loadEnv(process.env.NODE_ENV || "development", process.cwd(), "");
const projectId = env.PUBLIC_SANITY_PROJECT_ID || "82czi5fi";
const dataset = env.PUBLIC_SANITY_DATASET || "production";
const apiVersion = env.PUBLIC_SANITY_API_VERSION || "2025-01-01";

export default defineConfig({
  site: "https://we-archive.org",
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap(),
    sanity({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      studioBasePath: "/studio"
    }),
    react()
  ],
  output: "server",
  adapter: cloudflare()
});