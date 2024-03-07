import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  base: "/u2-dev",
  outDir: "./dist/u2-dev",
  css: {
    preprocessor: "sass",
  },
  integrations: [
    react({
      experimentalReactChildren: true,
    }),
  ],
});
