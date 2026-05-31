'use strict';
Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
const o = require('react/jsx-runtime'),
  c = require('clsx'),
  i = require('./styles.module.css.cjs');
function e({ className: t, children: s }) {
  const r = c.clsx(i.default.root, t, 'p-2');
  return o.jsx('div', { className: r, children: s });
}
e.displayName = 'Card.Section';
exports.CardSection = e;
