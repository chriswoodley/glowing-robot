import { jsx as s } from "react/jsx-runtime";
import c from "../../hooks/use-vertical-rhythm-unit.js";
import n from "../../hooks/use-max-height.js";
import p from "../../styles/utils/color/_export.module.scss.js";
import f from "./styles.module.css.js";
import { clsx as h } from "clsx";
function H({
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
        "--bg-color": p["gray-100"]
        // TODO: replace with design token in css file
      },
      className: h(f["aspect-ratio-container"], r),
      ...t ? { "data-max-height": t } : {},
      "data-ratio": o,
      children: e
    }
  );
}
export {
  H as default
};
