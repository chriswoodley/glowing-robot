import { useEffect as e, useState as t } from "react";
//#region src/hooks/use-vertical-rhythm-unit.js
function n() {
	if (typeof document > "u") return;
	let e = document.querySelector(":root");
	if (!e) return;
	let t = window.getComputedStyle(e).lineHeight;
	if (!(!t || !t.endsWith("px"))) return Number(t.replace("px", ""));
}
function r() {
	let [r, i] = t(void 0);
	return e(() => {
		let e = n();
		e !== void 0 && setTimeout(() => i(e), 0);
		let t = () => {
			let e = n();
			e !== void 0 && setTimeout(() => i(e), 0);
		};
		return window.addEventListener("resize", t), () => {
			window.removeEventListener("resize", t);
		};
	}, []), r;
}
//#endregion
export { r as useVerticalRhythmUnit };
