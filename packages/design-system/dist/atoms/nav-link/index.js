import e from "./styles.module.js";
import t from "clsx";
import { jsx as n } from "react/jsx-runtime";
//#region src/atoms/nav-link/index.jsx
function r({ children: r, className: i, href: a, id: o, rel: s, size: c = "default", target: l }) {
	return /* @__PURE__ */ n("a", {
		href: a,
		rel: s,
		target: l,
		id: o,
		className: t(e.root, "block", "py-1 px-10", { "text-large": c === "large" }, i),
		children: r
	});
}
//#endregion
export { r as NavLink };
