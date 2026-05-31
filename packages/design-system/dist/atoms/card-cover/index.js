import { jsx as r } from 'react/jsx-runtime';
import { AspectRatioContainer as n } from '../aspect-ratio-container/index.js';
import { Image as p } from '../image/index.js';
import { clsx as c } from 'clsx';
function f({
  src: o,
  width: e,
  height: i,
  alt: t,
  placeholder: a,
  className: d,
  size: s = 'xl',
  ratio: l = '2/1',
}) {
  const m = c(
    d,
    'border-top-left-radius',
    'border-top-right-radius',
    'overflow-hidden'
  );
  return /* @__PURE__ */ r('div', {
    className: m,
    children: /* @__PURE__ */ r(n, {
      ratio: l,
      size: s,
      children: /* @__PURE__ */ r(p, {
        src: o,
        width: e,
        height: i,
        alt: t,
        placeholder: a,
        fill: !0,
      }),
    }),
  });
}
f.displayName = 'Card.Cover';
export { f as CardCover };
