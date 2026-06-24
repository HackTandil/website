"use client";

import { useEffect, useMemo, useRef, useState } from "react";

// Natural aspect ratio of the landscape source /assets/images/desktop.webp
// (1672 x 941). Used to replicate the CSS `object-cover` crop so tracking boxes
// stay locked to the subjects no matter how the feed is sized/cropped during the
// scroll choreography. Overridable per-variant (mobile ships a 9:16 portrait crop).
const DESKTOP_IMAGE_ASPECT = 1672 / 941;

export type TrackTarget = {
	id: string;
	label: string;
	status: string;
	labelSide: "left" | "right" | "below-right";
	// subject bounding box in NORMALISED source-image coordinates (0..1)
	src: { x0: number; y0: number; x1: number; y1: number };
};

// Measured directly from the landscape source photograph (/assets/images/desktop.webp).
export const DESKTOP_TARGETS: TrackTarget[] = [
	{
		id: "builder-001",
		label: "BUILDER-001",
		status: "LOAD-BEARING",
		labelSide: "left",
		src: { x0: 0.745, y0: 0.395, x1: 0.802, y1: 0.59 },
	},
	{
		id: "builder-002",
		label: "BUILDER-002",
		status: "SEATED",
		labelSide: "below-right",
		src: { x0: 0.857, y0: 0.338, x1: 0.908, y1: 0.565 },
	},
];

type Rect = { left: number; top: number; width: number; height: number };

// Map a normalised source-image box to a percentage box of the container,
// matching `object-fit: cover` with `object-position: center center`.
function coverRect(
	src: TrackTarget["src"],
	containerW: number,
	containerH: number,
	imageAspect: number,
): Rect {
	if (containerW <= 0 || containerH <= 0)
		return { left: 0, top: 0, width: 0, height: 0 };
	const containerAspect = containerW / containerH;
	let dispW: number;
	let dispH: number;
	if (containerAspect > imageAspect) {
		// container is wider than the image → fill width, overflow vertically
		dispW = containerW;
		dispH = containerW / imageAspect;
	} else {
		dispH = containerH;
		dispW = containerH * imageAspect;
	}
	const offX = (containerW - dispW) / 2;
	const offY = (containerH - dispH) / 2;
	const px0 = offX + src.x0 * dispW;
	const px1 = offX + src.x1 * dispW;
	const py0 = offY + src.y0 * dispH;
	const py1 = offY + src.y1 * dispH;
	return {
		left: (px0 / containerW) * 100,
		top: (py0 / containerH) * 100,
		width: ((px1 - px0) / containerW) * 100,
		height: ((py1 - py0) / containerH) * 100,
	};
}

function TrackingBox({
	target,
	rect,
	time,
}: {
	target: TrackTarget;
	rect: Rect;
	time: string;
}) {
	return (
		<div
			className="pointer-events-none absolute"
			style={{
				left: `${rect.left}%`,
				top: `${rect.top}%`,
				width: `${rect.width}%`,
				height: `${rect.height}%`,
			}}
		>
			<div className="relative h-full w-full">
				{/* corner brackets */}
				{(["tl", "tr", "bl", "br"] as const).map((c) => (
					<span
						key={c}
						className="absolute h-3 w-3 border-white"
						style={{
							borderTopWidth: c.startsWith("t") ? 2 : 0,
							borderBottomWidth: c.startsWith("b") ? 2 : 0,
							borderLeftWidth: c.endsWith("l") ? 2 : 0,
							borderRightWidth: c.endsWith("r") ? 2 : 0,
							top: c.startsWith("t") ? 0 : "auto",
							bottom: c.startsWith("b") ? 0 : "auto",
							left: c.endsWith("l") ? 0 : "auto",
							right: c.endsWith("r") ? 0 : "auto",
						}}
					/>
				))}
				{/* faint box fill */}
				<span className="absolute inset-0 border border-white/30 bg-white/[0.04]" />
				{/* crosshair center */}
				<span className="absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-white/60" />
				<span className="absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2 bg-white/60" />
				{/* label tag */}
				<div
					className={`absolute flex flex-col gap-0.5 whitespace-nowrap font-mono text-[8px] leading-tight text-[var(--hud)] sm:text-[10px] ${
						target.labelSide === "right"
							? "-top-px left-full ml-1 items-start"
							: target.labelSide === "left"
								? "-top-px right-full mr-1 items-end"
								: "right-0 top-full mt-1 items-end"
					}`}
				>
					<span className="bg-[var(--hud)] px-1 py-px font-semibold text-black">
						{target.label}
					</span>
					<span className="bg-black/70 px-1 py-px tracking-wider">
						{target.status}
					</span>
					<span className="bg-black/70 px-1 py-px tracking-wider text-[var(--hud)]/70">{`LOCK ${time}`}</span>
				</div>
			</div>
		</div>
	);
}

export function CctvHud({
	time,
	opacity,
	bracketsOpacity = 1,
	imageAspect = DESKTOP_IMAGE_ASPECT,
	targets = DESKTOP_TARGETS,
}: {
	time: string;
	opacity: number;
	bracketsOpacity?: number;
	imageAspect?: number;
	targets?: TrackTarget[];
}) {
	const ref = useRef<HTMLDivElement>(null);
	const [size, setSize] = useState({ w: 0, h: 0 });
	const [pointer, setPointer] = useState<{ x: number; y: number } | null>(null);
	// Last known cursor position in viewport coordinates, so we can re-project
	// it onto the feed box when the box moves/resizes during scroll.
	const clientRef = useRef<{ x: number; y: number } | null>(null);

	// Track the feed box size (it changes every scroll frame as the feed expands)
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const ro = new ResizeObserver((entries) => {
			const r = entries[0]?.contentRect;
			if (r) setSize({ w: r.width, h: r.height });
		});
		ro.observe(el);
		setSize({ w: el.clientWidth, h: el.clientHeight });
		return () => ro.disconnect();
	}, []);

	// Track the operator's cursor (BUILDER-003). The HUD is pointer-events-none,
	// so listen on the window and project the position onto the feed box. We
	// re-project on scroll as well, otherwise the box drifts as the feed
	// expands/moves while the mouse stays still.
	useEffect(() => {
		const project = () => {
			const el = ref.current;
			const c = clientRef.current;
			if (!el || !c) return;
			const r = el.getBoundingClientRect();
			const x = c.x - r.left;
			const y = c.y - r.top;
			if (x < 0 || y < 0 || x > r.width || y > r.height) {
				setPointer(null);
				return;
			}
			setPointer({ x, y });
		};
		const onMove = (e: PointerEvent) => {
			clientRef.current = { x: e.clientX, y: e.clientY };
			project();
		};
		window.addEventListener("pointermove", onMove);
		window.addEventListener("scroll", project, { passive: true });
		return () => {
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("scroll", project);
		};
	}, []);

	const rects = useMemo(
		() => targets.map((t) => coverRect(t.src, size.w, size.h, imageAspect)),
		[size, targets, imageAspect],
	);

	// Cursor reticle — a fixed-size box centred on the pointer.
	const POINTER_W = 56;
	const POINTER_H = 56;
	const pointerRect: Rect | null =
		pointer && size.w > 0 && size.h > 0
			? {
					left: ((pointer.x - POINTER_W / 2) / size.w) * 100,
					top: ((pointer.y - POINTER_H / 2) / size.h) * 100,
					width: (POINTER_W / size.w) * 100,
					height: (POINTER_H / size.h) * 100,
				}
			: null;
	const pointerTarget: TrackTarget = {
		id: "builder-003",
		label: "BUILDER-003",
		status: "ACQUIRING",
		// keep the label on the visible side of the cursor
		labelSide:
			pointer && size.w > 0 && pointer.x > size.w * 0.78 ? "left" : "right",
		src: { x0: 0, y0: 0, x1: 0, y1: 0 },
	};

	return (
		<div
			ref={ref}
			className="pointer-events-none absolute inset-0 z-20 font-mono text-[var(--hud)]"
			aria-hidden="true"
		>
			{/* surveillance chrome — fades out as the feed decodes */}
			<div
				className="absolute inset-0 transition-opacity duration-200"
				style={{ opacity }}
			>
				{/* scanlines */}
				<div className="cctv-scanlines absolute inset-0" />
				{/* vignette */}
				<div className="absolute inset-0 shadow-[inset_0_0_120px_40px_rgba(0,0,0,0.65)]" />

				{/* top bar */}
				<div className="absolute inset-x-0 top-0 flex items-center justify-between px-3 py-2 text-[9px] tracking-wider sm:px-5 sm:text-[11px]">
					<div className="flex items-center gap-2">
						<span className="flex h-2 w-2 animate-pulse rounded-full bg-[var(--rec)]" />
						<span className="font-semibold text-[var(--rec)]">REC</span>
						<span className="text-[var(--hud)]/70">
							CAM-04 · PIEDRA MOVEDIZA
						</span>
					</div>
					<div className="text-[var(--hud)]/80">{time}</div>
				</div>

				{/* bottom bar */}
				<div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-3 py-2 text-[9px] tracking-wider sm:px-5 sm:text-[11px]">
					<span className="text-[var(--hud)]/70">TRACKING 2 SUBJECTS</span>
					<span className="text-[var(--hud)]/70">ISO 800 · f/8 · 1/125</span>
				</div>
			</div>

			{/* tracking brackets — stay locked on the subjects through the scroll */}
			<div
				className="absolute inset-0 transition-opacity duration-200"
				style={{ opacity: bracketsOpacity }}
			>
				{targets.map((t, i) => (
					<TrackingBox key={t.id} target={t} rect={rects[i]} time={time} />
				))}
				{/* operator cursor reticle */}
				{pointerRect && (
					<TrackingBox target={pointerTarget} rect={pointerRect} time={time} />
				)}
			</div>
		</div>
	);
}
