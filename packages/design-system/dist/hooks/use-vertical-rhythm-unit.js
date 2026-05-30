import { useState as u, useEffect as f } from "react";
function r(e) {
  if (typeof window < "u" && e) {
    const t = e.querySelector(":root"), n = window.getComputedStyle(t);
    return Number(n.lineHeight.replace("px", ""));
  }
}
function c() {
  const e = typeof window < "u" ? document : void 0, [t, n] = u(r(e));
  return f(() => {
    const i = (d) => {
      const o = r(d?.target?.document);
      o !== void 0 && n(o);
    };
    return typeof window < "u" && window.addEventListener("resize", i), () => {
      typeof window < "u" && window.removeEventListener("resize", i);
    };
  }, []), t;
}
export {
  c as default
};
