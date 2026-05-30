function t() {
  return typeof window < "u" ? window.matchMedia("(hover: none)").matches : !1;
}
function n(e) {
  if (e == null || e === "")
    throw new Error("getShouldMatchViewportMaxWidth: A max-width is required.");
  return typeof window < "u" ? window.matchMedia(`(max-width: ${e})`).matches : !1;
}
function i(e) {
  if (e == null || e === "")
    throw new Error("getShouldMatchViewportMinWidth: A max-width is required.");
  return typeof window < "u" ? window.matchMedia(`(min-width: ${e})`).matches : !1;
}
export {
  t as getIsTouchDevice,
  n as getShouldMatchViewportMaxWidth,
  i as getShouldMatchViewportMinWidth
};
