import { SurveillanceHero } from "@/components/surveillance-hero";
import Link from "next/link";

const PARTNERS = [
	{
		name: "Cursor Community",
		logo: "/assets/partners/CURSOR.svg",
		href: "https://cursor.com",
		category: "AI Developer Tooling & Event Collaborator",
	},
	{
		name: "Relaw",
		logo: "/assets/partners/RELAW.png",
		href: "https://relaw.io",
		category: "Legal Tech & Event Sponsor",
	},
	{
		name: "Nodo Serrano",
		logo: "/assets/partners/NODO SERRANO.png",
		href: "https://nodoserrano.org",
		category: "Innovation Hub & Community Venue",
	},
	{
		name: "The Red Guild",
		logo: "/assets/partners/THE RED GUILD.svg",
		href: "https://theredguild.org",
		category: "Cybersecurity Guild & Research Collective",
	},
	{
		name: "Cluster Tecnológico Tandil",
		logo: "/assets/partners/CLUSTER TANDIL.png",
		href: "https://www.clustertecnologicotandil.org.ar/",
		category: "Regional Tech Cluster & Institutional Partner",
	},
];

export default function Page() {
	return (
		<main className="bg-background text-foreground">
			<SurveillanceHero />

			{/* MISSION */}
			<section
				id="mission"
				className="border-t border-border px-6 py-24 sm:py-32"
				aria-labelledby="mission-title"
			>
				<div className="mx-auto max-w-5xl">
					<div className="flex items-baseline justify-between">
						<h2
							id="mission-title"
							className="font-mono text-2xl font-semibold tracking-tight sm:text-4xl"
						>
							MISIÓN // MANIFIESTO
						</h2>
						<span className="font-mono text-[11px] tracking-[0.3em] text-foreground/55">
							MANIFIESTO//01
						</span>
					</div>
					<div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
						{/* statement */}
						<div className="lg:col-span-5">
							<p className="text-balance font-sans text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl">
								Creamos la capa social para los que hacen tecnología en Tandil.
							</p>
							<div className="mt-8 flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] text-[var(--hud)]">
								<span className="h-px w-8 bg-[var(--hud)]" />
								POR QUÉ EXISTIMOS
							</div>
							<p className="mt-4 text-sm leading-relaxed text-foreground/75">
								Tandil cuenta con una gran comunidad y concentración de
								constructores de software. HackTandil articula a los
								desarrolladores, investigadores y creadores de tecnología.
							</p>
						</div>

						{/* beliefs */}
						<div className="grid gap-4 lg:col-span-7">
							<article className="border border-border bg-card/20 p-6 transition-colors hover:bg-card/60 sm:p-8">
								<div className="flex items-start gap-4">
									<span className="font-mono text-2xl font-semibold leading-none text-[var(--hud)]">
										01
									</span>
									<div>
										<h3 className="font-sans text-lg font-semibold text-foreground">
											Semillero de Talento
										</h3>
										<p className="mt-2 font-sans text-base leading-relaxed text-foreground/85">
											Tandil es un semillero de talento informático de clase
											mundial. Fomentamos un espacio común y continuo de
											convergencia para ese talento.
										</p>
									</div>
								</div>
							</article>

							<article className="border border-border bg-card/20 p-6 transition-colors hover:bg-card/60 sm:p-8">
								<div className="flex items-start gap-4">
									<span className="font-mono text-2xl font-semibold leading-none text-[var(--hud)]">
										02
									</span>
									<div>
										<h3 className="font-sans text-lg font-semibold text-foreground">
											Visibilidad Radical
										</h3>
										<p className="mt-2 font-sans text-base leading-relaxed text-foreground/85">
											En Tandil se crean proyectos de software, agentes de
											inteligencia artificial e infraestructuras increíbles que
											merecen visibilidad global y reconocimiento abierto.
										</p>
									</div>
								</div>
							</article>

							<article className="border border-border bg-card/20 p-6 transition-colors hover:bg-card/60 sm:p-8">
								<div className="flex items-start gap-4">
									<span className="font-mono text-2xl font-semibold leading-none text-[var(--hud)]">
										03
									</span>
									<div>
										<h3 className="font-sans text-lg font-semibold text-foreground">
											Potencial Emprendedor Global
										</h3>
										<p className="mt-2 font-sans text-base leading-relaxed text-foreground/85">
											Uniendo talento, visibilidad y colaboración técnica,
											Tandil tiene el potencial para engendrar la próxima
											generación de startups de software e IA con impacto
											global.
										</p>
									</div>
								</div>
							</article>
						</div>
					</div>
				</div>
			</section>

			{/* PARTNERS */}
			<section
				id="partners"
				className="border-t border-border px-6 py-24 sm:py-32"
				aria-labelledby="partners-title"
			>
				<div className="mx-auto max-w-5xl">
					<div className="flex items-baseline justify-between">
						<h2
							id="partners-title"
							className="font-mono text-2xl font-semibold tracking-tight sm:text-4xl"
						>
							PARTNERS & ECOSISTEMA
						</h2>
						<span className="font-mono text-[11px] tracking-[0.3em] text-foreground/55">
							RED // 02
						</span>
					</div>
					<p className="mt-4 max-w-2xl font-sans text-sm text-foreground/75">
						Colaboramos con organizaciones, hubs tecnológicos y empresas líderes
						para potenciar el desarrollo de software y la inteligencia
						artificial en Tandil.
					</p>
					<ul className="mt-12 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3">
						{PARTNERS.map((p, i) => (
							<li key={p.name} className="bg-background">
								<a
									href={p.href}
									target="_blank"
									rel="noreferrer"
									className="group relative flex h-48 flex-col items-center justify-center gap-4 bg-card/20 p-6 transition-colors hover:bg-card/60"
								>
									<span className="absolute left-4 top-4 font-mono text-[10px] tracking-[0.3em] text-foreground/55">
										{String(i + 1).padStart(2, "0")}
									</span>
									<span className="absolute right-4 top-4 font-mono text-[10px] tracking-[0.3em] text-[var(--hud)] opacity-0 transition-opacity group-hover:opacity-100">
										VISIT ↗
									</span>
									<span className="flex h-14 items-center justify-center">
										{/* eslint-disable-next-line @next/next/no-img-element */}
										<img
											src={p.logo}
											alt={`${p.name} logo`}
											className="h-full w-auto max-w-[180px] object-contain opacity-75 transition-opacity group-hover:opacity-100"
										/>
									</span>
									<div className="text-center">
										<h3 className="font-mono text-[11px] font-semibold tracking-[0.2em] text-foreground/85 transition-colors group-hover:text-foreground">
											{p.name.toUpperCase()}
										</h3>
										<p className="mt-1 text-[10px] text-foreground/50 line-clamp-1">
											{p.category}
										</p>
									</div>
								</a>
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* EVENTS */}
			<section
				id="events"
				className="border-t border-border px-6 py-24 sm:py-32"
				aria-labelledby="events-title"
			>
				<div className="mx-auto max-w-5xl">
					<div className="flex items-baseline justify-between">
						<h2
							id="events-title"
							className="font-mono text-2xl font-semibold tracking-tight sm:text-4xl"
						>
							PRÓXIMOS EVENTOS & HACKATHONS
						</h2>
						<span className="font-mono text-[11px] tracking-[0.3em] text-foreground/55">
							AGENDA // 03
						</span>
					</div>
					<div className="mt-4 max-w-2xl font-sans text-sm text-foreground/75">
						<h3 className="font-semibold text-foreground">
							Encuentros Presenciales, Charlas Técnicas y Talleres
						</h3>
						<p className="mt-1">
							Reuniones periódicas para programadores, fundadores y entusiastas
							de la tecnología en Tandil. Registrate gratis en cada fecha para
							reservar tu lugar.
						</p>
					</div>
					<div className="mt-10 border border-border bg-card p-2 sm:p-3">
						<iframe
							src="https://luma.com/embed/event/evt-8cRmZFracgvDkYc/simple"
							title="Próximo evento de HackTandil"
							className="h-[450px] w-full"
							frameBorder="0"
							style={{ border: "1px solid #bfcbda88", borderRadius: 4 }}
							allow="fullscreen; payment"
							allowFullScreen
							aria-hidden="false"
							tabIndex={0}
						/>
					</div>
					<div className="mt-6 flex justify-center">
						<a
							href="https://lu.ma/hacktandil"
							target="_blank"
							rel="noreferrer"
							className="font-mono text-xs text-[var(--hud)] hover:underline"
						>
							Ver Calendario Completo en Luma →
						</a>
					</div>
				</div>
			</section>

			{/* TANDIL BUILDER CULTURE */}
			<section
				id="tandil-context"
				className="border-t border-border px-6 py-24 sm:py-32 bg-card/10"
				aria-labelledby="tandil-context-title"
			>
				<div className="mx-auto max-w-5xl">
					<div className="flex items-baseline justify-between">
						<h2
							id="tandil-context-title"
							className="font-mono text-2xl font-semibold tracking-tight sm:text-4xl"
						>
							CULTURA BUILDER // TANDIL
						</h2>
						<span className="font-mono text-[11px] tracking-[0.3em] text-foreground/55">
							CONTEXTO // 04
						</span>
					</div>
					<div className="mt-8 grid gap-8 md:grid-cols-2">
						<div>
							<h3 className="font-sans text-xl font-bold text-foreground">
								Desarrollo de Software en las Sierras
							</h3>
							<p className="mt-3 text-sm leading-relaxed text-foreground/80">
								Tandil cuenta con una vibrante comunidad de desarrolladores,
								diseñadores e ingenieros de software que eligen construir
								tecnología de alto impacto y productos digitales globales.
							</p>
						</div>
						<div>
							<h3 className="font-sans text-xl font-bold text-foreground">
								Comunidad Abierta y Descentralizada
							</h3>
							<p className="mt-3 text-sm leading-relaxed text-foreground/80">
								HackTandil aporta el espacio neutral y comunitario donde
								convergen las nuevas generaciones de builders para compartir
								ideas, código y aprendizajes de forma abierta.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* COMMUNITY */}
			<section
				id="community"
				className="border-t border-border px-6 py-24 sm:py-32"
				aria-labelledby="community-title"
			>
				<div className="mx-auto max-w-3xl text-center">
					<span className="font-mono text-[11px] tracking-[0.3em] text-[var(--hud)]">
						SUMATE A LA COMUNIDAD
					</span>
					<h2
						id="community-title"
						className="mt-5 text-balance font-sans text-3xl font-semibold leading-tight tracking-tight sm:text-5xl"
					>
						No construyas solo.
					</h2>
					<h3 className="mt-4 text-balance font-sans text-lg text-foreground/80">
						Unite a la red de desarrolladores y creadores de software en Tandil.
					</h3>
					<p className="mt-4 text-pretty font-sans leading-relaxed text-foreground/80">
						Registrate en nuestros eventos y seguinos en redes para enterarte de
						cada encuentro, charla y proyecto de la comunidad en Tandil.
					</p>
					<div className="mt-10 flex justify-center">
						<a
							href="https://lu.ma/hacktandil"
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-2 border border-[var(--hud)] bg-[var(--hud)] px-7 py-3 font-mono text-xs font-semibold tracking-[0.2em] text-black transition-colors hover:bg-transparent hover:text-[var(--hud)]"
						>
							CALENDARIO DE EVENTOS
							<span aria-hidden="true">→</span>
						</a>
					</div>
					<ul className="mx-auto mt-8 flex max-w-md flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-[11px] tracking-[0.25em] text-foreground/75">
						<li>
							<a
								href="https://platform.hacktandil.org"
								target="_blank"
								rel="noreferrer"
								className="transition-colors hover:text-[var(--hud)]"
							>
								PLATAFORMA (BETA) ↗
							</a>
						</li>
						<li>
							<a
								href="https://instagram.com/hacktandil"
								target="_blank"
								rel="noreferrer"
								className="transition-colors hover:text-[var(--hud)]"
							>
								INSTAGRAM ↗
							</a>
						</li>
						<li>
							<a
								href="https://x.com/hacktandil"
								target="_blank"
								rel="noreferrer"
								className="transition-colors hover:text-[var(--hud)]"
							>
								X ↗
							</a>
						</li>
						<li>
							<a
								href="mailto:contacto@hacktandil.org"
								className="transition-colors hover:text-[var(--hud)]"
							>
								EMAIL ↗
							</a>
						</li>
					</ul>
				</div>
			</section>

			{/* FOOTER DIRECTORY & TRUST LINKS */}
			<footer className="border-t border-border px-6 py-12 font-mono text-[10px] tracking-[0.3em] text-foreground/60">
				<div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
					<nav className="flex flex-wrap justify-center gap-6 text-[11px] text-foreground/80">
						<Link
							href="/about"
							className="transition-colors hover:text-[var(--hud)]"
						>
							SOBRE NOSOTROS
						</Link>
						<Link
							href="/contact"
							className="transition-colors hover:text-[var(--hud)]"
						>
							CONTACTO
						</Link>
						<Link
							href="/privacy"
							className="transition-colors hover:text-[var(--hud)]"
						>
							PRIVACIDAD
						</Link>
						<Link
							href="/sitemap.xml"
							className="transition-colors hover:text-[var(--hud)]"
						>
							SITEMAP
						</Link>
						<a
							href="/llms.txt"
							className="transition-colors hover:text-[var(--hud)]"
						>
							LLMS.TXT
						</a>
						<a
							href="/agents.md"
							className="transition-colors hover:text-[var(--hud)]"
						>
							AGENTS.MD
						</a>
					</nav>
					<div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-5">
						<span className="text-foreground/75">© 2026 HACKTANDIL</span>
						<span className="hidden text-foreground/30 sm:inline">/</span>
						<span>TANDIL, BUENOS AIRES, ARGENTINA</span>
						<span className="hidden text-foreground/30 sm:inline">/</span>
						<span>TODOS LOS DERECHOS RESERVADOS</span>
					</div>
					<p className="max-w-xl text-pretty leading-relaxed tracking-[0.2em] text-foreground/45">
						Las marcas, logos y nombres de los partners son propiedad de sus
						respectivos dueños y se muestran solo con fines de atribución.
					</p>
				</div>
			</footer>
		</main>
	);
}
