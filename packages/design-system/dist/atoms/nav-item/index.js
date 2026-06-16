import e from "./styles.module.js";
import t from "clsx";
import { jsx as n } from "react/jsx-runtime";
//#region src/atoms/nav-item/index.jsx
function r({ children: r, className: i, id: a }) {
	return /* @__PURE__ */ n("li", {
		id: a,
		className: t(e.root, "flex_item", i),
		children: r
	});
}
//#endregion
export { r as NavItem };
