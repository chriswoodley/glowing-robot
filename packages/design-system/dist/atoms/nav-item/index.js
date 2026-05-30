import { jsx as e } from "react/jsx-runtime";
import m from "./styles.module.css.js";
import l from "clsx";
function c({ children: t, className: o, id: s }) {
  const r = l(m.root, "flex_item", o);
  return /* @__PURE__ */ e("li", { id: s, className: r, children: t });
}
export {
  c as default
};
