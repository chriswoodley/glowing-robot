import e from "./styles.module.js";
import { useCallback as t } from "react";
import { clsx as n } from "clsx";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/atoms/hamburger-button/index.jsx
function a({ onClick: a, className: o, isActive: s = !1, ...c }) {
	return /* @__PURE__ */ i("button", {
		type: "button",
		onClick: t((e) => {
			e.preventDefault(), a && a(e, !s);
		}, [a, s]),
		style: {
			"--hamburger-transition-duration": "var(--transition-duration-normal)",
			"--hamburger-transition-ease": "var(--transition-ease-normal-in-out-back)",
			"--hamburger-transition-duration-fast": "var(--transition-duration-fast)",
			"--hamburger-background-color": "var(--color-black)"
		},
		"data-active": s,
		"aria-label": c["aria-label"],
		className: n(e.button, o),
		children: [
			/* @__PURE__ */ r("div", { className: e.line }),
			/* @__PURE__ */ r("div", { className: e.line }),
			/* @__PURE__ */ r("div", { className: e.line })
		]
	});
}
//#endregion
export { a as HamburgerButton };
