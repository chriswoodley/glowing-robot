import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { clsx as m } from "clsx";
import x from "./styles.module.css.js";
function p({ glyph: o, title: s, size: n = 48, color: c, backgroundColor: e, className: i }) {
  if (o && s) {
    const l = m(x.icon, i);
    return /* @__PURE__ */ t(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        className: l,
        style: {
          "--icon-color": c,
          "--icon-size": `${n}px`,
          "--icon-background-color": e
        },
        children: [
          /* @__PURE__ */ r("title", { children: s }),
          /* @__PURE__ */ r("use", { xlinkHref: `#${o}` })
        ]
      }
    );
  }
  return null;
}
export {
  p as default
};
