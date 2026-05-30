import { useState as u, useEffect as d } from "react";
function o() {
  if (typeof document > "u")
    return;
  const t = document.querySelector(":root");
  if (!t)
    return;
  const e = window.getComputedStyle(t).lineHeight;
  if (!(!e || !e.endsWith("px")))
    return Number(e.replace("px", ""));
}
function f() {
  const [t, n] = u(void 0);
  return d(() => {
    const e = o();
    e !== void 0 && n(e);
    const i = () => {
      const r = o();
      r !== void 0 && n(r);
    };
    return window.addEventListener("resize", i), () => {
      window.removeEventListener("resize", i);
    };
  }, []), t;
}
export {
  f as default
};
