import e from "clsx";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/organisms/navbar/index.jsx
function r({ brand: r, className: i, id: a, nav: o }) {
	let s = e("flex", "flex--align-items-center", "flex--justify-content-space-between", i);
	return r || o ? /* @__PURE__ */ n("div", {
		id: a,
		className: s,
		children: [r ? /* @__PURE__ */ t("div", {
			className: "flex_item",
			children: r
		}) : null, o ? /* @__PURE__ */ t("div", {
			className: "flex_item",
			children: o
		}) : null]
	}) : null;
}
//#endregion
export { r as Navbar };
