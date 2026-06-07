import { jsx as l } from "react/jsx-runtime";
import { useCallback as d } from "react";
import { CardCover as p } from "../../atoms/card-cover/index.js";
import { CardSection as c } from "../../atoms/card-section/index.js";
import u from "clsx";
import r from "./styles.module.css.js";
function e({ children: t, className: s, mode: a = "light", onClick: o, width: i }) {
  const n = u(
    r.root,
    r[a],
    {
      [r["is-clickable"]]: o === "function"
    },
    "elevation-1",
    "border-radius",
    {
      "elevation-hover-3": !!o
    },
    s
  ), m = d(
    (f) => {
      f.key === "Enter" && typeof o == "function" && o();
    },
    [o]
  );
  return /* @__PURE__ */ l(
    "div",
    {
      className: n,
      style: { width: i },
      ...o ? {
        onKeyDown: m,
        role: "link",
        tabIndex: "0",
        onClick: o
      } : {},
      children: t
    }
  );
}
e.Section = c;
e.Cover = p;
export {
  e as Card
};
