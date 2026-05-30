import { useState as u, useEffect as c } from "react";
const n = {
  xs: 6,
  sm: 12,
  md: 18,
  lg: 24,
  xl: 30
};
function r(t, e, a) {
  if (t && e && a) {
    const o = e[t];
    return `${a * o}px`;
  }
  return "auto";
}
function l({ unit: t, size: e }) {
  const [a, o] = u();
  return c(() => {
    const s = r(e, n, t);
    o(s);
  }, [t, e]), a;
}
export {
  l as default
};
