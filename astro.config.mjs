import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  outDir: "./dist",
  css: {
    preprocessor: "sass",
  },
  integrations: [
    react({
      experimentalReactChildren: true,
    }),
  ],
});
