#!/usr/bin/env node

/**
 * build-tokens.js
 *
 * Builds CSS custom properties from design tokens for all configured themes.
 *
 * Uses Style Dictionary's programmatic API to create a separate build
 * instance per theme, handling the fact that light and dark semantic
 * tokens define the same names with different values.
 *
 * Usage:
 *   node ./scripts/build-tokens.js            # builds all themes
 *   node ./scripts/build-tokens.js light      # builds only light
 *   node ./scripts/build-tokens.js dark       # builds only dark
 */

import { existsSync, mkdirSync } from 'node:fs';
import StyleDictionary from 'style-dictionary';
import { DIST_DIR, getThemeConfig, THEMES } from './sd.config.js';

// ---------------------------------------------------------------------------
// Ensure output directory exists
// ---------------------------------------------------------------------------

if (!existsSync(DIST_DIR)) {
  mkdirSync(DIST_DIR, { recursive: true });
}

// ---------------------------------------------------------------------------
// Runner
// ---------------------------------------------------------------------------

/**
 * Build tokens for a single theme.
 *
 * @param {'light'|'dark'} theme
 * @returns {Promise<boolean>} Whether the build succeeded.
 *   Returns `true` even when a theme is skipped (no source files yet)
 *   so that missing themes (e.g. dark) don't cause a non-zero exit.
 */
async function buildTheme(theme) {
  const config = getThemeConfig(theme);

  // Check that source files exist before attempting the build.
  // SD v5 will throw a fatal error if it can't find a source file.
  for (const file of config.source) {
    if (!existsSync(file)) {
      console.warn(
        `[build-tokens] Skipping "${theme}" — missing source file:\n  ${file}`,
      );
      return true; // Not a build failure — file will exist later
    }
  }

  try {
    const sd = new StyleDictionary(config);
    await sd.buildAllPlatforms();
    console.log(`[build-tokens] ✓ "${theme}" tokens written to ${DIST_DIR}/`);
    return true;
  } catch (error) {
    console.error(`[build-tokens] ✗ "${theme}" build failed:`, error);
    return false;
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  // Allow targeting specific themes via CLI args: e.g. `node build-tokens.js light`
  const themes = process.argv.slice(2).filter((t) => THEMES.includes(t));
  const themesToBuild = themes.length > 0 ? themes : THEMES;

  console.log(`[build-tokens] Building themes: ${themesToBuild.join(', ')}`);

  const results = await Promise.all(themesToBuild.map(buildTheme));
  const allSucceeded = results.every(Boolean);

  if (!allSucceeded) {
    console.error('[build-tokens] Some themes failed to build.');
    process.exit(1);
  }

  console.log('[build-tokens] Done.');
}

main();
