import { jsx as r } from "react/jsx-runtime";
import f from "../aspect-ratio-container/index.js";
import n from "../image/index.js";
import { clsx as p } from "clsx";
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
  const m = p(
    d,
    "border-top-left-radius",
    "border-top-right-radius",
    "overflow-hidden"
  );
  return /* @__PURE__ */ r("div", { className: m, children: /* @__PURE__ */ r(f, { ratio: l, size: s, children: /* @__PURE__ */ r(
    n,
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
