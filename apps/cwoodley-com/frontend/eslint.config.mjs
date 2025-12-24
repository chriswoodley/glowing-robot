import { defineConfig } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

// Get the current directory and filename for compatibility purposes
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a compat object to use recommended and all configurations
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    extends: [...compat.extends("eslint:recommended"), ...nextCoreWebVitals],
  },
  {
    files: ["**/*.js"],
    rules: {
      semi: ["error", "always"],
      "semi-spacing": ["error", { before: false, after: true }],
      "arrow-parens": ["error", "always"],
      "arrow-spacing": "error",
      "space-in-parens": ["error", "never"],
      "space-before-function-paren": ["error", "never"],
      "padded-blocks": ["error", "never"],
      "no-trailing-spaces": "error",
      "array-bracket-spacing": ["error", "always"],
      "object-curly-spacing": ["error", "always"],
      "eol-last": ["error", "always"],
    },
  },
]);
