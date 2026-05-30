import { jsxs as d } from "react/jsx-runtime";
import { useRef as p, useState as h, useCallback as n } from "react";
import { getIsTouchDevice as k } from "../../utils/device-helpers.js";
import { clsx as O } from "../../node_modules/clsx/dist/clsx.js";
import C from "./styles.module.css.js";
function I({
  children: a,
  renderOverlay: c,
  className: l,
  triggerType: o = "click"
}) {
  const r = k(), i = p(), [e, s] = h(!1), u = n((t) => {
    t.stopPropagation(), t.preventDefault(), s(!0);
  }, []), f = n(() => {
    s(!1);
  }, []), v = n(
    (t) => {
      t.preventDefault(), s(!e);
    },
    [e]
  ), m = {
    onMouseEnter: o === "hover" ? u : void 0,
    onMouseLeave: o === "hover" ? f : void 0,
    onClick: o === "click" ? v : void 0,
    role: o === "click" ? "button" : void 0
  };
  return /* @__PURE__ */ d(
    "div",
    {
      ref: i,
      className: O(C.root, l),
      ...m,
      "data-testid": "content",
      children: [
        a,
        typeof c == "function" && c({ isActive: e, containerRef: i, isTouchDevice: r })
      ]
    }
  );
}
export {
  I as default
};
