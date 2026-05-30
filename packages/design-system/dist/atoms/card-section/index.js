import { jsx as s } from "react/jsx-runtime";
import "react";
import { clsx as a } from "../../node_modules/clsx/dist/clsx.js";
import e from "./styles.module.css.js";
function i({ className: o, children: r }) {
  const t = a(e.root, o, "p-2");
  return /* @__PURE__ */ s("div", { className: t, children: r });
}
i.displayName = "Card.Section";
export {
  i as default
};
