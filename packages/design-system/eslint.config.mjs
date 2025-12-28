import js from '@eslint/js';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import * as mdx from 'eslint-plugin-mdx';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import storybook from 'eslint-plugin-storybook';
import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['node_modules/', 'storybook-static/', 'dist/']),
  {
    ...js.configs.recommended,
    files: ['**/*.{js,mjs,jsx,mjsx,ts,mtw,tsx,mtsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    ...react.configs.flat.recommended,
    settings: {
      ...react.configs.flat.recommended.settings,
      react: {
        version: 'detect',
      },
    },
    files: ['**/*.{jsx,mjsx,tsx,mtsx}'],
    ignores: ['node_modules', 'dist'],
    rules: {
      ...react.configs.flat.recommended.rules,
      'react/prop-types': 'off',
    },
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
