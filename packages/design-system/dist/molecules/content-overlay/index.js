import { jsxs as d } from "react/jsx-runtime";
import { useRef as p, useState as h, useCallback as n } from "react";
import { getIsTouchDevice as k } from "../../utils/device-helpers.js";
import O from "clsx";
import C from "./styles.module.css.js";
function I({
  children: l,
  renderOverlay: c,
  className: r,
  triggerType: o = "click"
}) {
  const a = k(), i = p(), [e, s] = h(!1), u = n((t) => {
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
      className: O(C.root, r),
      ...m,
      "data-testid": "content",
      children: [
        l,
        typeof c == "function" && // Passing ref object (not .current) to consumer render function
        // eslint-disable-next-line react-hooks/refs
        c({ isActive: e, containerRef: i, isTouchDevice: a })
      ]
    }
  );
}
export {
  I as ContentOverlay
};
