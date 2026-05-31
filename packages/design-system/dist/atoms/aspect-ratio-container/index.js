import { jsx as s } from 'react/jsx-runtime';
import { useVerticalRhythmUnit as c } from '../../hooks/use-vertical-rhythm-unit.js';
import { useMaxHeight as n } from '../../hooks/use-max-height.js';
import p from '../../styles/utils/color/_export.module.scss.js';
import h from './styles.module.css.js';
import { clsx as f } from 'clsx';
function H({ className: r, style: i, size: a, children: e, ratio: o = '1/1' }) {
  const m = c(),
    t = n({ unit: m, size: a });
  return /* @__PURE__ */ s('div', {
    style: {
      ...i,
      '--aspect-ratio': o,
      ...(t ? { '--max-height': t } : {}),
      '--bg-color': p['gray-100'],
      // TODO: replace with design token in css file
    },
    className: f(h['aspect-ratio-container'], r),
    ...(t ? { 'data-max-height': t } : {}),
    'data-ratio': o,
    children: e,
  });
}
export { H as AspectRatioContainer };
