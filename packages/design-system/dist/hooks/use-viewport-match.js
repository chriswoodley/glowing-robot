import { useState as f, useCallback as s, useEffect as u } from 'react';
import {
  getShouldMatchViewportMaxWidth as o,
  getShouldMatchViewportMinWidth as r,
} from '../utils/device-helpers.js';
function w(t, e) {
  return typeof window < 'u' ? (t === 'max' ? o(e) : r(e)) : !1;
}
function h({ type: t, value: e }) {
  const [d, n] = f(() => w(t, e)),
    i = s(() => {
      n(t === 'max' ? o(e) : r(e));
    }, [e, t]);
  return (
    u(
      () => (
        typeof window < 'u' && window.addEventListener('resize', i),
        () => {
          typeof window < 'u' && window.removeEventListener('resize', i);
        }
      ),
      [i]
    ),
    d
  );
}
export { h as useViewportMatch };
