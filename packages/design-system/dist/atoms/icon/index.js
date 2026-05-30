import { jsxs as l, jsx as s } from "react/jsx-runtime";
import "react";
import { clsx as m } from "../../node_modules/clsx/dist/clsx.js";
import x from "./styles.module.css.js";
function w({ glyph: o, title: r, size: n = 48, color: c, backgroundColor: i, className: e }) {
  if (o && r) {
    const t = m(x.icon, e);
    return /* @__PURE__ */ l(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        className: t,
        style: {
          "--icon-color": c,
          "--icon-size": `${n}px`,
          "--icon-background-color": i
        },
        children: [
          /* @__PURE__ */ s("title", { children: r }),
          /* @__PURE__ */ s("use", { xlinkHref: `#${o}` })
        ]
      }
    );
  }
  return null;
}
export {
  w as default
};
