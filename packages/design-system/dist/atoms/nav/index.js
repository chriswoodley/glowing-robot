import { jsx as c } from "react/jsx-runtime";
import "react";
import { clsx as f } from "clsx";
import m from "./styles.module.css.js";
function p({ children: o, className: a, id: r, type: e = "default", ...s }) {
  const i = e === "default", l = e === "horizontal", t = e === "vertical center", n = f(
    m.root,
    {
      block: i,
      flex: l || t,
      "flex--row": l,
      "flex--column": t,
      "flex--align-items-center": l || t,
      "flex--align-items-end": l
    },
    a
  );
  return /* @__PURE__ */ c("ul", { "aria-label": s["aria-label"], id: r, className: n, children: o });
}
export {
  p as default
};
