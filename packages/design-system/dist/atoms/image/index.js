import { jsx as w } from "react/jsx-runtime";
import "react";
import { clsx as x } from "../../node_modules/clsx/dist/clsx.js";
import i from "./styles.module.css.js";
const b = (e) => typeof window < "u" ? window.btoa(e) : Buffer.from(e, "utf-8").toString("base64"), f = /* @__PURE__ */ new Map(), u = ({ width: e, height: r, color: t }) => {
  const o = `${e},${e},${t}`;
  return f.has(o) || f.set(
    o,
    `data:image/svg+xml;base64,${b(
      `<svg viewBox="0 0 ${e} ${r}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${e}" height="${r}" fill="${t}"></rect>
      </svg>`
    )}`
  ), f.get(o);
};
function I({
  alt: e,
  className: r,
  crossOrigin: t,
  decoding: o = "async",
  fill: g = !1,
  height: a,
  loading: $ = "lazy",
  placeholder: m = {},
  sizes: p,
  src: d,
  srcSet: v,
  width: s
}) {
  let l = u({ width: s, height: a, color: "#eeeeee" });
  return Object.keys(m).forEach((c) => {
    const n = m[c];
    n && (c === "color" && (l = u({ width: s, height: a, color: n })), ["dataURL", "URL"].includes(c) && (l = n));
  }), /* @__PURE__ */ w(
    "img",
    {
      alt: e,
      crossOrigin: t,
      decoding: o,
      height: a,
      loading: $,
      sizes: p,
      src: d,
      srcSet: v,
      width: s,
      className: x(i.root, { [i.fill]: g }, r),
      style: {
        "--placeholder": `url(${l})`
      }
    }
  );
}
export {
  I as default
};
