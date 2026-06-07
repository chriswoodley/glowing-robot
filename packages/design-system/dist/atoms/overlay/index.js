import { jsx as a } from "react/jsx-runtime";
import f from "clsx";
import e from "./styles.module.css.js";
function x({
  children: s,
  className: i,
  effect: t = "none",
  height: n = "100%",
  isActive: l = !1,
  positionY: r = "top",
  type: o = "screen",
  width: d = "100%"
}) {
  const c = f(
    e.root,
    {
      [e.screen]: o === "screen",
      [e.content]: o === "content",
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
  return /* @__PURE__ */ a(
    "div",
    {
      className: c,
      style: {
        width: d,
        height: n
      },
      "data-testid": "overlay",
      children: s
    }
  );
}
export {
  x as Overlay
};
