import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import autoprefixer from "autoprefixer";
import postcss from "postcss";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwind from "tailwindcss";
import react from "@vitejs/plugin-react";
import prefixer from "postcss-prefix-selector";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), cssInjectedByJsPlugin()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "min.js",
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        postcss([tailwind, autoprefixer]),
        prefixer({
          prefix: "#wb_026fea4a",
          transform(_, selector, prefixedSelector, filePath, rule) {
            if (filePath.match(/node_modules/)) {
              return selector;
            }

            const annotation = rule.prev();
            if (
              annotation?.type === "comment" &&
              annotation.text.trim() === "no-prefix"
            ) {
              return selector;
            }

            return prefixedSelector;
          },
        }),
      ],
    },
  },
});
