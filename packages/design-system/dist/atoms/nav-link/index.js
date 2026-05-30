import { jsx as c } from "react/jsx-runtime";
import f from "clsx";
import p from "./styles.module.css.js";
function u({
  children: t,
  className: o,
  href: r,
  id: s,
  rel: a,
  size: e = "default",
  target: l
}) {
  const m = f(
    p.root,
    "block",
    "py-1 px-10",
    { "text-large": e === "large" },
    o
  );
  return /* @__PURE__ */ c("a", { href: r, rel: a, target: l, id: s, className: m, children: t });
}
export {
  u as default
};
