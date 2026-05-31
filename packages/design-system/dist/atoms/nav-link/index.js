import { jsx as c } from 'react/jsx-runtime';
import p from 'clsx';
import f from './styles.module.css.js';
function u({
  children: o,
  className: r,
  href: t,
  id: s,
  rel: e,
  size: a = 'default',
  target: l,
}) {
  const m = p(
    f.root,
    'block',
    'py-1 px-10',
    { 'text-large': a === 'large' },
    r
  );
  return /* @__PURE__ */ c('a', {
    href: t,
    rel: e,
    target: l,
    id: s,
    className: m,
    children: o,
  });
}
export { u as NavLink };
