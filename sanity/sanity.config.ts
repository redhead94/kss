import {defineConfig} from "sanity";
import {presentationTool} from "sanity/presentation";
import {visionTool} from "@sanity/vision";
import {schemaTypes} from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "Kehillas Shaar Simcha CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [
    presentationTool({
      previewUrl: {
        initial: process.env.SANITY_STUDIO_PREVIEW_ORIGIN || "http://localhost:3000",
        previewMode: {
          enable: "/api/draft-mode/enable",
          disable: "/api/draft-mode/disable",
        },
      },
      // optionally:
      allowOrigins: ['http://localhost:*'],
      // resolve: { locations, mainDocuments }
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});
