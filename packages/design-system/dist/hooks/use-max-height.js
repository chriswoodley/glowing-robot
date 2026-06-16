import { useMemo as e } from "react";
//#region src/hooks/use-max-height.js
var t = {
	xs: 6,
	sm: 12,
	md: 18,
	lg: 24,
	xl: 30
};
function n(e, t, n) {
	if (!e || !t || n == null || Number.isNaN(n)) return;
	let r = t[e];
	if (r == null) return;
	let i = n * r;
	if (!(Number.isNaN(i) || !Number.isFinite(i))) return `${i}px`;
}
function r({ unit: r, size: i }) {
	return e(() => n(i, t, r), [r, i]);
}
//#endregion
export { r as useMaxHeight };
