'use strict';
Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
const f = require('react/jsx-runtime'),
  r = require('clsx'),
  e = require('./styles.module.css.cjs');
function c({
  children: s,
  className: d,
  effect: t = 'none',
  height: o = '100%',
  isActive: n = !1,
  positionY: a = 'top',
  type: l = 'screen',
  width: i = '100%',
}) {
  const u = r(
    e.default.root,
    {
      [e.default.screen]: l === 'screen',
      [e.default.content]: l === 'content',
      [e.default['is-active']]: n,
      [e.default['effect-slideUp']]: t === 'slideUp',
      [e.default['effect-slideDown']]: t === 'slideDown',
      [e.default['effect-slideLeft']]: t === 'slideLeft',
      [e.default['effect-slideRight']]: t === 'slideRight',
      [e.default['effect-fade']]: t === 'fade',
      [e.default['effect-none']]: t === 'none',
      [e.default['position-bottom']]: a === 'bottom',
    },
    'p-2',
    d
  );
  return f.jsx('div', {
    className: u,
    style: { width: i, height: o },
    'data-testid': 'overlay',
    children: s,
  });
}
exports.Overlay = c;
