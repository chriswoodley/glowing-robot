import { useState as u, useEffect as s } from 'react';
function o() {
  if (typeof document > 'u') return;
  const t = document.querySelector(':root');
  if (!t) return;
  const e = window.getComputedStyle(t).lineHeight;
  if (!(!e || !e.endsWith('px'))) return Number(e.replace('px', ''));
}
function c() {
  const [t, n] = u(void 0);
  return (
    s(() => {
      const e = o();
      e !== void 0 && setTimeout(() => n(e), 0);
      const i = () => {
        const r = o();
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
export { c as useVerticalRhythmUnit };
