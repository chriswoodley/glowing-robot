import e from "./styles.module.js";
import { clsx as t } from "clsx";
import { jsx as n } from "react/jsx-runtime";
//#region src/atoms/card-section/index.jsx
function r({ className: r, children: i }) {
	return /* @__PURE__ */ n("div", {
		className: t(e.root, r, "p-2"),
		children: i
	});
}
r.displayName = "Card.Section";
//#endregion
export { r as CardSection };
