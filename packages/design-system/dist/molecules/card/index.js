import { jsx as l } from "react/jsx-runtime";
import { useCallback as d } from "react";
import p from "../../atoms/card-cover/index.js";
import c from "../../atoms/card-section/index.js";
import { clsx as u } from "../../node_modules/clsx/dist/clsx.js";
import o from "./styles.module.css.js";
function r({ children: t, className: a, mode: s = "light", onClick: e, width: i }) {
  const n = u(
    o.root,
    o[s],
    {
      [o["is-clickable"]]: e === "function"
    },
    "elevation-1",
    "border-radius",
    {
      "elevation-hover-3": !!e
    },
    a
  ), m = d(
    (f) => {
      f.key === "Enter" && typeof e == "function" && e();
    },
    [e]
  );
  return /* @__PURE__ */ l(
    "div",
    {
      className: n,
      style: { width: i },
      ...e ? {
        onKeyDown: m,
        role: "link",
        tabIndex: "0",
        onClick: e
      } : {},
      children: t
    }
  );
}
r.Section = c;
r.Cover = p;
export {
  r as default
};
