import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  basePath: "/studio", // <--- ADD THIS LINE HERE
  name: "default",
  title: "Joseph Portfolio Studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});