//#region src/utils/device-helpers.js
function e() {
	return typeof window < "u" ? window.matchMedia("(hover: none)").matches : !1;
}
function t(e) {
	if (e == null || e === "") throw Error("getShouldMatchViewportMaxWidth: A max-width is required.");
	return typeof window < "u" ? window.matchMedia(`(max-width: ${e})`).matches : !1;
}
function n(e) {
	if (e == null || e === "") throw Error("getShouldMatchViewportMinWidth: A max-width is required.");
	return typeof window < "u" ? window.matchMedia(`(min-width: ${e})`).matches : !1;
}
//#endregion
export { e as getIsTouchDevice, t as getShouldMatchViewportMaxWidth, n as getShouldMatchViewportMinWidth };
