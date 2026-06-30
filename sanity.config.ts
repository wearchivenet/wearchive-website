import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./studio/schemas";
import { deskStructure } from "./studio/deskStructure";

export default defineConfig({
  name: "astra-arcana-studio",
  title: "Astra Arcana CMS",
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID || "82czi5fi",
  dataset: process.env.PUBLIC_SANITY_DATASET || "production",
  plugins: [
    structureTool({
      structure: deskStructure
    })
  ],
  schema: {
    types: schemaTypes
  }
});
