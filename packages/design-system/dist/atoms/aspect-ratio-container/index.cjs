'use strict';
Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
const n = require('react/jsx-runtime'),
  c = require('../../hooks/use-vertical-rhythm-unit.cjs'),
  u = require('../../hooks/use-max-height.cjs'),
  l = require('../../styles/utils/color/_export.module.scss.cjs'),
  h = require('./styles.module.css.cjs'),
  m = require('clsx');
function x({ className: i, style: r, size: a, children: s, ratio: t = '1/1' }) {
  const o = c.useVerticalRhythmUnit(),
    e = u.useMaxHeight({ unit: o, size: a });
  return n.jsx('div', {
    style: {
      ...r,
      '--aspect-ratio': t,
      ...(e ? { '--max-height': e } : {}),
      '--bg-color': l.default['gray-100'],
    },
    className: m.clsx(h.default['aspect-ratio-container'], i),
    ...(e ? { 'data-max-height': e } : {}),
    'data-ratio': t,
    children: s,
  });
}
exports.AspectRatioContainer = x;
