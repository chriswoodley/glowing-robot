import e from "./styles.module.js";
import t from "clsx";
import { jsx as n } from "react/jsx-runtime";
//#region src/atoms/overlay/index.jsx
function r({ children: r, className: i, effect: a = "none", height: o = "100%", isActive: s = !1, positionY: c = "top", type: l = "screen", width: u = "100%" }) {
	return /* @__PURE__ */ n("div", {
		className: t(e.root, {
			[e.screen]: l === "screen",
			[e.content]: l === "content",
			[e["is-active"]]: s,
			[e["effect-slideUp"]]: a === "slideUp",
			[e["effect-slideDown"]]: a === "slideDown",
			[e["effect-slideLeft"]]: a === "slideLeft",
			[e["effect-slideRight"]]: a === "slideRight",
			[e["effect-fade"]]: a === "fade",
			[e["effect-none"]]: a === "none",
			[e["position-bottom"]]: c === "bottom"
		}, "p-2", i),
		style: {
			width: u,
			height: o
		},
		"data-testid": "overlay",
		children: r
	});
}
//#endregion
export { r as Overlay };
