/** Formatting and style rules */
export const formattingRules = {
  id: 'formatting',
  description: 'Enforce consistent JSON formatting (indentation, key order).',
  rules: [
    {
      name: 'two-space-indent',
      severity: 'error',
      message: 'Indentation must be a multiple of two spaces.',
      check(_, __, ___, raw) {
        const issues = [];
        const lines = raw.split('\n');
        lines.forEach((line, idx) => {
          const leading = line.match(/^\s*/)[0];
          if (leading.length % 2 !== 0) {
            issues.push({
              severity: 'error',
              message: 'Incorrect indentation',
              line: idx + 1,
            });
          }
        });
        return issues;
      },
    },
  ],
};