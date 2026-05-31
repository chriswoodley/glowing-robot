'use strict';
Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
const a = require('react'),
  c = { xs: 6, sm: 12, md: 18, lg: 24, xl: 30 };
function i(e, t, n) {
  if (!e || !t || n == null || Number.isNaN(n)) return;
  const u = t[e];
  if (u == null) return;
  const r = n * u;
  if (!(Number.isNaN(r) || !Number.isFinite(r))) return `${r}px`;
}
function l({ unit: e, size: t }) {
  return a.useMemo(() => i(t, c, e), [e, t]);
}
exports.calcMaxHeight = i;
exports.useMaxHeight = l;
