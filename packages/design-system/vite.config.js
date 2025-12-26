import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: resolve(__dirname, ".postcssrc.json"),
  },
  resolve: {
    alias: {
      atoms: resolve(__dirname, "src/atoms/"),
      molecules: resolve(__dirname, "src/molecules/"),
      organisms: resolve(__dirname, "src/organisms/"),
      templates: resolve(__dirname, "src/templates/"),
      styles: resolve(__dirname, "src/styles/"),
      utils: resolve(__dirname, "src/utils/"),
      hooks: resolve(__dirname, "src/hooks/"),
      icons: resolve(__dirname, "src/icons/"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "@cw/design-system",
      // the proper extensions will be added
      fileName: "main",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react", "react-dom", "styled-components"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled",
        },
      },
    },
  },
});
