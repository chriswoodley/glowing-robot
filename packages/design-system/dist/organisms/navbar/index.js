import { jsxs as n, jsx as s } from "react/jsx-runtime";
import r from "clsx";
function a({ brand: e, className: t, id: i, nav: l }) {
  const c = r(
    "flex",
    "flex--align-items-center",
    "flex--justify-content-space-between",
    t
  );
  return e || l ? /* @__PURE__ */ n("div", { id: i, className: c, children: [
    e ? /* @__PURE__ */ s("div", { className: "flex_item", children: e }) : null,
    l ? /* @__PURE__ */ s("div", { className: "flex_item", children: l }) : null
  ] }) : null;
}
export {
  a as default
};
