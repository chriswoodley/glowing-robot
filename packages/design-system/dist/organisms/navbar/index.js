import { jsxs as r, jsx as s } from "react/jsx-runtime";
import "react";
import n from "clsx";
function o({ brand: e, className: t, id: i, nav: l }) {
  const c = n(
    "flex",
    "flex--align-items-center",
    "flex--justify-content-space-between",
    t
  );
  return e || l ? /* @__PURE__ */ r("div", { id: i, className: c, children: [
    e ? /* @__PURE__ */ s("div", { className: "flex_item", children: e }) : null,
    l ? /* @__PURE__ */ s("div", { className: "flex_item", children: l }) : null
  ] }) : null;
}
export {
  o as default
};
