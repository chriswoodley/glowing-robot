/** Naming convention rules */
export const namingRules = {
  id: 'naming',
  description: 'Enforce camelCase token names and known top-level categories.',
  rules: [
    {
      name: 'camelCase',
      severity: 'error',
      message: 'All token keys must be camelCase.',
      check(tokenTree) {
        const issues = [];
        const walk = (obj, path = []) => {
          for (const key of Object.keys(obj)) {
            if (key.startsWith('$')) continue;
            // Ignore numeric keys (array indices) – they are allowed.
            if (!isNaN(Number(key))) continue;
            // Allow keys that start with a letter or number, followed by alphanumeric chars
            // This permits common token patterns like "800a90", "2xl", "100", etc.
            if (!/^[a-zA-Z0-9][a-zA-Z0-9]*$/.test(key)) {
              issues.push({
                severity: 'error',
                message: `Key "${key}" is not camelCase`,
                path: [...path, key],
              });
            }
            if (typeof obj[key] === 'object') walk(obj[key], [...path, key]);
          }
        };
        walk(tokenTree);
        return issues;
      },
    },
  ],
};