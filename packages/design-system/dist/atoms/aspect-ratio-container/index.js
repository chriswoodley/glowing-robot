import { jsx as s } from "react/jsx-runtime";
import "react";
import c from "../../hooks/use-vertical-rhythm-unit.js";
import n from "../../hooks/use-max-height.js";
import p from "../../styles/utils/color/_export.module.scss.js";
import f from "./styles.module.css.js";
import { clsx as h } from "../../node_modules/clsx/dist/clsx.js";
function H({
  className: r,
  style: i,
  size: a,
  children: e,
  ratio: o = "1/1"
}) {
  const m = c(), t = n({ unit: m, size: a });
  return /* @__PURE__ */ s(
    "div",
    {
      style: {
        ...i,
        "--aspect-ratio": o,
        "--max-height": t ? `${t}` : void 0,
        "--bg-color": p["gray-100"]
        // TODO: replace with design token in css file
      },
      className: h(f["aspect-ratio-container"], r),
      "data-max-height": t,
      "data-ratio": o,
      children: e
    }
  );
}
export {
  H as default
};
