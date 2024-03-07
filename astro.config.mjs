import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  base: "/u2-dev",
  outDir: "./",
  css: {
    preprocessor: "sass",
  },
  integrations: [
    react({
      experimentalReactChildren: true,
    }),
  ],
});
