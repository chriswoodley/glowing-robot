import { jsx as c } from "react/jsx-runtime";
import { clsx as f } from "clsx";
import m from "./styles.module.css.js";
function d({ children: o, className: r, id: a, type: e = "default", ...s }) {
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
    r
  );
  return /* @__PURE__ */ c("ul", { "aria-label": s["aria-label"], id: a, className: n, children: o });
}
export {
  d as Nav
};
