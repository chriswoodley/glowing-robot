import { jsxs as l, jsx as o } from "react/jsx-runtime";
import { useCallback as m } from "react";
import u from "../../styles/utils/motion/_export.module.scss.js";
import a from "./styles.module.css.js";
import c from "../../styles/utils/color/_export.module.scss.js";
import { clsx as b } from "clsx";
const {
  transitionNormalDuration: f,
  transitionNormalEaseInOutBack: d,
  transitionFastDuration: p
} = u;
function D({ onClick: r, className: i, isActive: t = !1, ...s }) {
  const e = m(
    (n) => {
      n.preventDefault(), r && r(n, !t);
    },
    [r, t]
  );
  return /* @__PURE__ */ l(
    "button",
    {
      type: "button",
      onClick: e,
      style: {
        "--hamburger-transition-duration": f,
        "--hamburger-transition-ease": d,
        "--hamburger-transition-duration-fast": p,
        "--hamburger-background-color": c.black
      },
      "data-active": t,
      "aria-label": s["aria-label"],
      className: b(a.button, i),
      children: [
        /* @__PURE__ */ o("div", { className: a.line }),
        /* @__PURE__ */ o("div", { className: a.line }),
        /* @__PURE__ */ o("div", { className: a.line })
      ]
    }
  );
}
export {
  D as HamburgerButton
};
