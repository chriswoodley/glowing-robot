import { jsx as p } from "react/jsx-runtime";
import "react";
import c from "clsx";
import f from "./styles.module.css.js";
function d({
  children: t,
  className: o,
  href: r,
  id: s,
  rel: a,
  size: e = "default",
  target: l
}) {
  const m = c(
    f.root,
    "block",
    "py-1 px-10",
    { "text-large": e === "large" },
    o
  );
  return /* @__PURE__ */ p("a", { href: r, rel: a, target: l, id: s, className: m, children: t });
}
export {
  d as default
};
