import { jsx as s } from "react/jsx-runtime";
import { useVerticalRhythmUnit as c } from "../../hooks/use-vertical-rhythm-unit.js";
import { useMaxHeight as n } from "../../hooks/use-max-height.js";
import p from "./styles.module.css.js";
import { clsx as h } from "clsx";
function y({
  className: r,
  style: a,
  size: i,
  children: e,
  ratio: o = "1/1"
}) {
  const m = c(), t = n({ unit: m, size: i });
  return /* @__PURE__ */ s(
    "div",
    {
      style: {
        ...a,
        "--aspect-ratio": o,
        ...t ? { "--max-height": t } : {},
        "--bg-color": "var(--color-gray-100)"
      },
      className: h(p["aspect-ratio-container"], r),
      ...t ? { "data-max-height": t } : {},
      "data-ratio": o,
      children: e
    }
  );
}
export {
  y as AspectRatioContainer
};
