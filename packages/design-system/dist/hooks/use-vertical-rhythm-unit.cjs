'use strict';
Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
const o = require('react');
function u() {
  if (typeof document > 'u') return;
  const t = document.querySelector(':root');
  if (!t) return;
  const e = window.getComputedStyle(t).lineHeight;
  if (!(!e || !e.endsWith('px'))) return Number(e.replace('px', ''));
}
function s() {
  const [t, n] = o.useState(void 0);
  return (
    o.useEffect(() => {
      const e = u();
      e !== void 0 && setTimeout(() => n(e), 0);
      const i = () => {
        const r = u();
        r !== void 0 && setTimeout(() => n(r), 0);
      };
      return (
        window.addEventListener('resize', i),
        () => {
          window.removeEventListener('resize', i);
        }
      );
    }, []),
    t
  );
}
exports.useVerticalRhythmUnit = s;
