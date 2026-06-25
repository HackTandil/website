import { SurveillanceHero } from "@/components/surveillance-hero";

const PARTNERS = [
	{
		name: "Cursor Community",
		logo: "/assets/partners/CURSOR.svg",
		href: "https://cursor.com",
	},
	{
		name: "Relaw",
		logo: "/assets/partners/RELAW.png",
		href: "https://relaw.io",
	},
	{
		name: "Nodo Serrano",
		logo: "/assets/partners/NODO SERRANO.png",
		href: "https://nodoserrano.org",
	},
	{
		name: "The Red Guild",
		logo: "/assets/partners/THE RED GUILD.svg",
		href: "https://theredguild.org",
	},
	{
		name: "Cluster Tecnologico Tandil",
		logo: "/assets/partners/CLUSTER TANDIL.png",
		href: "https://www.clustertecnologicotandil.org.ar/",
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
			>
				<div className="mx-auto max-w-5xl">
					<div className="flex items-baseline justify-between">
						<h2 className="font-mono text-2xl font-semibold tracking-tight sm:text-4xl">
							MISSION
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
								PORQUE CREEMOS
							</div>
						</div>

						{/* beliefs */}
						<ul className="grid gap-px border border-border bg-border lg:col-span-7">
							{[
								"Que Tandil es un semillero de talento y falta un espacio común para ese talento.",
								"Que Tandil tiene proyectos increíbles que no tienen la suficiente visibilidad.",
								"Que si resolvemos esos puntos Tandil tiene un potencial emprendedor de clase mundial.",
							].map((belief, i) => (
								<li
									key={i}
									className="flex items-start gap-5 bg-card/20 p-6 transition-colors hover:bg-card/60 sm:p-8"
								>
									<span className="font-mono text-2xl font-semibold leading-none text-[var(--hud)]">
										{String(i + 1).padStart(2, "0")}
									</span>
									<p className="font-sans text-lg leading-relaxed text-foreground/90 sm:text-xl">
										{belief}
									</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			{/* PARTNERS */}
			<section
				id="partners"
				className="border-t border-border px-6 py-24 sm:py-32"
			>
				<div className="mx-auto max-w-5xl">
					<div className="flex items-baseline justify-between">
						<h2 className="font-mono text-2xl font-semibold tracking-tight sm:text-4xl">
							PARTNERS
						</h2>
					</div>
					<ul className="mt-12 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3">
						{PARTNERS.map((p, i) => (
							<li key={p.name} className="bg-background">
								<a
									href={p.href}
									target="_blank"
									rel="noreferrer"
									className="group relative flex h-48 flex-col items-center justify-center gap-6 bg-card/20 p-6 transition-colors hover:bg-card/60"
								>
									<span className="absolute left-4 top-4 font-mono text-[10px] tracking-[0.3em] text-foreground/55">
										{String(i + 1).padStart(2, "0")}
									</span>
									<span className="absolute right-4 top-4 font-mono text-[10px] tracking-[0.3em] text-[var(--hud)] opacity-0 transition-opacity group-hover:opacity-100">
										VISIT ↗
									</span>
									<span className="flex h-16 items-center justify-center">
										{/* eslint-disable-next-line @next/next/no-img-element */}
										<img
											src={p.logo}
											alt={`${p.name} logo`}
											className="h-full w-auto max-w-[200px] object-contain opacity-75 transition-opacity group-hover:opacity-100"
										/>
									</span>
									<span className="font-mono text-[11px] tracking-[0.25em] text-foreground/75 transition-colors group-hover:text-foreground">
										{p.name.toUpperCase()}
									</span>
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
			>
				<div className="mx-auto max-w-5xl">
					<div className="flex items-baseline justify-between">
						<h2 className="font-mono text-2xl font-semibold tracking-tight sm:text-4xl">
							FUTURE EVENTS
						</h2>
					</div>
					<div className="mt-12 border border-border bg-card p-2 sm:p-3">
						<iframe
							src="https://luma.com/embed/event/evt-8cRmZFracgvDkYc/simple"
							title="Próximo evento"
							className="h-[450px] w-full"
							frameBorder="0"
							style={{ border: "1px solid #bfcbda88", borderRadius: 4 }}
							allow="fullscreen; payment"
							allowFullScreen
							aria-hidden="false"
							tabIndex={0}
						/>
					</div>
				</div>
			</section>

			{/* COMMUNITY */}
			<section
				id="community"
				className="border-t border-border px-6 py-24 sm:py-32"
			>
				<div className="mx-auto max-w-3xl text-center">
					<span className="font-mono text-[11px] tracking-[0.3em] text-[var(--hud)]">
						SUMATE
					</span>
					<h2 className="mt-5 text-balance font-sans text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
						No construyas solo.
					</h2>
					<p className="mt-6 text-pretty font-sans leading-relaxed text-foreground/90">
						Registrate en nuestros eventos y seguinos en redes para enterarte de
						cada encuentro, charla y proyecto de la comunidad en Tandil.
					</p>
					<div className="mt-10 flex justify-center">
						<a
							href="https://luma.com/hacktandil"
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

			<footer className="border-t border-border px-6 py-10 font-mono text-[10px] tracking-[0.3em] text-foreground/60">
				<div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
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
