#!/usr/bin/env node

/**
 * sd.config.js
 *
 * Style Dictionary configuration definitions for the @cw/design-system.
 * Exports theme config objects consumed by `scripts/build-tokens.js`.
 *
 * Each theme config sources DTCG-format design tokens from `primitive/` and `semantic/`
 * directories and generates CSS custom properties scoped to the appropriate selector
 * (`:root` for light, `[data-theme="dark"]` for dark).
 *
 * Token file structure:
 *   primitive/<theme>.tokens.json    - color palettes, typography scales, etc.
 *   semantic/<theme>.tokens.json     - theme-aware aliases (reference primitives)
 *
 * @see https://styledictionary.com/reference/config/
 */

import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** Root of the design-system package (one level up from scripts/) */
export const ROOT = resolve(__dirname, '..');

/** Source directories for primitive and semantic token files */
const PRIMITIVE_DIR = resolve(ROOT, 'primitive');
const SEMANTIC_DIR = resolve(ROOT, 'semantic');

/** Output directory for generated CSS files */
export const DIST_DIR = resolve(ROOT, 'src/styles');

// ---------------------------------------------------------------------------
// Shared hooks (transforms)
// ---------------------------------------------------------------------------

/** @type {import('style-dictionary/types/Config.d.ts').Config['hooks']} */
export const SHARED_HOOKS = {
  transforms: {
    /**
     * Convert `radius-full` tokens into percentage (`100%`).
     *
     * Some design systems define a "full" radius value to indicate a pill / circle shape.
     * This transform detects tokens whose path includes "radius" and whose value is the
     * string `"full"` and converts them to `"100%"`.
     */
    'ds/radius-full': {
      type: 'value',
      filter(token) {
        const path = token.path ?? [];
        // Match tokens in the radius category where the key is 'full'
        return path.includes('radius') && path.includes('full');
      },
      transform(token) {
        // Convert numeric value (e.g., 0.5) to percentage (e.g., 50%)
        const percent = typeof token.$value === 'number' ? token.$value * 100 : 100;
        return `${percent}%`;
      },
    },

    /**
     * Convert duration tokens (type: number) from raw milliseconds to CSS strings.
     *
     * DTCG tokens with `$type: 'number'` whose path includes `"duration"` are
     * assumed to be expressed in milliseconds.  Transform them into a CSS-compatible
     * string with the `"ms"` unit suffix (e.g. `250` → `"250ms"`).
     */
    'ds/duration-ms': {
      type: 'value',
      filter(token) {
        const path = token.path ?? [];
        return path.includes('duration') && typeof token.$value === 'number';
      },
      transform(token) {
        return `${token.$value}ms`;
      },
    },

    /**
     * Convert dimension category tokens from unitless px values to rem.
     *
     * Note: Style Dictionary's built-in `size/rem` transform only matches
     * tokens with `$type: 'dimension' | 'fontSize'`. Our Figma-exported
     * tokens use `$type: 'number'`, so we use a custom transform here.
     *
     * Figma exports dimension values as numbers representing pixels
     * (e.g. 16 = 16px). For CSS, rem units are preferred because they
     * scale with the user's root font-size preference (accessibility).
     *
     * Assumes 1rem = 16px (browser default).
     */
    'ds/dimension': {
      type: 'value',
      filter(token) {
        const path = token.path ?? [];
        return (
          (path.includes('dimension') || path.includes('radius')) &&
          typeof token.$value === 'number'
        );
      },
      // eslint-disable-next-line no-unused-vars
      transform(token, config, options) {
        const rem = token.$value / 16;
        return parseFloat(rem.toFixed(4)) + 'rem';
      },
    },

    /**
     * Preserve opacity token values without floating-point precision issues.
     *
     * JavaScript can introduce floating-point errors (e.g., 0.1 → 0.10000000149011612).
     * This transform rounds to 4 decimal places to avoid floating-point artifacts.
     */
    'ds/opacity': {
      type: 'value',
      filter(token) {
        const path = token.path ?? [];
        return path.includes('opacity') && typeof token.$value === 'number';
      },
      transform(token) {
        // Round to 4 decimal places to avoid floating-point artifacts
        return `${Math.round(token.$value * 10000) / 10000}`;
      },
    },

    /**
     * Convert breakpoint tokens from px to rem.
     *
     * Breakpoint values are expressed in pixels (e.g., 768 = 768px) but
     * should be converted to rem for consistency with other dimension tokens.
     */
    'ds/breakpoint': {
      type: 'value',
      filter(token) {
        const path = token.path ?? [];
        return path.includes('breakpoint') && typeof token.$value === 'number';
      },
      // eslint-disable-next-line no-unused-vars
      transform(token, config, options) {
        const rem = token.$value / 16;
        return parseFloat(rem.toFixed(4)) + 'rem';
      },
    },

    /**
     * Normalise font-weight string values (e.g. "Semi Bold", "Regular")
     * from Figma into standard CSS numeric font-weight values.
     *
     * CSS `font-weight` accepts numeric keywords (100-900) and the
     * named keywords `normal` (400), `bold` (700), etc.  Figma exports
     * human-readable weight names that are not valid CSS values, so we
     * map them here.
     */
    'ds/font-weight': {
      type: 'value',
      filter(token) {
        // Match tokens where:
        // - key starts with '{font.weight' (DTCG reference key format)
        // - path includes 'fontWeight' (camelCase path element)
        // - path includes 'weight' (semantic path element)
        const key = token.key ?? '';
        const path = token.path ?? [];
        return (
          (key.startsWith('{font.weight') ||
           path.includes('fontWeight') ||
           path.includes('weight')) &&
          typeof token.$value === 'string'
        );
      },
      // eslint-disable-next-line no-unused-vars
      transform(token, config, options) {
        const WEIGHT_MAP = {
          thin: 100,
          hairline: 100,
          extralight: 200,
          light: 300,
          regular: 400,
          normal: 400,
          medium: 500,
          'semi bold': 600,
          semibold: 600,
          bold: 700,
          extrabold: 800,
          black: 900,
          heavy: 900,
        };

        const normalized = token.$value.trim().toLowerCase();
        return WEIGHT_MAP[normalized] ?? token.$value;
      },
    },

    /**
     * Convert deprecated rgba() color format to modern rgb() with alpha.
     *
     * CSS `rgb()` with alpha channel (e.g., `rgb(255 0 0 / 0.5)`) is the modern
     * way to specify colors with transparency. This transform converts legacy
     * `rgba()` notation to the newer syntax for better compatibility with
     * modern CSS tooling and improved readability.
     */
    'ds/color-rgba-to-rgb': {
      type: 'value',
      filter(token) {
        return typeof token.$value === 'string' && /rgba\(\s*/i.test(token.$value);
      },
      transform(token) {
        // Convert rgba(r, g, b, a) to rgb(r g b / a)
        return token.$value.replace(/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/i, (_, r, g, b, a) => {
          const alphaPercent = Math.round(parseFloat(a) * 100);
          return `rgb(${r} ${g} ${b} / ${alphaPercent}%)`;
        });
      },
    },

    /**
     * Convert font-size tokens from pixel values to rem units.
     *
     * Figma exports font-size values as numbers representing pixels
     * (e.g., 16 = 16px). For CSS, rem units are preferred because they
     * scale with the user's root font-size preference (accessibility).
     *
     * Assumes 1rem = 16px (browser default).
     */
    'ds/font-size': {
      type: 'value',
      filter(token) {
        const path = token.path ?? [];
        // Match path elements that contain 'fontSize' (camelCase) or separate 'font' and 'size'
        return (
          (path.some(p => p.toLowerCase().includes('fontsize')) ||
           (path.includes('font') && path.includes('size'))) &&
          typeof token.$value === 'number'
        );
      },
      // eslint-disable-next-line no-unused-vars
      transform(token, config, options) {
        const rem = token.$value / 16;
        return parseFloat(rem.toFixed(4)) + 'rem';
      },
    },

    /**
     * Convert line-height tokens to unitless values.
     *
     * Line-height values are expressed in pixels (e.g., 24 = 24px).
     * For CSS, line-height should be unitless (divided by the font-size).
     * We divide by 16 (default browser font size) to get a unitless ratio.
     */
    'ds/line-height': {
      type: 'value',
      filter(token) {
        const path = token.path ?? [];
        return path.includes('lineHeight') && typeof token.$value === 'number';
      },
      transform(token) {
        // Divide by 16 (default browser font size) to get unitless value
        return `${token.$value / 16}`;
      },
    },

    /**
     * Convert paragraph-spacing tokens from px to rem.
     *
     * Paragraph spacing values are expressed in pixels (e.g., 16 = 16px)
     * and should be converted to rem for consistent spacing.
     */
    'ds/paragraph-spacing': {
      type: 'value',
      filter(token) {
        const path = token.path ?? [];
        return path.includes('paragraphSpacing') && typeof token.$value === 'number';
      },
      transform(token) {
        const rem = token.$value / 16;
        return parseFloat(rem.toFixed(4)) + 'rem';
      },
    },

    /**
     * Wrap font-family values in quotes for consistency.
     *
     * Font-family values should be quoted strings for consistency,
     * especially when the font name contains spaces.
     */
    'ds/font-family': {
      type: 'value',
      filter(token) {
        const path = token.path ?? [];
        // Match path elements containing 'fontFamily' (handles both 'fontFamily' and 'font' + 'family')
        return (
          (path.some(p => p.toLowerCase().includes('fontfamily')) ||
           (path.includes('font') && path.includes('family'))) &&
          typeof token.$value === 'string'
        );
      },
      transform(token) {
        return `"${token.$value}"`;
      },
    },
  },
};

// ---------------------------------------------------------------------------
// Theme definitions
// ---------------------------------------------------------------------------

/**
 * Build a full Style Dictionary configuration object for the given theme.
 *
 * @param {'light'|'dark'} theme - The theme name
 * @returns {import('style-dictionary/types/Config.d.ts').Config} SD config
 */
export function getThemeConfig(theme) {
  const isLight = theme === 'light';

  return {
    source: [
      resolve(PRIMITIVE_DIR, `${theme}.tokens.json`),
      resolve(SEMANTIC_DIR, `${theme}.tokens.json`),
    ],

    hooks: SHARED_HOOKS,

    platforms: {
      css: {
        transformGroup: 'css',
        transforms: ['ds/radius-full', 'ds/duration-ms', 'ds/dimension', 'ds/breakpoint', 'ds/opacity', 'ds/font-weight', 'ds/color-rgba-to-rgb', 'ds/font-size', 'ds/line-height', 'ds/paragraph-spacing', 'ds/font-family'],
        files: [
          {
            destination: resolve(DIST_DIR, `${theme}.css`),
            format: 'css/variables',
            options: {
              selector: isLight ? ':root' : '[data-theme="dark"]',
              outputReferences: true,
            },
          },
        ],
      },
    },
  };
}

/** List of all supported theme names */
export const THEMES = ['light', 'dark'];
