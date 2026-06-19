/**
 * Core lint function (Option A – flat-array API).
 *
 * It accepts an options object:
 *   - files:   array of glob-expanded file paths (strings)
 *   - rules:   array of rule-group objects (each with .id, .rules[])
 *   - failOn:  "error" | "warn" – determines exit status for the CLI
 *
 * Returns a promise that resolves to an array of all lint issues found.
 * Reporting is handled by the CLI, not by this function.
 */
import fs from 'fs';
import path from 'path';
import { getLeaves } from './utils/token-helpers.js';

function buildTokenMap(leaves) {
  const map = new Map();
  leaves.forEach((t) => {
    const key = t.path.join('.');
    map.set(key, t);
  });
  return map;
}

export async function lint({
  files = [],
  rules = [],
  failOn = 'error'
} = {}) {
  const allIssues = [];

  // First, read and parse all files, gathering a combined token map.
  const allLeaves = [];
  const fileContents = [];
  for (const file of files) {
    const abs = path.resolve(process.cwd(), file);
    let raw;
    try {
      raw = await fs.promises.readFile(abs, 'utf-8');
    } catch (e) {
      allIssues.push({
        severity: 'error',
        message: `Cannot read file: ${e.message}`,
        file,
      });
      continue;
    }
    let json;
    try {
      json = JSON.parse(raw);
    } catch (e) {
      allIssues.push({
        severity: 'error',
        message: `JSON parse error: ${e.message}`,
        file,
      });
      continue;
    }
    const leaves = getLeaves(json);
    allLeaves.push(...leaves);
    fileContents.push({ file, raw, json, leaves });
  }

  // Build a single token map that includes all tokens from every file.
  const tokenMap = buildTokenMap(allLeaves);

  // Run each rule against each file's leaves, but using the combined tokenMap.
  for (const { file, raw, json, leaves } of fileContents) {
    for (const group of rules) {
      for (const rule of group.rules) {
        const issues = rule.check(json, leaves, tokenMap, raw);
        issues.forEach((i) => {
          allIssues.push({
            ...i,
            ruleName: rule.name,
            category: group.id,
            file,
            severity: i.severity || rule.severity,
          });
        });
      }
    }
  }

  // Reporting is handled by the CLI, so we just return the issues.
  return allIssues;
}

export default lint;
