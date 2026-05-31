import { jsx as x } from 'react/jsx-runtime';
import { clsx as b } from 'clsx';
import i from './styles.module.css.js';
const d = (e) =>
    typeof window < 'u'
      ? window.btoa(e)
      : Buffer.from(e, 'utf-8').toString('base64'),
  f = /* @__PURE__ */ new Map(),
  g = ({ width: e, height: r, color: t }) => {
    const o = `${e},${e},${t}`;
    return (
      f.has(o) ||
        f.set(
          o,
          `data:image/svg+xml;base64,${d(
            `<svg viewBox="0 0 ${e} ${r}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${e}" height="${r}" fill="${t}"></rect>
      </svg>`
          )}`
        ),
      f.get(o)
    );
  };
function C({
  alt: e,
  className: r,
  crossOrigin: t,
  decoding: o = 'async',
  fill: u = !1,
  height: s,
  loading: $ = 'lazy',
  placeholder: m = {},
  sizes: p,
  src: v,
  srcSet: w,
  width: a,
}) {
  let l = g({ width: a, height: s, color: '#eeeeee' });
  return (
    Object.keys(m).forEach((c) => {
      const n = m[c];
      n &&
        (c === 'color' && (l = g({ width: a, height: s, color: n })),
        ['dataURL', 'URL'].includes(c) && (l = n));
    }),
    /* @__PURE__ */ x('img', {
      alt: e,
      crossOrigin: t,
      decoding: o,
      height: s,
      loading: $,
      sizes: p,
      src: v,
      srcSet: w,
      width: a,
      className: b(i.root, { [i.fill]: u }, r),
      style: {
        '--placeholder': `url(${l})`,
      },
    })
  );
}
export { C as Image };
