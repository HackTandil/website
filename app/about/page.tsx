import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Sobre Nosotros // About — HackTandil",
	description:
		"Conocé la historia, misión, principios y visión de HackTandil. La comunidad tecnológica que crea la capa social para los constructores de software en Tandil, Argentina.",
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
		"Historia, misión y principios de HackTandil, la comunidad tecnológica de Tandil, Argentina.",
	mainEntity: {
		"@type": "Organization",
		name: "Hacktandil",
		url: "https://hacktandil.org",
		description:
			"Comunidad tecnológica y hub de software de Tandil, Buenos Aires, Argentina. Ecosistema CEPIT y Cluster Tecnológico Tandil.",
		address: {
			"@type": "PostalAddress",
			streetAddress: "Cluster Tecnológico Tandil",
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
						DOC // 001 — ORIGEN & MANIFIESTO
					</span>
					<h1 className="mt-4 font-sans text-4xl font-bold tracking-tight sm:text-5xl">
						Sobre HackTandil
					</h1>
					<p className="mt-4 font-mono text-sm tracking-wide text-foreground/70">
						La capa social e institucional de los que crean software y
						tecnología en las sierras de Tandil.
					</p>
				</div>

				<article className="prose prose-invert mt-12 space-y-12 leading-relaxed text-foreground/90">
					{/* Section 1: Mission */}
					<section>
						<h2 className="font-sans text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
							1. Nuestra Misión
						</h2>
						<p className="mt-4 text-lg text-foreground/85">
							HackTandil nace con una convicción clara:{" "}
							<strong>
								crear la capa social para los que hacen tecnología en Tandil
							</strong>
							. Durante décadas, Tandil se ha consolidado como un polo
							educativo y tecnológico sobresaliente en Argentina y la región,
							impulsado por la Universidad Nacional del Centro de la Provincia de
							Buenos Aires (UNICEN) y el ecosistema empresarial de la CEPIT. Sin
							embargo, existía una desconexión entre los constructores
							independientes, estudiantes, investigadores y equipos de
							innovación.
						</p>
						<p className="mt-4 text-foreground/85">
							Proveer un espacio común, neutral y abierto donde el talento
							tecnológico local pueda encontrarse, compartir conocimientos
							avanzados de ingeniería, colaborar en proyectos de código abierto
							y construir startups globales desde el interior de la provincia de
							Buenos Aires.
						</p>
					</section>

					{/* Section 2: Core Beliefs */}
					<section className="border-t border-border pt-10">
						<h2 className="font-sans text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
							2. Nuestros Principios Fundamentales
						</h2>
						<div className="mt-6 grid gap-6 sm:grid-cols-3">
							<div className="border border-border bg-card/30 p-6">
								<span className="font-mono text-xl font-bold text-[var(--hud)]">
									01
								</span>
								<h3 className="mt-3 font-sans text-lg font-semibold text-foreground">
									Semillero de Talento
								</h3>
								<p className="mt-2 text-sm text-foreground/75">
									Tandil cuenta con densidad de talento informático de nivel
									internacional. Fomentamos el encuentro continuo para
									multiplicar ese potencial.
								</p>
							</div>
							<div className="border border-border bg-card/30 p-6">
								<span className="font-mono text-xl font-bold text-[var(--hud)]">
									02
								</span>
								<h3 className="mt-3 font-sans text-lg font-semibold text-foreground">
									Visibilidad Radical
								</h3>
								<p className="mt-2 text-sm text-foreground/75">
									Damos luz y difusión a proyectos de software, agentes de
									inteligencia artificial, infraestructura e innovaciones
									creadas en Tandil.
								</p>
							</div>
							<div className="border border-border bg-card/30 p-6">
								<span className="font-mono text-xl font-bold text-[var(--hud)]">
									03
								</span>
								<h3 className="mt-3 font-sans text-lg font-semibold text-foreground">
									Ambición Global
								</h3>
								<p className="mt-2 text-sm text-foreground/75">
									Construimos desde Tandil para el mundo. Creemos que la
									próxima generación de startups globales se gesta en
									comunidades descentralizadas.
								</p>
							</div>
						</div>
					</section>

					{/* Section 3: Activities & Formats */}
					<section className="border-t border-border pt-10">
						<h2 className="font-sans text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
							3. Qué Hacemos: Iniciativas y Formatos
						</h2>
						<p className="mt-4 text-foreground/85">
							Organizamos encuentros periódicos, presenciales y remotos,
							diseñados para constructores activos:
						</p>
						<ul className="mt-6 space-y-4 font-sans text-foreground/85">
							<li className="flex items-start gap-3">
								<span className="font-mono text-[var(--hud)]">›</span>
								<div>
									<strong className="text-foreground">
										Meetups y Demos Técnicas:
									</strong>{" "}
									Espacios donde desarrolladores muestran código real,
									arquitecturas de sistemas, implementaciones de LLMs y
									lecciones aprendidas en producción.
								</div>
							</li>
							<li className="flex items-start gap-3">
								<span className="font-mono text-[var(--hud)]">›</span>
								<div>
									<strong className="text-foreground">
										Hackathons & Buildathons:
									</strong>{" "}
									Jornadas intensivas de prototipado donde equipos
									multidisciplinarios crean soluciones funcionales en 24 a 48
									horas.
								</div>
							</li>
							<li className="flex items-start gap-3">
								<span className="font-mono text-[var(--hud)]">›</span>
								<div>
									<strong className="text-foreground">
										Plataforma Digital Builder:
									</strong>{" "}
									Un espacio digital (en fase beta) para que los miembros de la
									comunidad mantengan sus perfiles, proyectos y descubran
									colaboradores locales.
								</div>
							</li>
							<li className="flex items-start gap-3">
								<span className="font-mono text-[var(--hud)]">›</span>
								<div>
									<strong className="text-foreground">
										Vinculación con el Ecosistema:
									</strong>{" "}
									Puente directo con la Cámara de Empresas del Polo
									Informático de Tandil (CEPIT), el Cluster Tecnológico Tandil,
									la UNICEN y empresas líderes.
								</div>
							</li>
						</ul>
					</section>

					{/* Section 4: Ecosystem & Partners */}
					<section className="border-t border-border pt-10">
						<h2 className="font-sans text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
							4. Ecosistema y Aliados
						</h2>
						<p className="mt-4 text-foreground/85">
							HackTandil trabaja en estrecha colaboración con iniciativas de
							primer nivel en Argentina y a nivel global:
						</p>
						<div className="mt-6 grid gap-4 sm:grid-cols-2 font-mono text-xs">
							<div className="border border-border p-4 bg-card/20">
								<span className="text-[var(--hud)]">CURSOR COMMUNITY</span>
								<p className="mt-2 font-sans text-sm text-foreground/80">
									Colaborador en eventos de programación asistida por IA y
									adopción de nuevas herramientas para builders.
								</p>
							</div>
							<div className="border border-border p-4 bg-card/20">
								<span className="text-[var(--hud)]">RELAW</span>
								<p className="mt-2 font-sans text-sm text-foreground/80">
									Sponsor de eventos y facilitador de asesoramiento legal para
									startups y emprendedores tecnológicos.
								</p>
							</div>
							<div className="border border-border p-4 bg-card/20">
								<span className="text-[var(--hud)]">NODO SERRANO</span>
								<p className="mt-2 font-sans text-sm text-foreground/80">
									Espacio físico y hub de innovación que actúa como sede y
									venue para encuentros de la comunidad.
								</p>
							</div>
							<div className="border border-border p-4 bg-card/20">
								<span className="text-[var(--hud)]">THE RED GUILD</span>
								<p className="mt-2 font-sans text-sm text-foreground/80">
									Comunidad de investigación en ciberseguridad y seguridad de
									software descentralizado.
								</p>
							</div>
							<div className="border border-border p-4 bg-card/20 sm:col-span-2">
								<span className="text-[var(--hud)]">
									CLUSTER TECNOLÓGICO TANDIL & CEPIT
								</span>
								<p className="mt-2 font-sans text-sm text-foreground/80">
									Instituciones históricas del polo informático de Tandil que
									respaldan el desarrollo tecnológico local.
								</p>
							</div>
						</div>
					</section>

					{/* Section 5: Leadership */}
					<section className="border-t border-border pt-10">
						<h2 className="font-sans text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
							5. Organización y Contacto
						</h2>
						<p className="mt-4 text-foreground/85">
							HackTandil es una organización impulsada por la comunidad. Los
							organizadores principales son Dante y Tadeo, junto con una red de
							mentores, speakers y voluntarios.
						</p>
						<div className="mt-6 flex flex-wrap gap-4 font-mono text-xs">
							<a
								href="mailto:contacto@hacktandil.org"
								className="border border-[var(--hud)] bg-[var(--hud)] px-5 py-2.5 font-semibold text-black hover:bg-transparent hover:text-[var(--hud)] transition-colors"
							>
								CONTACTAR ORGANIZACIÓN
							</a>
							<Link
								href="/contact"
								className="border border-border px-5 py-2.5 text-foreground hover:border-[var(--hud)] hover:text-[var(--hud)] transition-colors"
							>
								VER DIRECTORIO COMPLETO →
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
