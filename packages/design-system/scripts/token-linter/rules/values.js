import { isValidColor, isDtcgColor } from '../utils/token-helpers.js';

/** Value validation rules */
export const valueRules = {
  id: 'values',
  description: 'Validate concrete token values for each $type.',
  rules: [
    {
      name: 'color-format',
      severity: 'error',
      message: 'Color values must be valid CSS colors.',
      check(_, leaves) {
        const issues = [];
         for (const t of leaves) {
           if (t.$type === 'color') {
             // Accept DTCG color objects (with colorSpace and components)
              if (isDtcgColor(t.$value)) continue;
             if (typeof t.$value === 'string' && /^\{.+\}$/.test(t.$value)) continue;
             if (!isValidColor(t.$value)) {
               issues.push({
                 severity: 'error',
                 message: `Invalid color "${t.$value}"`,
                 path: t.path,
               });
             }
           }
         }
        return issues;
      },
    },
    {
      name: 'number-finite',
      severity: 'error',
      message: 'Number values must be finite.',
      /**
       * Some numeric tokens are references to other tokens (e.g. "{lineHeight.200}").
       * Those should be ignored for the finite‑number check because the actual value
       * lives in the referenced token.
       */
      check(_, leaves) {
        const issues = [];
        for (const t of leaves) {
          if (t.$type === 'number') {
            // Skip reference strings like "{some.token}" – they are resolved elsewhere.
            if (typeof t.$value === 'string' && /^\{.+\}$/.test(t.$value)) continue;
            const n = Number(t.$value);
            if (!Number.isFinite(n)) {
              issues.push({
                severity: 'error',
                message: `Non‑finite number "${t.$value}"`,
                path: t.path,
              });
            }
          }
        }
        return issues;
      },
    },
  ],
};