import { jsxs as n, jsx as s } from 'react/jsx-runtime';
import r from 'clsx';
function x({ brand: e, className: i, id: t, nav: l }) {
  const c = r(
    'flex',
    'flex--align-items-center',
    'flex--justify-content-space-between',
    i
  );
  return e || l
    ? /* @__PURE__ */ n('div', {
        id: t,
        className: c,
        children: [
          e
            ? /* @__PURE__ */ s('div', { className: 'flex_item', children: e })
            : null,
          l
            ? /* @__PURE__ */ s('div', { className: 'flex_item', children: l })
            : null,
        ],
      })
    : null;
}
export { x as Navbar };
