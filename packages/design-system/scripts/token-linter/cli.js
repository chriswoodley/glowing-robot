#!/usr/bin/env node

// Minimal CLI wrapper for the token‑linter.
// Usage: node packages/design-system/scripts/token-linter/cli.js src/tokens/**/*.tokens.json
//        node packages/design-system/scripts/token-linter/cli.js --json src/tokens/**/*.tokens.json

import minimist from 'minimist';
import { lint } from './lint.js';
import { allRuleGroups } from './rules/index.js';
import { groupedReporter } from './reporters/grouped.js';
import { textReporter } from './reporters/text.js';
import { jsonReporter } from './reporters/json.js';

const argv = minimist(process.argv.slice(2), {
  boolean: ['json', 'grouped', 'text'],
  alias: { j: 'json', g: 'grouped', t: 'text' },
});

// If no explicit files are passed we default to the typical token glob.
const files = argv._.length ? argv._ : ['src/tokens/**/*.tokens.json'];
// Format selection: json > grouped > text (default: grouped)
const format = argv.json ? 'json' : argv.text ? 'text' : 'grouped';

(async () => {
  const issues = await lint({
    files,
    rules: allRuleGroups,
    failOn: 'error',
  });

  // Dispatch to the appropriate reporter based on the selected format.
  if (format === 'json') jsonReporter(issues);
  else if (format === 'grouped') groupedReporter(issues);
  else textReporter(issues);

  // Exit with non‑zero status when any error‑severity issue is present.
  const hasError = issues.some((i) => i.severity === 'error');
  process.exit(hasError ? 1 : 0);
})();
