#!/usr/bin/env node

/**
 * convert-to-dtcg.js
 *
 * Converts a Figma-exported tokens JSON file to DTCG (Design Tokens Community Group) format.
 *
 * Conversions performed:
 *   - Color `$value` objects → hex string (e.g. `#17222E`)
 *   - Number `$value` → kept as-is
 *   - String `$value` → kept as-is
 *   - Alias references → DTCG `{path.to.token}` syntax using
 *     `$extensions.com.figma.aliasData.targetVariableName`
 *   - All `$extensions` (Figma-specific metadata) are stripped
 *
 * Usage:
 *   node scripts/convert-to-dtcg.js [input-file] [output-file]
 *
 *   If input-file is omitted, reads from stdin.
 *   If output-file is omitted, writes to stdout.
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { argv, stdin, stdout } from 'node:process';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Convert a Figma `targetVariableName` (slash-separated) into a DTCG alias
 * reference string by replacing `/` with `.` and wrapping in `{}`.
 *
 * Examples:
 *   "color/blue/pale/800"   → "{color.blue.pale.800}"
 *   "color/white"           → "{color.white}"
 *   "font/font/size/100"    → "{font.font.size.100}"
 */
function figmaAliasToDtcg(targetVariableName) {
  return `{${targetVariableName.replace(/\//g, '.')}}`;
}

/**
 * Simplify a Figma `$value` for use in DTCG format based on the `$type`.
 *
 * - `"color"`   → extracts `.hex` from the Figma colour object
 * - `"number"`  → returns the numeric value as-is
 * - `"string"`  → returns the string value as-is
 * - other       → returns the value verbatim (fallback)
 */
function simplifyValue(value, type) {
  switch (type) {
    case 'color': {
      // Figma colour objects have a `.hex` property
      if (value && typeof value === 'object' && value.hex) {
        return value.hex;
      }
      // If it's already a string (e.g. already converted), return as-is
      if (typeof value === 'string') {
        return value;
      }
      return value;
    }
    case 'number':
    case 'dimension':
      // Round to avoid IEEE 754 floating-point imprecision from Figma exports
      // (e.g. 0.1 → 0.10000000149011612, 0.2 → 0.20000000298023224).
      // Design tokens don't need more than ~5 significant decimal places.
      if (typeof value === 'number') {
        return parseFloat(value.toFixed(5));
      }
      return value;
    case 'string':
      return value;
    default:
      return value;
  }
}

// ---------------------------------------------------------------------------
// Core transformation
// ---------------------------------------------------------------------------

/**
 * Recursively walk a parsed token object and transform every leaf node that
 * has a `$type` + `$value` pair.
 *
 * - When `$extensions.com.figma.aliasData` is present, `$value` is replaced
 *   with a DTCG alias reference.
 * - Otherwise `$value` is simplified according to its `$type`.
 *
 * In all cases the `$extensions` key is removed from the output.
 */
function transformNode(node) {
  if (node === null || typeof node !== 'object') {
    return node;
  }

  // ---- Leaf node detection ------------------------------------------------
  // A leaf token has a `$type` property. Even if it also has children (which
  // would be unusual), we treat it as a leaf so `$extensions` is cleaned up.
  if (node.$type !== undefined) {
    const transformed = { $type: node.$type };

    // Handle alias references
    // Figma stores alias metadata under the literal key "com.figma.aliasData"
    // (dots are part of the key name, not nesting).
    const aliasData = node.$extensions?.['com.figma.aliasData'];
    if (aliasData?.targetVariableName) {
      transformed.$value = figmaAliasToDtcg(aliasData.targetVariableName);
    } else {
      transformed.$value = simplifyValue(node.$value, node.$type);
    }

    return transformed;
  }

  // ---- Non-leaf node – recurse over children ------------------------------
  const result = {};
  for (const [key, value] of Object.entries(node)) {
    if (key === '$extensions') continue; // strip at every level
    result[key] = transformNode(value);
  }
  return result;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  const inputPath = argv[2] || null;
  const outputPath = argv[3] || null;

  // Read input
  let input;
  if (inputPath) {
    if (!existsSync(inputPath)) {
      console.error(`Error: input file not found – ${inputPath}`);
      process.exit(1);
    }
    input = readFileSync(inputPath, 'utf-8');
  } else {
    // Read from stdin
    input = readFileSync(0, 'utf-8'); // fd 0 = stdin
  }

  // Parse JSON
  let tokens;
  try {
    tokens = JSON.parse(input);
  } catch (err) {
    console.error('Error: invalid JSON input –', err.message);
    process.exit(1);
  }

  // Transform
  const dtcg = transformNode(tokens);

  // Serialise with nice formatting
  const output = JSON.stringify(dtcg, null, 2) + '\n';

  // Write output
  if (outputPath) {
    writeFileSync(outputPath, output, 'utf-8');
    console.error(`✓ DTCG tokens written to ${outputPath}`);
  } else {
    stdout.write(output);
  }
}

main();
