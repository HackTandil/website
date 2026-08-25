import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Sobre Nosotros // About — HackTandil",
	description:
		"Misión, principios y comunidad de HackTandil. La capa social para desarrolladores, creadores y constructores de software en Tandil, Argentina.",
	alternates: {
		canonical: "/about",
	},
};

const aboutJsonLd = {
	"@context": "https://schema.org",
	"@type": "AboutPage",
	name: "Sobre HackTandil",
	url: "https://hacktandil.org/about",
	description:
		"Misión, principios e iniciativas de HackTandil, comunidad independiente de constructores de software en Tandil, Argentina.",
	mainEntity: {
		"@type": "Organization",
		name: "Hacktandil",
		url: "https://hacktandil.org",
		description:
			"Comunidad independiente de desarrollo de software, inteligencia artificial y tecnología en Tandil, Buenos Aires, Argentina.",
		address: {
			"@type": "PostalAddress",
			addressLocality: "Tandil",
			addressRegion: "Buenos Aires",
			postalCode: "B7000",
			addressCountry: "AR",
		},
		contactPoint: [
			{
				"@type": "ContactPoint",
				contactType: "Community Support",
				email: "contacto@hacktandil.org",
				availableLanguage: ["es", "en"],
			},
		],
	},
};

export default function AboutPage() {
	return (
		<main className="min-h-screen bg-background text-foreground">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
			/>

			{/* Masthead Header */}
			<header className="border-b border-border px-6 py-4 font-mono text-[11px] tracking-[0.25em] text-foreground/80">
				<div className="mx-auto flex max-w-5xl items-center justify-between">
					<Link href="/" className="transition-colors hover:text-[var(--hud)]">
						← HACKTANDIL // HOME
					</Link>
					<nav className="flex gap-6">
						<Link href="/about" className="text-[var(--hud)]">
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
					</nav>
				</div>
			</header>

			<div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
				{/* Title Section */}
				<div className="border-b border-border pb-10">
					<span className="font-mono text-[11px] tracking-[0.3em] text-[var(--hud)]">
						DOC // 001 — MANIFIESTO
					</span>
					<h1 className="mt-4 font-sans text-4xl font-bold tracking-tight sm:text-5xl">
						Sobre HackTandil
					</h1>
					<p className="mt-4 font-mono text-sm tracking-wide text-foreground/70">
						La capa social para los que hacen tecnología y construyen software
						en Tandil.
					</p>
				</div>

				<article className="mt-12 space-y-12 leading-relaxed text-foreground/90 font-sans">
					{/* Section 1: Mission */}
					<section>
						<h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
							1. Manifiesto y Misión
						</h2>
						<p className="mt-4 text-lg text-foreground/85">
							HackTandil nace con un propósito directo:{" "}
							<strong>
								crear la capa social para los que hacen tecnología en Tandil
							</strong>
							.
						</p>
						<p className="mt-4 text-foreground/85">
							Somos una comunidad abierta, independiente y descentralizada de
							desarrolladores, investigadores, diseñadores y creadores de
							software. Existimos para conectar a quienes construyen proyectos,
							compartir conocimiento técnico real sin intermediarios y potenciar
							el trabajo colaborativo desde Tandil hacia el mundo.
						</p>
					</section>

					{/* Section 2: Core Beliefs */}
					<section className="border-t border-border pt-10">
						<h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
							2. Principios
						</h2>
						<div className="mt-6 grid gap-6 sm:grid-cols-3">
							<div className="border border-border bg-card/30 p-6">
								<span className="font-mono text-xl font-bold text-[var(--hud)]">
									01
								</span>
								<h3 className="mt-3 font-sans text-lg font-semibold text-foreground">
									Talento en Común
								</h3>
								<p className="mt-2 text-sm text-foreground/75">
									Tandil es un semillero de talento técnico sobresaliente.
									Generamos el punto de encuentro natural para que ese talento
									se conozca y colabore.
								</p>
							</div>
							<div className="border border-border bg-card/30 p-6">
								<span className="font-mono text-xl font-bold text-[var(--hud)]">
									02
								</span>
								<h3 className="mt-3 font-sans text-lg font-semibold text-foreground">
									Visibilidad
								</h3>
								<p className="mt-2 text-sm text-foreground/75">
									Proyectos de software, modelos de inteligencia artificial y
									herramientas de alto nivel nacen en Tandil. Les damos
									visibilidad y difusión abierta.
								</p>
							</div>
							<div className="border border-border bg-card/30 p-6">
								<span className="font-mono text-xl font-bold text-[var(--hud)]">
									03
								</span>
								<h3 className="mt-3 font-sans text-lg font-semibold text-foreground">
									Construcción Global
								</h3>
								<p className="mt-2 text-sm text-foreground/75">
									Creemos en el potencial emprendedor y técnico de clase mundial.
									Construimos soluciones con estándar internacional desde
									nuestra ciudad.
								</p>
							</div>
						</div>
					</section>

					{/* Section 3: Activities & Formats */}
					<section className="border-t border-border pt-10">
						<h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
							3. Qué Hacemos
						</h2>
						<p className="mt-4 text-foreground/85">
							Nuestras actividades están centradas en la práctica y la creación:
						</p>
						<ul className="mt-6 space-y-4 text-foreground/85">
							<li className="flex items-start gap-3">
								<span className="font-mono text-[var(--hud)]">›</span>
								<div>
									<strong className="text-foreground">
										Meetups y Demos Técnicas:
									</strong>{" "}
									Presentaciones sobre arquitecturas, sistemas distribuidos,
									inteligencia artificial y código en producción.
								</div>
							</li>
							<li className="flex items-start gap-3">
								<span className="font-mono text-[var(--hud)]">›</span>
								<div>
									<strong className="text-foreground">
										Hackathons & Buildathons:
									</strong>{" "}
									Jornadas de prototipado rápido donde programadores y
									creadores materializan ideas en prototipos funcionales.
								</div>
							</li>
							<li className="flex items-start gap-3">
								<span className="font-mono text-[var(--hud)]">›</span>
								<div>
									<strong className="text-foreground">
										Plataforma Builder (Beta):
									</strong>{" "}
									Espacio propio para perfiles de desarrolladores, registro de
									proyectos y búsqueda de colaboradores en Tandil.
								</div>
							</li>
						</ul>
					</section>

					{/* Section 4: Collaborators */}
					<section className="border-t border-border pt-10">
						<h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
							4. Colaboradores y Amigos
						</h2>
						<p className="mt-4 text-foreground/85">
							Comunidades, empresas y espacios que han colaborado o apoyado
							iniciativas de HackTandil:
						</p>
						<div className="mt-6 grid gap-4 sm:grid-cols-2 font-mono text-xs">
							<div className="border border-border p-4 bg-card/20">
								<span className="text-[var(--hud)]">CURSOR COMMUNITY</span>
								<p className="mt-2 font-sans text-sm text-foreground/80">
									Colaborador en eventos de desarrollo asistido por IA.
								</p>
							</div>
							<div className="border border-border p-4 bg-card/20">
								<span className="text-[var(--hud)]">RELAW</span>
								<p className="mt-2 font-sans text-sm text-foreground/80">
									Sponsor y facilitador legal tech para proyectos.
								</p>
							</div>
							<div className="border border-border p-4 bg-card/20">
								<span className="text-[var(--hud)]">NODO SERRANO</span>
								<p className="mt-2 font-sans text-sm text-foreground/80">
									Hub y espacio de encuentro para builders locales.
								</p>
							</div>
							<div className="border border-border p-4 bg-card/20">
								<span className="text-[var(--hud)]">THE RED GUILD</span>
								<p className="mt-2 font-sans text-sm text-foreground/80">
									Comunidad de investigación en seguridad y software.
								</p>
							</div>
						</div>
					</section>

					{/* Section 5: Team & Contact */}
					<section className="border-t border-border pt-10">
						<h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
							5. Organización
						</h2>
						<p className="mt-4 text-foreground/85">
							Iniciativa impulsada por Dante y Tadeo junto con la comunidad de
							builders de Tandil.
						</p>
						<div className="mt-6 flex flex-wrap gap-4 font-mono text-xs">
							<a
								href="mailto:contacto@hacktandil.org"
								className="border border-[var(--hud)] bg-[var(--hud)] px-5 py-2.5 font-semibold text-black hover:bg-transparent hover:text-[var(--hud)] transition-colors"
							>
								ENVIAR UN MENSAJE
							</a>
							<Link
								href="/contact"
								className="border border-border px-5 py-2.5 text-foreground hover:border-[var(--hud)] hover:text-[var(--hud)] transition-colors"
							>
								DIRECTORIO DE CONTACTO →
							</Link>
						</div>
					</section>
				</article>
			</div>

			<footer className="border-t border-border px-6 py-8 font-mono text-[10px] tracking-[0.3em] text-foreground/60">
				<div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
					<span>© 2026 HACKTANDIL // TANDIL, BUENOS AIRES, ARGENTINA</span>
					<div className="flex gap-6">
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
					</div>
				</div>
			</footer>
		</main>
	);
}
