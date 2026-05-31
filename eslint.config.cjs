/**
 * Root ESLint configuration for the @cw/platform monorepo.
 *
 * This config applies ONLY to root-level configuration files
 * (e.g., .lintstagedrc.cjs). Workspace-level files are handled by
 * their own eslint.config.* files located in each workspace directory.
 *
 * ESLint v10 requires a config file to be found for any linted file.
 * Without this file, lint-staged fails when running ESLint on
 * root-level .cjs/.js files.
 *
 * The `files` pattern restricts this config to only match root-level
 * config files, so it does not cascade into workspace configs.
 */
module.exports = [
  {
    files: [".lintstagedrc.cjs"],
    rules: {
      semi: ["error", "always"],
      "semi-spacing": ["error", { before: false, after: true }],
      "no-trailing-spaces": "error",
      "eol-last": ["error", "always"],
    },
  },
];
