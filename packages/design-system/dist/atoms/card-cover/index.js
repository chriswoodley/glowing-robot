import { jsx as r } from "react/jsx-runtime";
import "react";
import p from "../aspect-ratio-container/index.js";
import f from "../image/index.js";
import { clsx as n } from "../../node_modules/clsx/dist/clsx.js";
function c({
  src: o,
  width: e,
  height: t,
  alt: i,
  placeholder: a,
  className: d,
  size: s = "xl",
  ratio: l = "2/1"
}) {
  const m = n(
    d,
    "border-top-left-radius",
    "border-top-right-radius",
    "overflow-hidden"
  );
  return /* @__PURE__ */ r("div", { className: m, children: /* @__PURE__ */ r(p, { ratio: l, size: s, children: /* @__PURE__ */ r(
    f,
    {
      src: o,
      width: e,
      height: t,
      alt: i,
      placeholder: a,
      fill: !0
    }
  ) }) });
}
c.displayName = "Card.Cover";
export {
  c as default
};
