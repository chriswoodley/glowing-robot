import { AspectRatioContainer as e } from "../aspect-ratio-container/index.js";
import { Image as t } from "../image/index.js";
import { clsx as n } from "clsx";
import { jsx as r } from "react/jsx-runtime";
//#region src/atoms/card-cover/index.jsx
function i({ src: i, width: a, height: o, alt: s, placeholder: c, className: l, size: u = "xl", ratio: d = "2/1" }) {
	return /* @__PURE__ */ r("div", {
		className: n(l, "border-top-left-radius", "border-top-right-radius", "overflow-hidden"),
		children: /* @__PURE__ */ r(e, {
			ratio: d,
			size: u,
			children: /* @__PURE__ */ r(t, {
				src: i,
				width: a,
				height: o,
				alt: s,
				placeholder: c,
				fill: !0
			})
		})
	});
}
i.displayName = "Card.Cover";
//#endregion
export { i as CardCover };
