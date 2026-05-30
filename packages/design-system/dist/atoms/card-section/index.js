import { jsx as t } from "react/jsx-runtime";
import { clsx as a } from "clsx";
import e from "./styles.module.css.js";
function i({ className: o, children: r }) {
  const s = a(e.root, o, "p-2");
  return /* @__PURE__ */ t("div", { className: s, children: r });
}
i.displayName = "Card.Section";
export {
  i as default
};
