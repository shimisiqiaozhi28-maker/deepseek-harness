import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-teGThYp6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WHALE = "M23.748 4.482c-.254-.124-.364.113-.512.234-.051.039-.094.09-.137.136-.372.397-.806.657-1.373.626-.829-.046-1.537.214-2.163.848-.133-.782-.575-1.248-1.247-1.548-.352-.156-.708-.311-.955-.65-.172-.241-.219-.51-.305-.774-.055-.16-.11-.323-.293-.35-.2-.031-.278.136-.356.276-.313.572-.434 1.202-.422 1.84.027 1.436.633 2.58 1.838 3.393.137.093.172.187.129.323-.082.28-.18.552-.266.833-.055.179-.137.217-.329.14a5.526 5.526 0 01-1.736-1.18c-.857-.828-1.631-1.742-2.597-2.458a11.365 11.365 0 00-.689-.471c-.985-.957.13-1.743.388-1.836.27-.098.093-.432-.779-.428-.872.004-1.67.295-2.687.684a3.055 3.055 0 01-.465.137 9.597 9.597 0 00-2.883-.102c-1.885.21-3.39 1.102-4.497 2.623C.082 8.606-.231 10.684.152 12.85c.403 2.284 1.569 4.175 3.36 5.653 1.858 1.533 3.997 2.284 6.438 2.14 1.482-.085 3.133-.284 4.994-1.86.47.234.962.327 1.78.397.63.059 1.236-.03 1.705-.128.735-.156.684-.837.419-.961-2.155-1.004-1.682-.595-2.113-.926 1.096-1.296 2.746-2.642 3.392-7.003.05-.347.007-.565 0-.845-.004-.17.035-.237.23-.256a4.173 4.173 0 001.545-.475c1.396-.763 1.96-2.015 2.093-3.517.02-.23-.004-.467-.247-.588zM11.581 18c-2.089-1.642-3.102-2.183-3.52-2.16-.392.024-.321.471-.235.763.09.288.207.486.371.739.114.167.192.416-.113.603-.673.416-1.842-.14-1.897-.167-1.361-.802-2.5-1.86-3.301-3.307-.774-1.393-1.224-2.887-1.298-4.482-.02-.386.093-.522.477-.592a4.696 4.696 0 011.529-.039c2.132.312 3.946 1.265 5.468 2.774.868.86 1.525 1.887 2.202 2.891.72 1.066 1.494 2.082 2.48 2.914.348.292.625.514.891.677-.802.09-2.14.11-3.054-.614zm1-6.44a.306.306 0 01.415-.287.302.302 0 01.2.288.306.306 0 01-.31.307.303.303 0 01-.304-.308zm3.11 1.596c-.2.081-.399.151-.59.16a1.245 1.245 0 01-.798-.254c-.274-.23-.47-.358-.552-.758a1.73 1.73 0 01.016-.588c.07-.327-.008-.537-.239-.727-.187-.156-.426-.199-.688-.199a.559.559 0 01-.254-.078c-.11-.054-.2-.19-.114-.358.028-.054.16-.186.192-.21.356-.202.767-.136 1.146.016.352.144.618.408 1.001.782.391.451.462.576.685.914.176.265.336.537.445.848.067.195-.019.354-.25.452z";
var LOOP = 16.4;
var PHASES = [
	{
		id: "logo",
		t0: 0,
		t1: 2.75,
		fi: 0,
		fo: .8
	},
	{
		id: "check",
		t0: 2.5,
		t1: 3.85,
		fi: .32,
		fo: .26
	},
	{
		id: "auth",
		t0: 3.55,
		t1: 5.5,
		fi: .26,
		fo: .22
	},
	{
		id: "identity",
		t0: 5.28,
		t1: 7.28,
		fi: .26,
		fo: .22
	},
	{
		id: "request",
		t0: 7.06,
		t1: 8.5,
		fi: .26,
		fo: .22
	},
	{
		id: "read",
		t0: 8.28,
		t1: 10.7,
		fi: .26,
		fo: .22
	},
	{
		id: "verify",
		t0: 10.48,
		t1: 12.7,
		fi: .28,
		fo: .24
	},
	{
		id: "welcome",
		t0: 12.48,
		t1: 14.25,
		fi: .16,
		fo: .28
	}
];
var COPY = {
	check: {
		step: "",
		cn: "系统自检中...",
		en: "SYSTEM SELF-CHECK",
		live: "系统自检"
	},
	auth: {
		step: "[ 01 / 06 ]  AUTHORIZATION",
		cn: "等待用户授权...",
		en: "AWAITING OPERATOR CONSENT",
		live: "需要访问许可"
	},
	identity: {
		step: "[ 02 / 06 ]  IDENTITY",
		cn: "核对身份资料...",
		en: "MATCHING OPERATOR RECORD",
		live: "身份资料确认，心夏，编号 0087"
	},
	request: {
		step: "[ 03 / 06 ]  REQUEST",
		cn: "接收访问需求，建立会话通道...",
		en: "HANDSHAKE ESTABLISHED",
		live: "接收访问需求"
	},
	read: {
		step: "[ 04 / 06 ]  READ",
		cn: "开始读取权限，索引工作区与会话...",
		en: "READING PERMISSION SET",
		live: "开始读取权限"
	},
	verify: {
		step: "[ 05 / 06 ]  VERIFY",
		cn: "读取完毕，核验通过，权限已授予",
		en: "PERMISSION AUTHORIZED",
		live: "读取完毕，核验通过"
	},
	welcome: {
		step: "[ 06 / 06 ]  WELCOME",
		cn: "身份验证完成，会话已建立",
		en: "IDENTITY VERIFIED · SESSION ESTABLISHED",
		live: "欢迎心夏访问 DeepSeek Harness"
	}
};
var HEX = Array.from({ length: 48 }, (_, i) => {
	let x = i * 1103515245 + 12345 >>> 0;
	let line = "";
	for (let k = 0; k < 8; k++) {
		x = Math.imul(x, 1664525) + 1013904223 >>> 0;
		line += (x & 255).toString(16).padStart(2, "0").toUpperCase();
		if (k < 7) line += "  ";
	}
	return line;
});
function smooth01(x) {
	const u = Math.min(1, Math.max(0, x));
	return u * u * (3 - 2 * u);
}
function band(t, t0, t1, fi, fo) {
	if (t < t0 || t >= t1) return 0;
	return (fi <= 0 ? 1 : smooth01((t - t0) / fi)) * (fo <= 0 ? 1 : smooth01((t1 - t) / fo));
}
function hash(n) {
	const x = Math.sin(n * 127.1) * 43758.5453;
	return x - Math.floor(x);
}
function clockLabel(t) {
	const total = 37235 + Math.floor(t);
	const h = Math.floor(total / 3600) % 24;
	const m = Math.floor(total / 60) % 60;
	const s = total % 60;
	const pad = (n) => String(n).padStart(2, "0");
	return `${pad(h)}:${pad(m)}:${pad(s)}`;
}
function Whale({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className,
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: WHALE
		})
	});
}
function Dots() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "hx-dots",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
		]
	});
}
var HINT = "按 Enter / Space，或点击按钮继续";
function BootSequence() {
	const shellRef = (0, import_react.useRef)(null);
	const logoRef = (0, import_react.useRef)(null);
	const flashRef = (0, import_react.useRef)(null);
	const canvasRef = (0, import_react.useRef)(null);
	const grainRef = (0, import_react.useRef)(null);
	const clockRef = (0, import_react.useRef)(null);
	const meterRef = (0, import_react.useRef)(null);
	const stepRef = (0, import_react.useRef)(null);
	const statusCnRef = (0, import_react.useRef)(null);
	const statusEnRef = (0, import_react.useRef)(null);
	const idRef = (0, import_react.useRef)(null);
	const bootRef = (0, import_react.useRef)(null);
	const eqRef = (0, import_react.useRef)(null);
	const glitchRef = (0, import_react.useRef)(null);
	const tearRef = (0, import_react.useRef)(null);
	const sweepRef = (0, import_react.useRef)(null);
	const markRef = (0, import_react.useRef)(null);
	const gapRef = (0, import_react.useRef)(null);
	const strokeRef = (0, import_react.useRef)(null);
	const fillRef = (0, import_react.useRef)(null);
	const penRef = (0, import_react.useRef)(null);
	const liveRef = (0, import_react.useRef)(null);
	const authBtnRef = (0, import_react.useRef)(null);
	const idBtnRef = (0, import_react.useRef)(null);
	const layerRef = (0, import_react.useRef)({});
	const api = (0, import_react.useRef)({
		grant: () => {},
		confirm: () => {},
		skip: () => {}
	});
	(0, import_react.useEffect)(() => {
		const shell = shellRef.current;
		const canvas = canvasRef.current;
		if (!shell || !canvas) return;
		const ctx = canvas.getContext("2d", {
			alpha: true,
			desynchronized: true
		});
		if (!ctx) return;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		let cssW = window.innerWidth;
		let cssH = window.innerHeight;
		let origin = performance.now();
		let raf = 0;
		let alive = true;
		let running = false;
		let lastCopy = "";
		let lastClock = "";
		const timers = /* @__PURE__ */ new Set();
		let epoch = 0;
		let authDown = 0;
		let idDown = 0;
		let whaleLen = 0;
		const grain = grainRef.current;
		if (grain && !reduce) {
			const speckle = document.createElement("canvas");
			speckle.width = 160;
			speckle.height = 160;
			const g = speckle.getContext("2d");
			if (g) {
				const img = g.createImageData(160, 160);
				for (let i = 0; i < img.data.length; i += 4) {
					const v = Math.random() < .18 ? 255 : 0;
					img.data[i] = v;
					img.data[i + 1] = v;
					img.data[i + 2] = v;
					img.data[i + 3] = v ? 90 + Math.random() * 80 : 0;
				}
				g.putImageData(img, 0, 0);
				grain.style.backgroundImage = `url(${speckle.toDataURL()})`;
			}
		}
		const resize = () => {
			cssW = window.innerWidth;
			cssH = window.innerHeight;
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			let w = Math.floor(cssW * dpr);
			let h = Math.floor(cssH * dpr);
			const scale = Math.min(1, 3840 / Math.max(w, 1), 2160 / Math.max(h, 1));
			w = Math.max(1, Math.floor(w * scale));
			h = Math.max(1, Math.floor(h * scale));
			if (canvas.width !== w || canvas.height !== h) {
				canvas.width = w;
				canvas.height = h;
			}
		};
		const timeOf = (now) => {
			let t = (now - origin) / 1e3;
			if (t >= LOOP) {
				const loops = Math.floor(t / LOOP);
				origin += loops * LOOP * 1e3;
				t -= loops * LOOP;
			}
			return t < 0 ? 0 : t;
		};
		const seek = (t) => {
			origin = performance.now() - Math.min(16.38, Math.max(0, t)) * 1e3;
		};
		const later = (fn, ms) => {
			const id = window.setTimeout(() => {
				timers.delete(id);
				fn();
			}, ms);
			timers.add(id);
		};
		const punch = (kind, to) => {
			const token = ++epoch;
			const until = performance.now() + 150;
			if (kind === "auth") authDown = until;
			else idDown = until;
			later(() => {
				if (token === epoch) seek(to);
			}, 120);
		};
		api.current.grant = () => punch("auth", 5.32);
		api.current.confirm = () => punch("id", 7.1);
		api.current.skip = () => {
			epoch += 1;
			authBtnRef.current?.classList.remove("is-down");
			idBtnRef.current?.classList.remove("is-down");
			const t = timeOf(performance.now());
			let next = PHASES[0].t0;
			for (let i = 0; i < PHASES.length; i++) {
				const phase = PHASES[i];
				if (t >= phase.t0 && t < phase.t1) {
					next = PHASES[i + 1]?.t0 ?? 0;
					break;
				}
			}
			seek(next === 0 ? 0 : next + .02);
		};
		const onKey = (event) => {
			if (event.code !== "Enter" && event.code !== "Space" && event.code !== "Escape") return;
			event.preventDefault();
			if (event.code === "Escape") {
				epoch += 1;
				seek(0);
				return;
			}
			const t = timeOf(performance.now());
			if (t >= 3.55 && t < 5.45) api.current.grant();
			else if (t >= 5.28 && t < 7.2) api.current.confirm();
		};
		const drawRadar = (t, alpha) => {
			if (alpha < .02) return;
			const w = canvas.width;
			const h = canvas.height;
			const cx = w * .5;
			const cy = h * .47;
			const R = Math.min(w, h) * .33;
			ctx.save();
			ctx.translate(cx, cy);
			ctx.globalAlpha = alpha * .55;
			ctx.strokeStyle = "#f4f4f5";
			ctx.lineWidth = Math.max(1, R * .004);
			for (const scale of [
				1,
				.62,
				.3
			]) {
				ctx.beginPath();
				ctx.arc(0, 0, R * scale, 0, Math.PI * 2);
				ctx.stroke();
			}
			const spin = reduce ? .4 : 1;
			ctx.globalAlpha = alpha;
			ctx.lineWidth = Math.max(2, R * .018);
			ctx.lineCap = "round";
			ctx.strokeStyle = "#f4f4f5";
			const a0 = t * .85 * spin;
			ctx.beginPath();
			ctx.arc(0, 0, R, a0, a0 + 4.15);
			ctx.stroke();
			const tip = a0 + 4.15;
			ctx.fillStyle = "#f4f4f5";
			ctx.beginPath();
			ctx.arc(Math.cos(tip) * R, Math.sin(tip) * R, R * .02, 0, Math.PI * 2);
			ctx.fill();
			ctx.globalAlpha = alpha * .9;
			ctx.lineWidth = Math.max(1.5, R * .008);
			const a1 = -t * 1.15 * spin + 1.1;
			ctx.beginPath();
			ctx.arc(0, 0, R * .62, a1, a1 + 2.4);
			ctx.stroke();
			ctx.fillStyle = "#ff2d2d";
			ctx.globalAlpha = alpha;
			const sats = [
				{
					r: .62,
					ang: t * .7 * spin + .4,
					s: .014
				},
				{
					r: .82,
					ang: -t * .55 * spin + 2.2,
					s: .012
				},
				{
					r: .3,
					ang: t * 1.05 * spin + 1.7,
					s: .012
				}
			];
			for (const sat of sats) {
				ctx.beginPath();
				ctx.arc(Math.cos(sat.ang) * R * sat.r, Math.sin(sat.ang) * R * sat.r, R * sat.s, 0, Math.PI * 2);
				ctx.fill();
			}
			ctx.restore();
		};
		const drawHex = (t, alpha) => {
			if (alpha < .02 || cssW < 860) return;
			const w = canvas.width;
			const h = canvas.height;
			const x = w * .825;
			const y = h * .18;
			const bw = w * .125;
			const bh = h * .52;
			ctx.save();
			ctx.beginPath();
			ctx.rect(x, y, bw, bh);
			ctx.clip();
			const fontPx = Math.max(11, h * .013);
			ctx.font = `400 ${fontPx}px "IBM Plex Mono", ui-monospace, monospace`;
			ctx.fillStyle = `rgba(244,244,245,${.42 * alpha})`;
			const lh = fontPx * 1.65;
			const scroll = reduce ? 0 : t * lh * 7 % (lh * HEX.length);
			const lines = Math.ceil(bh / lh) + 2;
			const start = Math.floor(scroll / lh);
			for (let i = 0; i < lines; i++) {
				const idx = (start + i) % HEX.length;
				ctx.fillText(HEX[idx], x + fontPx * .2, y + i * lh - scroll % lh);
			}
			ctx.restore();
		};
		const paint = (now) => {
			if (!alive) return;
			const t = timeOf(now);
			const shellOp = smooth01((t - 2.45) / .5) * (1 - smooth01((t - 13.95) / .42));
			shell.style.opacity = String(shellOp);
			shell.style.pointerEvents = shellOp > .08 ? "auto" : "none";
			let shown = "logo";
			for (const phase of PHASES) {
				const op = band(t, phase.t0, phase.t1, phase.fi, phase.fo);
				const node = phase.id === "logo" ? logoRef.current : layerRef.current[phase.id];
				if (node) {
					node.style.opacity = String(op);
					if (phase.id !== "logo") node.style.transform = `translate3d(0, ${(1 - op) * 12}px, 0)`;
					node.setAttribute("aria-hidden", op > .35 ? "false" : "true");
				}
				if (op > .35) shown = phase.id;
			}
			const flash = t < 13.9 || t > 15.55 ? 0 : t < 14.4 ? smooth01((t - 13.9) / .5) : t < 14.8 ? 1 : 1 - smooth01((t - 14.8) / .75);
			if (flashRef.current) flashRef.current.style.opacity = String(flash);
			if (idRef.current) idRef.current.style.opacity = String(smooth01((t - 3.6) / .28));
			if (meterRef.current) {
				const width = 28 + smooth01(t / 14) * 62;
				meterRef.current.style.width = `${width}%`;
			}
			if (bootRef.current) bootRef.current.style.width = `${Math.min(100, t / 14.2 * 100)}%`;
			const clock = clockLabel(t);
			if (clockRef.current && clock !== lastClock) {
				clockRef.current.textContent = clock;
				lastClock = clock;
			}
			if (shown !== "logo" && shown in COPY) {
				const copy = COPY[shown];
				const key = shown;
				if (key !== lastCopy) {
					lastCopy = key;
					if (stepRef.current) stepRef.current.textContent = copy.step;
					if (statusCnRef.current) statusCnRef.current.textContent = copy.cn;
					if (statusEnRef.current) statusEnRef.current.textContent = copy.en;
					if (liveRef.current) liveRef.current.textContent = copy.live;
				}
			}
			const bars = eqRef.current?.children;
			if (bars) for (let i = 0; i < bars.length; i++) {
				const el = bars[i];
				const wave = reduce ? .55 : .5 + .5 * Math.sin(t * (5.5 + i * .85) + i);
				el.style.transform = `scaleY(${.22 + .78 * wave})`;
			}
			const authHot = t > 5.28 && t < 5.5;
			const idHot = t > 7.05 && t < 7.28;
			const authOp = band(t, 3.55, 5.5, .26, .22);
			const idOp = band(t, 5.28, 7.28, .26, .22);
			authBtnRef.current?.classList.toggle("is-down", authHot || now < authDown);
			idBtnRef.current?.classList.toggle("is-down", idHot || now < idDown);
			if (authBtnRef.current) {
				authBtnRef.current.tabIndex = authOp > .55 ? 0 : -1;
				authBtnRef.current.style.pointerEvents = authOp > .55 ? "auto" : "none";
			}
			if (idBtnRef.current) {
				idBtnRef.current.tabIndex = idOp > .55 ? 0 : -1;
				idBtnRef.current.style.pointerEvents = idOp > .55 ? "auto" : "none";
			}
			const welcome = band(t, 12.48, 14.25, .16, .28);
			const glitch = glitchRef.current;
			if (glitch) {
				const mag = glitch.children[1];
				const cyan = glitch.children[2];
				if (mag && cyan) {
					if (welcome > .15 && !reduce) {
						const bucket = Math.floor(t * 18);
						const j = (hash(bucket) - .5) * 10;
						const slice = hash(bucket + 2) * 68;
						mag.style.opacity = "0.9";
						cyan.style.opacity = "0.8";
						mag.style.transform = `translate3d(${j}px, 0, 0)`;
						cyan.style.transform = `translate3d(${-j * .65}px, 0, 0)`;
						mag.style.clipPath = `inset(${slice}% 0 ${Math.max(0, 86 - slice)}% 0)`;
						const slice2 = (slice + 28) % 72;
						cyan.style.clipPath = `inset(${slice2}% 0 ${Math.max(0, 78 - slice2)}% 0)`;
					} else {
						mag.style.opacity = "0";
						cyan.style.opacity = "0";
					}
				}
			}
			const tears = tearRef.current?.children;
			if (tears) for (let i = 0; i < tears.length; i++) {
				const el = tears[i];
				if (welcome > .2 && !reduce) {
					const bucket = Math.floor(t * 14) + i * 9;
					el.style.opacity = String(.35 + hash(bucket + 1) * .55);
					el.style.top = `${hash(bucket) * 100}%`;
					el.style.transform = `translate3d(${(hash(bucket + 4) - .5) * 24}px, 0, 0)`;
				} else el.style.opacity = "0";
			}
			if (grain && !reduce) {
				const gx = t * 22 % 180;
				const gy = t * 13 % 180;
				grain.style.transform = `translate3d(${gx}px, ${gy}px, 0)`;
			}
			const sweep = sweepRef.current;
			if (sweep) {
				const u = (t - 4.18) / 1.4000000000000004;
				const authVis = band(t, 3.55, 5.5, .26, .22);
				if (reduce || u < 0 || u > 1 || authVis < .04) sweep.style.opacity = "0";
				else {
					const edge = u < .045 ? u / .045 : u > .96 ? (1 - u) / .04 : 1;
					sweep.style.opacity = String(Math.min(1, authVis) * edge);
					const y = -6 + u * 112;
					sweep.style.transform = `translate3d(0, ${y.toFixed(2)}vh, 0)`;
				}
			}
			const req = band(t, 7.06, 8.5, .26, .22);
			const rd = band(t, 8.28, 10.7, .26, .22);
			const markOp = 1 - (1 - req) * (1 - rd);
			const draw = reduce ? 1 : smooth01((t - 7.18) / .92);
			const fill = reduce ? rd > .2 ? 1 : 0 : smooth01((t - 8.28) / .42);
			const mark = markRef.current;
			const gap = gapRef.current;
			if (mark && gap) {
				const sbox = shell.getBoundingClientRect();
				const gbox = gap.getBoundingClientRect();
				const naturalTop = gbox.top - sbox.top - (1 - req) * 12;
				const follow = rd > req ? rd : req;
				mark.style.left = `${gbox.left - sbox.left}px`;
				mark.style.width = `${gbox.width}px`;
				mark.style.top = `${naturalTop}px`;
				mark.style.opacity = String(markOp);
				mark.style.transform = `translate3d(0, ${(1 - follow) * 12}px, 0)`;
			}
			const stroke = strokeRef.current;
			if (stroke) {
				stroke.style.strokeDashoffset = String(1 - draw);
				stroke.style.opacity = String((.55 + .45 * draw) * (1 - fill));
			}
			if (fillRef.current) fillRef.current.style.opacity = String(fill);
			const pen = penRef.current;
			if (pen && stroke) {
				if (!reduce && markOp > .2 && draw > .02 && draw < .985 && fill < .08) {
					if (whaleLen <= 0) whaleLen = stroke.getTotalLength();
					if (whaleLen > 0) {
						const pt = stroke.getPointAtLength(whaleLen * draw);
						pen.setAttribute("cx", String(pt.x));
						pen.setAttribute("cy", String(pt.y));
						pen.style.opacity = "1";
					}
				} else pen.style.opacity = "0";
			}
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			const readOp = band(t, 8.28, 10.7, .26, .22);
			const verifyOp = band(t, 10.48, 12.7, .28, .24);
			drawHex(t, readOp);
			drawRadar(t, verifyOp);
			raf = requestAnimationFrame(paint);
		};
		resize();
		window.addEventListener("resize", resize);
		window.addEventListener("keydown", onKey);
		const start = () => {
			if (!alive || running) return;
			running = true;
			origin = performance.now();
			const frame = (now) => {
				if (!alive) return;
				if (document.hidden) {
					running = false;
					return;
				}
				paint(now);
			};
			raf = requestAnimationFrame(frame);
		};
		document.fonts.ready.then(start);
		const onHide = () => {
			if (!document.hidden && alive) start();
		};
		document.addEventListener("visibilitychange", onHide);
		return () => {
			alive = false;
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", resize);
			window.removeEventListener("keydown", onKey);
			document.removeEventListener("visibilitychange", onHide);
			timers.forEach((id) => window.clearTimeout(id));
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "hx-stage",
		"aria-label": "DeepSeek Harness 开屏",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hx-vignette" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hx-logo",
				ref: logoRef,
				"data-layer": "logo",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hx-logo-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Whale, { className: "hx-whale-lg" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hx-word-cn",
							children: "深度求索"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hx-word-en hx-latin",
							children: "DEEPSEEK"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hx-word-sub hx-latin",
							children: "Deepseek Harness"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hx-shell",
				ref: shellRef,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hx-sweep",
						ref: sweepRef,
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hx-panel hx-panel-l" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hx-panel hx-panel-m" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hx-panel hx-panel-r" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
						ref: canvasRef,
						className: "hx-canvas",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "hx-brand",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hx-brand-en",
								children: "DEEPSEEK"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hx-brand-sub",
								children: "人工智能系统·深度求索 SYNTHESIZE INTELLIGENCE"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hx-os",
								children: "HARNESS OS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hx-rev",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "REV 0.1.0" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WEB PROFILE" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										ref: clockRef,
										children: "10:20:35"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hx-meter",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { ref: meterRef })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "hx-skip",
						onClick: () => api.current.skip(),
						children: "SKIP ›"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hx-layer",
						ref: (node) => {
							layerRef.current.auth = node;
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hx-stack hx-auth",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "需要访问许可" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "hx-en hx-latin",
									children: "ACCESS PERMISSION REQUIRED"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									ref: authBtnRef,
									type: "button",
									className: "hx-btn hx-latin",
									tabIndex: -1,
									onClick: () => api.current.grant(),
									children: "授予访问权限 GRANT ACCESS"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "hx-hint",
									children: HINT
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hx-layer",
						ref: (node) => {
							layerRef.current.identity = node;
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hx-stack",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "身份资料确认" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "hx-en hx-latin",
									children: "IDENTITY VERIFICATION"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hx-rows",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "身份名称" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "心夏" })] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "身份编号" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "0087" })] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "权限等级" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "S" })] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									ref: idBtnRef,
									type: "button",
									className: "hx-btn hx-latin",
									tabIndex: -1,
									onClick: () => api.current.confirm(),
									children: "确认身份 CONFIRM IDENTITY"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "hx-hint",
									children: HINT
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hx-layer",
						ref: (node) => {
							layerRef.current.request = node;
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hx-stack",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "接收访问需求" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "hx-en hx-latin",
									children: "ACCESS REQUEST RECEIVED"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hx-mark-gap",
									ref: gapRef,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Whale, { className: "hx-whale-sm" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "hx-spread hx-latin",
											children: "DEEPSEEK"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dots, {})
									]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hx-layer",
						ref: (node) => {
							layerRef.current.read = node;
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hx-stack",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "开始读取权限" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "hx-en hx-latin",
									children: "PERMISSION READ STARTED"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hx-mark-gap",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Whale, { className: "hx-whale-sm" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "hx-spread hx-latin",
											children: "DEEPSEEK"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dots, {})
									]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hx-mark",
						ref: markRef,
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								className: "hx-whale-sm hx-whale-draw",
								viewBox: "0 0 24 24",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										ref: strokeRef,
										className: "is-stroke",
										d: WHALE,
										pathLength: 1,
										fillRule: "evenodd"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										ref: fillRef,
										className: "is-fill",
										d: WHALE,
										fillRule: "evenodd"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										ref: penRef,
										className: "is-pen",
										r: "0.46"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hx-spread hx-latin",
								children: "DEEPSEEK"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dots, {})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hx-layer",
						ref: (node) => {
							layerRef.current.verify = node;
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hx-stack",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "读取完毕 · 核验通过" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hx-en hx-latin",
								children: "READ COMPLETE · VERIFIED"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hx-layer",
						ref: (node) => {
							layerRef.current.welcome = node;
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hx-stack hx-welcome",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hx-glitch",
									ref: glitchRef,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WELCOME TO" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "hx-gmag",
											"aria-hidden": "true",
											children: "WELCOME TO"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "hx-gcyan",
											"aria-hidden": "true",
											children: "WELCOME TO"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hx-badge",
									children: "DEEPSEEK HARNESS"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Whale, { className: "hx-whale-sm" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hx-mini",
									children: "DEEPSEEK · HARNESS"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hx-hello",
									children: "欢迎 心夏 访问"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hx-id",
						ref: idRef,
						children: "ID CONFIRMED : 0087"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
						className: "hx-foot",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hx-step",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hx-eq",
									ref: eqRef,
									"aria-hidden": "true",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hx-step-label",
									ref: stepRef
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hx-status",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hx-status-cn",
									ref: statusCnRef,
									children: "系统自检中..."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hx-status-en",
									ref: statusEnRef,
									children: "SYSTEM SELF-CHECK"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hx-powered",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "POWERED BY DEEPSEEK" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
									className: "hx-pip",
									"aria-hidden": "true"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hx-bootline",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { ref: bootRef })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hx-tears",
						ref: tearRef,
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hx-grain",
				ref: grainRef,
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hx-scan",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hx-flash",
				ref: flashRef
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "sr-only",
				ref: liveRef,
				"aria-live": "polite",
				children: "深度求索 DEEPSEEK"
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BootSequence, {});
}
//#endregion
export { Home as component };
