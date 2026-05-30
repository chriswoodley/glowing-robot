import { useRef as t, useEffect as u } from "react";
function n(e) {
  const r = t();
  return u(() => {
    r.current = e;
  }, [e]), r.current;
}
export {
  n as default
};
