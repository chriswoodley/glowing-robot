import { jsxs as l, jsx as n } from "react/jsx-runtime";
import { useCallback as m } from "react";
import a from "./styles.module.css.js";
import { clsx as u } from "clsx";
function p({ onClick: r, className: i, isActive: t = !1, ...e }) {
  const s = m(
    (o) => {
      o.preventDefault(), r && r(o, !t);
    },
    [r, t]
  );
  return /* @__PURE__ */ l(
    "button",
    {
      type: "button",
      onClick: s,
      style: {
        "--hamburger-transition-duration": "var(--transition-duration-normal)",
        "--hamburger-transition-ease": "var(--transition-ease-normal-in-out-back)",
        "--hamburger-transition-duration-fast": "var(--transition-duration-fast)",
        "--hamburger-background-color": "var(--color-black)"
      },
      "data-active": t,
      "aria-label": e["aria-label"],
      className: u(a.button, i),
      children: [
        /* @__PURE__ */ n("div", { className: a.line }),
        /* @__PURE__ */ n("div", { className: a.line }),
        /* @__PURE__ */ n("div", { className: a.line })
      ]
    }
  );
}
export {
  p as HamburgerButton
};
