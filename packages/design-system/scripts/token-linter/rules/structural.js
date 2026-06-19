import { VALID_TYPES } from '../utils/token-helpers.js';

/**
 * Structural rules: validate token leaf structure and type validity.
 */
export const structuralRules = {
  id: 'structural',
  description: 'Validate token leaf structure and type validity.',

  rules: [
    {
      name: 'leaf-has-type-and-value',
      severity: 'error',
      description: 'Every leaf token must have both $type and $value.',
      check(_, leaves) {
        const issues = [];
        for (const token of leaves) {
          if (token.$type === undefined) {
            issues.push({
              severity: 'error',
              message: `Missing $type at path: ${token.path.join('.')}`,
              path: token.path,
            });
          }
          if (token.$value === undefined) {
            issues.push({
              severity: 'error',
              message: `Missing $value at path: ${token.path.join('.')}`,
              path: token.path,
            });
          }
        }
        return issues;
      },
    },

    {
      name: 'valid-type',
      severity: 'error',
      description: `$type must be one of: ${VALID_TYPES.join(', ')}.`,
      check(_, leaves) {
        const issues = [];
        for (const token of leaves) {
          if (token.$type !== undefined && !VALID_TYPES.includes(token.$type)) {
            issues.push({
              severity: 'error',
              message: `Invalid $type "${token.$type}" at path: ${token.path.join('.')}`,
              path: token.path,
            });
          }
        }
        return issues;
      },
    },

    {
      name: 'no-null-values',
      severity: 'error',
      description: 'Token $value must not be null or undefined.',
      check(_, leaves) {
        const issues = [];
        for (const token of leaves) {
          if (token.$value === null || token.$value === undefined) {
            issues.push({
              severity: 'error',
              message: `Null/undefined $value at path: ${token.path.join('.')}`,
              path: token.path,
            });
          }
        }
        return issues;
      },
    },
  ],
};
