export function getLeaves(node, path = []) {
  if (!node || typeof node !== 'object') return [];
  if (node.$type) {
    return [{ ...node, path: [...path] }];
  }
  return Object.entries(node).flatMap(([key, child]) =>
    getLeaves(child, [...path, key])
  );
}

export function isReference(value) {
  return typeof value === 'string' && /^\{.+\}$/.test(value);
}

export function resolveReference(refString) {
  const inner = refString.slice(1, -1);
  return inner.split('.');
}

export const VALID_TYPES = [
  'color',
  'number',
  'string',
  'boolean',
  'dimension',
  'fontSize',
];

/**
 * Check if a value is a valid DTCG color object.
 * DTCG colors have colorSpace and components properties.
 */
export function isDtcgColor(value) {
  return (
    value &&
    typeof value === 'object' &&
    value.colorSpace &&
    Array.isArray(value.components)
  );
}

export function isValidColor(value) {
  // Hex: #RGB, #RRGGBB, #RGBA, #RRGGBBAA
  if (/^#([0-9a-fA-F]{3,8})$/.test(value)) return true;
  // rgb/rgba
  if (/^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*[\d.]+\s*)?\)$/.test(value))
    return true;
  // hsl/hsla
  if (/^hsla?\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*(,\s*[\d.]+\s*)?\)$/.test(value))
    return true;
  return false;
}
