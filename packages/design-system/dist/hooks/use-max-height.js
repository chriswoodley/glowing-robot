import { useMemo as i } from "react";
const l = {
  xs: 6,
  sm: 12,
  md: 18,
  lg: 24,
  xl: 30
};
function m(e, n, r) {
  if (!e || !n || r == null || Number.isNaN(r))
    return;
  const u = n[e];
  if (u == null)
    return;
  const t = r * u;
  if (!(Number.isNaN(t) || !Number.isFinite(t)))
    return `${t}px`;
}
function s({ unit: e, size: n }) {
  return i(() => m(n, l, e), [e, n]);
}
export {
  m as calcMaxHeight,
  s as useMaxHeight
};
