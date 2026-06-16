import { getIsTouchDevice as e } from "../../utils/device-helpers.js";
import t from "./styles.module.js";
import { useCallback as n, useRef as r, useState as i } from "react";
import a from "clsx";
import { jsxs as o } from "react/jsx-runtime";
//#region src/molecules/content-overlay/index.jsx
function s({ children: s, renderOverlay: c, className: l, triggerType: u = "click" }) {
	let d = e(), f = r(), [p, m] = i(!1), h = n((e) => {
		e.stopPropagation(), e.preventDefault(), m(!0);
	}, []), g = n(() => {
		m(!1);
	}, []), _ = n((e) => {
		e.preventDefault(), m(!p);
	}, [p]), v = {
		onMouseEnter: u === "hover" ? h : void 0,
		onMouseLeave: u === "hover" ? g : void 0,
		onClick: u === "click" ? _ : void 0,
		role: u === "click" ? "button" : void 0
	};
	return /* @__PURE__ */ o("div", {
		ref: f,
		className: a(t.root, l),
		...v,
		"data-testid": "content",
		children: [s, typeof c == "function" && c({
			isActive: p,
			containerRef: f,
			isTouchDevice: d
		})]
	});
}
//#endregion
export { s as ContentOverlay };
