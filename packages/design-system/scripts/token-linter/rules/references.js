import { isReference, resolveReference } from '../utils/token-helpers.js';

/** Reference integrity rules */
export const referenceRules = {
  id: 'references',
  description: 'Validate that DTCG references point to existing tokens and detect cycles.',
  rules: [
    {
      name: 'broken-reference',
      severity: 'error',
      message: 'Reference points to a non‑existent token.',
      check(_, leaves, tokenMap) {
        const issues = [];
        for (const t of leaves) {
          if (typeof t.$value === 'string' && isReference(t.$value)) {
            const refKey = resolveReference(t.$value).join('.');
            if (!tokenMap.has(refKey)) {
              issues.push({
                severity: 'error',
                message: `Broken reference ${t.$value}`,
                path: t.path,
              });
            }
          }
        }
        return issues;
      },
    },
    {
      name: 'circular-reference',
      severity: 'error',
      message: 'Circular reference detected.',
      check(_, leaves, tokenMap) {
        const issues = [];
        const visited = new Set();
        const walk = (key, stack) => {
          if (stack.includes(key)) {
            const cycle = [...stack, key].join(' → ');
            const token = tokenMap.get(key);
            if (token) {
              issues.push({
                severity: 'error',
                message: `Circular reference: ${cycle}`,
                path: token.path,
              });
            }
            return;
          }
          const token = tokenMap.get(key);
          if (!token) return;
          if (typeof token.$value !== 'string' || !isReference(token.$value)) return;
          const nextKey = resolveReference(token.$value).join('.');
          walk(nextKey, [...stack, key]);
        };
        for (const leaf of leaves) {
          const key = leaf.path.join('.');
          if (!visited.has(key)) {
            walk(key, []);
            visited.add(key);
          }
        }
        return issues;
      },
    },
  ],
};