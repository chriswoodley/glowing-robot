import { useState as r, useCallback as s, useEffect as d } from "react";
import { getShouldMatchViewportMaxWidth as f, getShouldMatchViewportMinWidth as w } from "../utils/device-helpers.js";
function c({ type: n, value: e }) {
  const [o, t] = r(!1), i = s(() => {
    t(n === "max" ? f(e) : w(e));
  }, [e, n, t]);
  return d(() => (typeof window < "u" && (i(e), window.addEventListener("resize", i)), () => {
    typeof window < "u" && window.removeEventListener("resize", i);
  }), [e, t, i]), o;
}
export {
  c as default
};
