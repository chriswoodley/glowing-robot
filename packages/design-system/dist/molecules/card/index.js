import { CardCover as e } from "../../atoms/card-cover/index.js";
import { CardSection as t } from "../../atoms/card-section/index.js";
import n from "./styles.module.js";
import { useCallback as r } from "react";
import i from "clsx";
import { jsx as a } from "react/jsx-runtime";
//#region src/molecules/card/index.jsx
function o({ children: e, className: t, mode: o = "light", onClick: s, width: c }) {
	let l = i(n.root, n[o], { [n["is-clickable"]]: s === "function" }, "elevation-1", "border-radius", { "elevation-hover-3": !!s }, t), u = r((e) => {
		e.key === "Enter" && typeof s == "function" && s();
	}, [s]);
	return /* @__PURE__ */ a("div", {
		className: l,
		style: { width: c },
		...s ? {
			onKeyDown: u,
			role: "link",
			tabIndex: "0",
			onClick: s
		} : {},
		children: e
	});
}
o.Section = t, o.Cover = e;
//#endregion
export { o as Card };
