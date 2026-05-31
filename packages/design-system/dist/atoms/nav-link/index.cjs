'use strict';
Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
const u = require('react/jsx-runtime'),
  c = require('clsx'),
  i = require('./styles.module.css.cjs');
function d({
  children: e,
  className: t,
  href: s,
  id: r,
  rel: l,
  size: o = 'default',
  target: a,
}) {
  const n = c(
    i.default.root,
    'block',
    'py-1 px-10',
    { 'text-large': o === 'large' },
    t
  );
  return u.jsx('a', {
    href: s,
    rel: l,
    target: a,
    id: r,
    className: n,
    children: e,
  });
}
exports.NavLink = d;
