import { getShouldMatchViewportMaxWidth as e, getShouldMatchViewportMinWidth as t } from "../utils/device-helpers.js";
import { useCallback as n, useEffect as r, useState as i } from "react";
//#region src/hooks/use-viewport-match.js
function a(n, r) {
	return typeof window < "u" ? n === "max" ? e(r) : t(r) : !1;
}
function o({ type: o, value: s }) {
	let [c, l] = i(() => a(o, s)), u = n(() => {
		l(o === "max" ? e(s) : t(s));
	}, [s, o]);
	return r(() => (typeof window < "u" && window.addEventListener("resize", u), () => {
		typeof window < "u" && window.removeEventListener("resize", u);
	}), [u]), c;
}
//#endregion
export { o as useViewportMatch };
