import js from '@eslint/js';
import eslintReact from '@eslint-react/eslint-plugin';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import * as mdx from 'eslint-plugin-mdx';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import storybook from 'eslint-plugin-storybook';
import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['node_modules/', 'storybook-static/', 'dist/']),
  {
    ...js.configs.recommended,
    files: ['**/*.{js,mjs,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    ...eslintReact.configs['recommended'],
    files: ['**/*.{jsx,mjsx,tsx,mtsx}'],
    ignores: ['node_modules', 'dist'],
  },
  {
    ...reactHooks.configs.flat.recommended,
  },
  {
    ...jsxA11y.flatConfigs.recommended,
  },
  {
    ...reactRefresh.configs.recommended,
  },
  {
    ...mdx.flat,
  },
  {
    ...mdx.flatCodeBlocks,
  },
  ...storybook.configs['flat/recommended'],
]);
