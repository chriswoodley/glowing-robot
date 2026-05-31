'use strict';
Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
const t = require('react/jsx-runtime'),
  o = require('react'),
  i = require('../../styles/utils/motion/_export.module.scss.cjs'),
  e = require('./styles.module.css.cjs'),
  c = require('../../styles/utils/color/_export.module.scss.cjs'),
  d = require('clsx'),
  {
    transitionNormalDuration: m,
    transitionNormalEaseInOutBack: b,
    transitionFastDuration: f,
  } = i.default;
function g({ onClick: a, className: u, isActive: r = !1, ...s }) {
  const l = o.useCallback(
    (n) => {
      (n.preventDefault(), a && a(n, !r));
    },
    [a, r]
  );
  return t.jsxs('button', {
    type: 'button',
    onClick: l,
    style: {
      '--hamburger-transition-duration': m,
      '--hamburger-transition-ease': b,
      '--hamburger-transition-duration-fast': f,
      '--hamburger-background-color': c.default.black,
    },
    'data-active': r,
    'aria-label': s['aria-label'],
    className: d.clsx(e.default.button, u),
    children: [
      t.jsx('div', { className: e.default.line }),
      t.jsx('div', { className: e.default.line }),
      t.jsx('div', { className: e.default.line }),
    ],
  });
}
exports.HamburgerButton = g;
