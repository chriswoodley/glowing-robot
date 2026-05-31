/**
 * lint-staged configuration for the @cw/platform monorepo.
 *
 * Each linter resolves its own config by searching upward from the file
 * being linted — so running from the repo root works because:
 *   - ESLint (flat config) finds workspace-local eslint.config.*
 *   - Prettier finds workspace-local .prettierrc
 *   - Stylelint only applies to files under packages/design-system
 *
 * All binaries are hoisted to root node_modules/.bin by Yarn Berry
 * with nodeLinker: node-modules.
 */
module.exports = {
  // --- JavaScript / TypeScript -------------------------------------------------
  // ESLint (flat config auto-resolves per workspace) then Prettier
  "*.{js,mjs,cjs,jsx,ts,tsx,mts,cts}": ["eslint --fix", "prettier --write"],

  // --- Styles ------------------------------------------------------------------
  // Stylelint (only relevant for files under packages/design-system) then Prettier
  "*.{css,scss}": ["stylelint --fix", "prettier --write"],

  // --- JSON / Markdown / YAML / other -----------------------------------------
  "*.{json,jsonc,md,yaml,yml}": ["prettier --write"],
};
