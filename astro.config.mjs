import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  outDir: "./u2",
  css: {
    preprocessor: "sass",
  },
  integrations: [
    react({
      experimentalReactChildren: true,
    }),
  ],
});
