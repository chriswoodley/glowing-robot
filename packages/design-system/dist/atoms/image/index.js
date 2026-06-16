import e from "./styles.module.js";
import { clsx as t } from "clsx";
import { jsx as n } from "react/jsx-runtime";
//#region src/atoms/image/index.jsx
var r = (e) => typeof window < "u" ? window.btoa(e) : Buffer.from(e, "utf-8").toString("base64"), i = /* @__PURE__ */ new Map(), a = ({ width: e, height: t, color: n }) => {
	let a = `${e},${e},${n}`;
	return i.has(a) || i.set(a, `data:image/svg+xml;base64,${r(`<svg viewBox="0 0 ${e} ${t}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${e}" height="${t}" fill="${n}"></rect>
      </svg>`)}`), i.get(a);
};
function o({ alt: r, className: i, crossOrigin: o, decoding: s = "async", fill: c = !1, height: l, loading: u = "lazy", placeholder: d = {}, sizes: f, src: p, srcSet: m, width: h }) {
	let g = a({
		width: h,
		height: l,
		color: "#eeeeee"
	});
	return Object.keys(d).forEach((e) => {
		let t = d[e];
		t && (e === "color" && (g = a({
			width: h,
			height: l,
			color: t
		})), ["dataURL", "URL"].includes(e) && (g = t));
	}), /* @__PURE__ */ n("img", {
		alt: r,
		crossOrigin: o,
		decoding: s,
		height: l,
		loading: u,
		sizes: f,
		src: p,
		srcSet: m,
		width: h,
		className: t(e.root, { [e.fill]: c }, i),
		style: { "--placeholder": `url(${g})` }
	});
}
//#endregion
export { o as Image };
