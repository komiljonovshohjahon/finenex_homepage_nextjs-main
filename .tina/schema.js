import { defineSchema, defineConfig } from "tinacms";
import { homepage_string_schema } from "./custom_schemas/homepage_string_schema";
import { client } from "./__generated__/client";

const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";
const schema = defineSchema({
  config: {
    token: "f8aba1a8d1cb8a3f1c22cf94a5d36e44ba7a0b66", // generated on app.tina.io,
    clientId: "df693917-a715-4c2a-87b6-6c693a620848", // generated on app.tina.io
    branch,
    media: {
      tina: {
        publicFolder: "public",
        mediaRoot: "assets",
      },
    },
    // mediaConfig,
  },
  collections: [homepage_string_schema],
});

export default schema;

// Your tina config

export const tinaConfig = defineConfig({
  client,
  schema,
});
