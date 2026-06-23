"use client";

import { useEffect, useRef, useState } from "react";
import { AsciiShader } from "./ascii-shader";
import { CctvHud, type TrackTarget } from "./cctv-hud";

// 9:16 portrait crop shipped to mobile (/assets/images/mobile.webp, 1440 x 2560).
const MOBILE_IMAGE_ASPECT = 1440 / 2560;

// Subject boxes re-measured against the portrait crop — the two men sit much
// higher in the frame here since the tall crop adds rock below them.
const MOBILE_TARGETS: TrackTarget[] = [
	{
		id: "builder-001",
		label: "BUILDER-001",
		status: "LOAD-BEARING",
		labelSide: "left",
		src: { x0: 0.745, y0: 0.398, x1: 0.808, y1: 0.5 },
	},
	{
		id: "builder-002",
		label: "BUILDER-002",
		status: "SEATED",
		labelSide: "below-right",
		src: { x0: 0.842, y0: 0.378, x1: 0.915, y1: 0.475 },
	},
];

function useIsMobile() {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const mq = window.matchMedia("(max-width: 768px)");
		const update = () => setIsMobile(mq.matches);
		update();
		mq.addEventListener("change", update);
		return () => mq.removeEventListener("change", update);
	}, []);
	return isMobile;
}

function clamp01(v: number) {
	return Math.min(1, Math.max(0, v));
}

function mapRange(v: number, inMin: number, inMax: number) {
	return clamp01((v - inMin) / (inMax - inMin));
}

function lerp(a: number, b: number, t: number) {
	return a + (b - a) * t;
}

export function SurveillanceHero() {
	const sectionRef = useRef<HTMLElement>(null);
	const [progress, setProgress] = useState(0);
	const [time, setTime] = useState("00:00:00");
	const isMobile = useIsMobile();

	// scroll progress through the tall section
	useEffect(() => {
		let raf = 0;
		const update = () => {
			raf = 0;
			const el = sectionRef.current;
			if (!el) return;
			const rect = el.getBoundingClientRect();
			const total = rect.height - window.innerHeight;
			const scrolled = clamp01(total > 0 ? -rect.top / total : 0);
			setProgress(scrolled);
		};
		const onScroll = () => {
			if (!raf) raf = requestAnimationFrame(update);
		};
		update();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
			if (raf) cancelAnimationFrame(raf);
		};
	}, []);

	// live surveillance clock
	useEffect(() => {
		const tick = () => {
			const d = new Date();
			const p = (n: number) => String(n).padStart(2, "0");
			setTime(`${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`);
		};
		tick();
		const t = setInterval(tick, 1000);
		return () => clearInterval(t);
	}, []);

	// ── scroll choreography ────────────────────────────────────────────────
	// 1. expand: framed feed grows to fill the viewport
	const expand = mapRange(progress, 0.04, 0.42);
	// 2. decode: photograph dissolves into ASCII signal
	const photoOpacity = 1 - mapRange(progress, 0.28, 0.62);
	// 3. HUD (rec bar + tracking) fades as we transition to the landing layer
	const hudOpacity = 1 - mapRange(progress, 0.45, 0.62);
	// 4. hero copy rises in once we're fullscreen
	const heroIn = mapRange(progress, 0.5, 0.7);
	// 5. masthead chrome fades out as the photo decodes into the ASCII signal
	const mastheadOpacity = 1 - mapRange(progress, 0.28, 0.5);

	// frame geometry: small centered monitor → full viewport. The starting
	// frame is taller/narrower on mobile so the 9:16 portrait feed isn't
	// aggressively cropped before it expands.
	const frameW = lerp(isMobile ? 92 : 86, 100, expand);
	const frameH = lerp(isMobile ? 74 : 58, 100, expand);
	const radius = lerp(4, 0, expand);
	const borderAlpha = (1 - expand) * 0.25;

	return (
		<section ref={sectionRef} className="relative h-[420vh]">
			{/* masthead chrome — visible over the live feed, fades out on decode */}
			<header
				className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-4 font-mono text-[11px] tracking-[0.25em] text-foreground/85 transition-opacity duration-200 sm:px-8"
				style={{
					opacity: mastheadOpacity,
					pointerEvents: mastheadOpacity < 0.05 ? "none" : "auto",
				}}
				aria-hidden={mastheadOpacity < 0.05}
			>
				<span className="text-[var(--hud)]">EN VIVO</span>
				<nav className="hidden gap-6 sm:flex">
					<a href="#mission" className="transition-colors hover:text-[var(--hud)]">
						MISIÓN
					</a>
					<a href="#partners" className="transition-colors hover:text-[var(--hud)]">
						PARTNERS
					</a>
					<a href="#events" className="transition-colors hover:text-[var(--hud)]">
						EVENTOS
					</a>
					<a href="#community" className="transition-colors hover:text-[var(--hud)]">
						COMUNIDAD
					</a>
				</nav>
				<span className="text-[var(--hud)]">EST. 1908</span>
			</header>
			<div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-black">
				{/* expanding feed */}
				<div
					className="relative overflow-hidden bg-black"
					style={{
						width: `${frameW}vw`,
						height: `${frameH}vh`,
						borderRadius: `${radius}px`,
						boxShadow: `0 0 0 1px rgba(120,200,160,${borderAlpha}), 0 40px 120px -20px rgba(0,0,0,0.9)`,
					}}
				>
					{/* ASCII layer (revealed beneath) */}
					<div className="absolute inset-0">
						<AsciiShader
							className="h-full w-full"
							variant={isMobile ? "mobile" : "desktop"}
						/>
					</div>

					{/* original high-res photograph fading out — portrait crop on mobile */}
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src={isMobile ? "/assets/images/mobile.webp" : "/assets/images/desktop.webp"}
						alt="Sepia photograph of two men beside a giant balanced boulder"
						className="absolute inset-0 h-full w-full object-cover"
						style={{ opacity: photoOpacity, objectPosition: "center center" }}
					/>

					{/* CCTV HUD with subject tracking */}
					<CctvHud
						time={time}
						opacity={hudOpacity}
						imageAspect={isMobile ? MOBILE_IMAGE_ASPECT : undefined}
						targets={isMobile ? MOBILE_TARGETS : undefined}
					/>

					{/* hero copy */}
					<div
						className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center"
						style={{
							opacity: heroIn,
							transform: `translateY(${(1 - heroIn) * 28}px)`,
						}}
					>
						<h1 className="mt-5 max-w-4xl text-balance font-sans text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
							HACKTANDIL
						</h1>
						<p className="mt-6 max-w-xl text-pretty font-sans text-sm leading-relaxed text-foreground/90 sm:text-base">
							La capa social de los que hacen tecnología en Tandil.
						</p>
						<div className="pointer-events-auto mt-9">
							<a
								href="#community"
								className="inline-flex items-center gap-2 border border-[var(--hud)] bg-[var(--hud)] px-7 py-3 font-mono text-xs font-semibold tracking-[0.2em] text-black transition-colors hover:bg-transparent hover:text-[var(--hud)]"
							>
								PARTICIPAR
								<span aria-hidden="true">→</span>
							</a>
						</div>
					</div>
				</div>

				{/* scroll hint */}
				<div
					className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] text-foreground/70"
					style={{ opacity: 1 - mapRange(progress, 0, 0.1) }}
				>
					SCROLL TO DECODE
				</div>
			</div>
		</section>
	);
}
