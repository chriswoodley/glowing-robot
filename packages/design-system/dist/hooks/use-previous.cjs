'use strict';
Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
const t = require('react');
function u(e) {
  const r = t.useRef();
  return (
    t.useEffect(() => {
      r.current = e;
    }, [e]),
    r.current
  );
}
exports.usePrevious = u;
