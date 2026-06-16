import e from "./styles.module.js";
import { clsx as t } from "clsx";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/atoms/icon/index.jsx
function i({ glyph: i, title: a, size: o = 48, color: s, backgroundColor: c, className: l }) {
	return i && a ? /* @__PURE__ */ r("svg", {
		viewBox: "0 0 24 24",
		xmlns: "http://www.w3.org/2000/svg",
		className: t(e.icon, l),
		style: {
			"--icon-color": s,
			"--icon-size": `${o}px`,
			"--icon-background-color": c
		},
		children: [/* @__PURE__ */ n("title", { children: a }), /* @__PURE__ */ n("use", { xlinkHref: `#${i}` })]
	}) : null;
}
//#endregion
export { i as Icon };
