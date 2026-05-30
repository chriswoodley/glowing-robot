import { jsx as c } from "react/jsx-runtime";
import f from "clsx";
import e from "./styles.module.css.js";
function u({
  children: o,
  className: i,
  effect: t = "none",
  height: n = "100%",
  isActive: l = !1,
  positionY: r = "top",
  type: s = "screen",
  width: d = "100%"
}) {
  const a = f(
    e.root,
    {
      [e.screen]: s === "screen",
      [e.content]: s === "content",
      [e["is-active"]]: l,
      [e["effect-slideUp"]]: t === "slideUp",
      [e["effect-slideDown"]]: t === "slideDown",
      [e["effect-slideLeft"]]: t === "slideLeft",
      [e["effect-slideRight"]]: t === "slideRight",
      [e["effect-fade"]]: t === "fade",
      [e["effect-none"]]: t === "none",
      [e["position-bottom"]]: r === "bottom"
    },
    "p-2",
    i
  );
  return /* @__PURE__ */ c(
    "div",
    {
      className: a,
      style: {
        width: d,
        height: n
      },
      "data-testid": "overlay",
      children: o
    }
  );
}
export {
  u as default
};
