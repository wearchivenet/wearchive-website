import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./studio/schemas";
import { deskStructure } from "./studio/deskStructure";

export default defineConfig({
  name: "we-archive-studio",
  title: "We Archive CMS",
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID || "replace-with-project-id",
  dataset: process.env.PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: deskStructure
    })
  ],
  schema: {
    types: schemaTypes
  }
});
