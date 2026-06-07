import { jsx as t } from "react/jsx-runtime";
import { clsx as e } from "clsx";
import i from "./styles.module.css.js";
function m({ className: o, children: r }) {
  const s = e(i.root, o, "p-2");
  return /* @__PURE__ */ t("div", { className: s, children: r });
}
m.displayName = "Card.Section";
export {
  m as CardSection
};
