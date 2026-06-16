import { useEffect as e, useRef as t } from "react";
//#region src/hooks/use-previous.js
function n(n) {
	let r = t();
	return e(() => {
		r.current = n;
	}, [n]), r.current;
}
//#endregion
export { n as usePrevious };
