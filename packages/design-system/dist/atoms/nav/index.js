import e from "./styles.module.js";
import { clsx as t } from "clsx";
import { jsx as n } from "react/jsx-runtime";
//#region src/atoms/nav/index.jsx
function r({ children: r, className: i, id: a, type: o = "default", ...s }) {
	let c = o === "default", l = o === "horizontal", u = o === "vertical center", d = t(e.root, {
		block: c,
		flex: l || u,
		"flex--row": l,
		"flex--column": u,
		"flex--align-items-center": l || u,
		"flex--align-items-end": l
	}, i);
	return /* @__PURE__ */ n("ul", {
		"aria-label": s["aria-label"],
		id: a,
		className: d,
		children: r
	});
}
//#endregion
export { r as Nav };
