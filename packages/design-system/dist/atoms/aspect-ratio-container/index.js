import { useVerticalRhythmUnit as e } from "../../hooks/use-vertical-rhythm-unit.js";
import { useMaxHeight as t } from "../../hooks/use-max-height.js";
import n from "./styles.module.js";
import { clsx as r } from "clsx";
import { jsx as i } from "react/jsx-runtime";
//#region src/atoms/aspect-ratio-container/index.jsx
function a({ className: a, style: o, size: s, children: c, ratio: l = "1/1" }) {
	let u = t({
		unit: e(),
		size: s
	});
	return /* @__PURE__ */ i("div", {
		style: {
			...o,
			"--aspect-ratio": l,
			...u ? { "--max-height": u } : {},
			"--bg-color": "var(--color-gray-100)"
		},
		className: r(n["aspect-ratio-container"], a),
		...u ? { "data-max-height": u } : {},
		"data-ratio": l,
		children: c
	});
}
//#endregion
export { a as AspectRatioContainer };
