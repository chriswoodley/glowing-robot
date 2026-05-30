import { jsx as m } from "react/jsx-runtime";
import "react";
import e from "./styles.module.css.js";
import i from "clsx";
function p({ children: t, className: o, id: r }) {
  const s = i(e.root, "flex_item", o);
  return /* @__PURE__ */ m("li", { id: r, className: s, children: t });
}
export {
  p as default
};
