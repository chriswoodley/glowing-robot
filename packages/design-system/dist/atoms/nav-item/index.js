import { jsx as m } from "react/jsx-runtime";
import e from "./styles.module.css.js";
import i from "clsx";
function a({ children: o, className: t, id: r }) {
  const s = i(e.root, "flex_item", t);
  return /* @__PURE__ */ m("li", { id: r, className: s, children: o });
}
export {
  a as NavItem
};
