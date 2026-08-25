import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Contacto // Directory & Inquiries — HackTandil",
	description:
		"Canales oficiales de contacto, directorio de organizadores, enlaces de soporte, propuestas de sponsorship y ubicación de HackTandil en Tandil, Argentina.",
	alternates: {
		canonical: "/contact",
	},
};

const contactJsonLd = {
	"@context": "https://schema.org",
	"@type": "ContactPage",
	name: "Contacto HackTandil",
	url: "https://hacktandil.org/contact",
	description:
		"Directorio de contacto oficial y canales de comunicación de la comunidad HackTandil en Tandil, Argentina.",
	mainEntity: {
		"@type": "Organization",
		name: "Hacktandil",
		url: "https://hacktandil.org",
		email: "contacto@hacktandil.org",
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
				contactType: "General & Community Support",
				email: "contacto@hacktandil.org",
				availableLanguage: ["es", "en"],
				areaServed: "AR",
			},
			{
				"@type": "ContactPoint",
				contactType: "Partnerships & Sponsorships",
				email: "contacto@hacktandil.org",
				availableLanguage: ["es", "en"],
			},
		],
	},
};

export default function ContactPage() {
	return (
		<main className="min-h-screen bg-background text-foreground">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
			/>

			{/* Masthead Header */}
			<header className="border-b border-border px-6 py-4 font-mono text-[11px] tracking-[0.25em] text-foreground/80">
				<div className="mx-auto flex max-w-5xl items-center justify-between">
					<Link href="/" className="transition-colors hover:text-[var(--hud)]">
						← HACKTANDIL // HOME
					</Link>
					<nav className="flex gap-6">
						<Link
							href="/about"
							className="transition-colors hover:text-[var(--hud)]"
						>
							SOBRE NOSOTROS
						</Link>
						<Link href="/contact" className="text-[var(--hud)]">
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
						DOC // 002 — CANALES DE COMUNICACIÓN
					</span>
					<h1 className="mt-4 font-sans text-4xl font-bold tracking-tight sm:text-5xl">
						Directorio de Contacto
					</h1>
					<p className="mt-4 font-mono text-sm tracking-wide text-foreground/70">
						Escribinos para proponer charlas, sumar tu empresa como sponsor,
						colaborar en proyectos o unirte al equipo organizador.
					</p>
				</div>

				<div className="mt-12 space-y-12 leading-relaxed text-foreground/90">
					{/* Section 1: Official Channels */}
					<section>
						<h2 className="font-sans text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
							1. Canales Oficiales de Email
						</h2>
						<p className="mt-3 text-foreground/85">
							Respondemos todas las consultas en un plazo habitual de 24 a 48
							horas hábiles.
						</p>

						<div className="mt-6 grid gap-4 sm:grid-cols-2 font-mono text-xs">
							<div className="border border-border bg-card/30 p-6">
								<span className="text-[var(--hud)] tracking-widest font-semibold">
									CONSULTAS GENERALES & PROPUESTAS
								</span>
								<h3 className="mt-3 font-sans text-xl font-bold text-foreground">
									contacto@hacktandil.org
								</h3>
								<p className="mt-2 font-sans text-sm text-foreground/75">
									Canal unificado para información general, alianzas
									institucionales, prensa y consultas de la comunidad.
								</p>
								<a
									href="mailto:contacto@hacktandil.org?subject=Consulta%20General%20HackTandil"
									className="mt-4 inline-block text-[var(--hud)] hover:underline"
								>
									Enviar Email →
								</a>
							</div>

							<div className="border border-border bg-card/30 p-6">
								<span className="text-[var(--hud)] tracking-widest font-semibold">
									SPONSORSHIP & PARTNERSHIPS
								</span>
								<h3 className="mt-3 font-sans text-xl font-bold text-foreground">
									contacto@hacktandil.org
								</h3>
								<p className="mt-2 font-sans text-sm text-foreground/75">
									Si tu empresa desea auspiciar un hackathon o encuentro tech,
									contactanos para conocer nuestras opciones de sponsoreo.
								</p>
								<a
									href="mailto:contacto@hacktandil.org?subject=Propuesta%20de%20Sponsorship%20HackTandil"
									className="mt-4 inline-block text-[var(--hud)] hover:underline"
								>
									Proponer Sponsorship →
								</a>
							</div>
						</div>
					</section>

					{/* Section 2: Core Team Contacts */}
					<section className="border-t border-border pt-10">
						<h2 className="font-sans text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
							2. Organizadores Principales
						</h2>
						<p className="mt-3 text-foreground/85">
							Podés ponerte en contacto directo con los impulsores de la
							iniciativa:
						</p>

						<div className="mt-6 grid gap-4 sm:grid-cols-2 font-mono text-xs">
							<div className="border border-border p-5 bg-card/20">
								<span className="text-[var(--hud)]">CO-FOUNDER & ORGANIZER</span>
								<h3 className="mt-2 font-sans text-lg font-bold text-foreground">
									Dante
								</h3>
								<a
									href="mailto:dante@hacktandil.org"
									className="mt-1 block text-foreground/80 hover:text-[var(--hud)]"
								>
									dante@hacktandil.org
								</a>
							</div>
							<div className="border border-border p-5 bg-card/20">
								<span className="text-[var(--hud)]">CO-FOUNDER & ORGANIZER</span>
								<h3 className="mt-2 font-sans text-lg font-bold text-foreground">
									Tadeo
								</h3>
								<a
									href="mailto:tadeo@hacktandil.org"
									className="mt-1 block text-foreground/80 hover:text-[var(--hud)]"
								>
									tadeo@hacktandil.org
								</a>
							</div>
						</div>
					</section>

					{/* Section 3: Community & Social Links */}
					<section className="border-t border-border pt-10">
						<h2 className="font-sans text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
							3. Plataformas y Redes Sociales
						</h2>
						<div className="mt-6 border border-border">
							<div className="grid divide-y divide-border font-mono text-xs">
								<div className="flex flex-col justify-between p-4 sm:flex-row sm:items-center">
									<div>
										<span className="font-semibold text-foreground">
											CALENDARIO & EVENTOS (LUMA)
										</span>
										<p className="font-sans text-sm text-foreground/75">
											Registrate gratis a los próximos meetups y hackathons.
										</p>
									</div>
									<a
										href="https://lu.ma/hacktandil"
										target="_blank"
										rel="noreferrer"
										className="mt-2 text-[var(--hud)] hover:underline sm:mt-0"
									>
										lu.ma/hacktandil ↗
									</a>
								</div>

								<div className="flex flex-col justify-between p-4 sm:flex-row sm:items-center">
									<div>
										<span className="font-semibold text-foreground">
											PLATAFORMA BUILDER (BETA)
										</span>
										<p className="font-sans text-sm text-foreground/75">
											Plataforma propia para perfiles de desarrolladores y
											proyectos locales.
										</p>
									</div>
									<a
										href="https://platform.hacktandil.org"
										target="_blank"
										rel="noreferrer"
										className="mt-2 text-[var(--hud)] hover:underline sm:mt-0"
									>
										platform.hacktandil.org ↗
									</a>
								</div>

								<div className="flex flex-col justify-between p-4 sm:flex-row sm:items-center">
									<div>
										<span className="font-semibold text-foreground">
											GITHUB ORGANIZACIÓN
										</span>
										<p className="font-sans text-sm text-foreground/75">
											Repositorios de código abierto, herramientas y sitios de la
											comunidad.
										</p>
									</div>
									<a
										href="https://github.com/hacktandil"
										target="_blank"
										rel="noreferrer"
										className="mt-2 text-[var(--hud)] hover:underline sm:mt-0"
									>
										github.com/hacktandil ↗
									</a>
								</div>

								<div className="flex flex-col justify-between p-4 sm:flex-row sm:items-center">
									<div>
										<span className="font-semibold text-foreground">
											X (TWITTER)
										</span>
										<p className="font-sans text-sm text-foreground/75">
											Anuncios en tiempo real, hilos técnicos y novedades.
										</p>
									</div>
									<a
										href="https://x.com/hacktandil"
										target="_blank"
										rel="noreferrer"
										className="mt-2 text-[var(--hud)] hover:underline sm:mt-0"
									>
										x.com/hacktandil ↗
									</a>
								</div>

								<div className="flex flex-col justify-between p-4 sm:flex-row sm:items-center">
									<div>
										<span className="font-semibold text-foreground">
											INSTAGRAM
										</span>
										<p className="font-sans text-sm text-foreground/75">
											Fotos, resúmenes de eventos y cobertura visual de los
											encuentros.
										</p>
									</div>
									<a
										href="https://instagram.com/hacktandil"
										target="_blank"
										rel="noreferrer"
										className="mt-2 text-[var(--hud)] hover:underline sm:mt-0"
									>
										instagram.com/hacktandil ↗
									</a>
								</div>
							</div>
						</div>
					</section>

					{/* Section 4: Physical Location & Hub */}
					<section className="border-t border-border pt-10">
						<h2 className="font-sans text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
							4. Ubicación y Contexto Geográfico
						</h2>
						<p className="mt-3 text-foreground/85">
							Los encuentros de HackTandil se realizan en diversos espacios
							tecnológicos y venues de la ciudad de Tandil, con epicentro en el
							polo tecnológico:
						</p>
						<div className="mt-4 border border-border p-6 bg-card/20 font-mono text-xs">
							<p className="text-foreground/90 font-sans text-sm">
								<strong>Ubicación:</strong> Tandil, Provincia de Buenos Aires,
								República Argentina (CP: B7000)
							</p>
							<p className="mt-2 text-foreground/90 font-sans text-sm">
								<strong>Coordenadas Geográficas:</strong> Latitud -37.3217,
								Longitud -59.1328
							</p>
							<p className="mt-2 text-foreground/90 font-sans text-sm">
								<strong>Ecosistema Institucional:</strong> Cluster Tecnológico
								Tandil / Cámara de Empresas del Polo Informático de Tandil
								(CEPIT)
							</p>
						</div>
					</section>
				</div>
			</div>

			<footer className="border-t border-border px-6 py-8 font-mono text-[10px] tracking-[0.3em] text-foreground/60">
				<div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
					<span>© 2026 HACKTANDIL // TANDIL, BUENOS AIRES, ARGENTINA</span>
					<div className="flex gap-6">
						<Link
							href="/about"
							className="transition-colors hover:text-[var(--hud)]"
						>
							SOBRE NOSOTROS
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
