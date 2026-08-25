import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Política de Privacidad // Privacy Policy — HackTandil",
	description:
		"Política de privacidad, protección de datos personales y términos de uso de la comunidad y plataformas digitales de HackTandil.",
	alternates: {
		canonical: "/privacy",
	},
};

const privacyJsonLd = {
	"@context": "https://schema.org",
	"@type": "WebPage",
	name: "Política de Privacidad de HackTandil",
	url: "https://hacktandil.org/privacy",
	description:
		"Términos de privacidad y protección de datos de la comunidad HackTandil en Tandil, Argentina.",
	publisher: {
		"@type": "Organization",
		name: "Hacktandil",
		url: "https://hacktandil.org",
		email: "contacto@hacktandil.org",
	},
};

export default function PrivacyPage() {
	return (
		<main className="min-h-screen bg-background text-foreground">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyJsonLd) }}
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
						<Link
							href="/contact"
							className="transition-colors hover:text-[var(--hud)]"
						>
							CONTACTO
						</Link>
						<Link href="/privacy" className="text-[var(--hud)]">
							PRIVACIDAD
						</Link>
					</nav>
				</div>
			</header>

			<div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
				{/* Title Section */}
				<div className="border-b border-border pb-10">
					<span className="font-mono text-[11px] tracking-[0.3em] text-[var(--hud)]">
						DOC // 003 — TÉRMINOS & PROTECCIÓN DE DATOS
					</span>
					<h1 className="mt-4 font-sans text-4xl font-bold tracking-tight sm:text-5xl">
						Política de Privacidad
					</h1>
					<p className="mt-4 font-mono text-sm tracking-wide text-foreground/70">
						Última actualización: 25 de agosto de 2026 // Tandil, Buenos Aires,
						Argentina
					</p>
				</div>

				<article className="prose prose-invert mt-12 space-y-10 leading-relaxed text-foreground/90 font-sans">
					{/* Section 1 */}
					<section>
						<h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
							1. Compromiso con la Privacidad
						</h2>
						<p className="mt-4 text-foreground/85">
							En HackTandil nos tomamos la privacidad de nuestra comunidad con la
							máxima seriedad y transparencia. Este documento describe cómo
							tratamos la información cuando visitás nuestro sitio web principal
							(
							<code className="text-xs text-[var(--hud)]">hacktandil.org</code>
							), participás en nuestros eventos o te registrás en nuestras
							plataformas asociadas.
						</p>
						<p className="mt-3 text-foreground/85">
							Nuestras prácticas se rigen bajo los principios de minimización de
							datos, consentimiento informado y cumplimiento de la legislación
							vigente de Protección de los Datos Personales de la República
							Argentina (Ley N° 25.326 y normas complementarias).
						</p>
					</section>

					{/* Section 2 */}
					<section className="border-t border-border pt-8">
						<h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
							2. Datos que Recopilamos y Finalidad
						</h2>

						<h3 className="mt-6 text-xl font-medium text-foreground">
							2.1. Registro a Eventos y Encuentros
						</h3>
						<p className="mt-2 text-foreground/85">
							Cuando te inscribís en un hackathon, taller o meetup a través de
							nuestro calendario en Luma (
							<code className="text-xs text-[var(--hud)]">
								lu.ma/hacktandil
							</code>
							), recopilamos únicamente los datos indispensables para coordinar
							el acceso y la capacidad de las sedes (nombre, email y opcionalmente
							perfil profesional o empresa/universidad de procedencia).
						</p>

						<h3 className="mt-6 text-xl font-medium text-foreground">
							2.2. Plataforma Builder HackTandil (Beta)
						</h3>
						<p className="mt-2 text-foreground/85">
							En caso de crear una cuenta en la plataforma comunitaria (
							<code className="text-xs text-[var(--hud)]">
								platform.hacktandil.org
							</code>
							), la información que elijas compartir en tu perfil (proyectos,
							habilidades, enlaces a GitHub o redes) es pública para fomentar la
							colaboración entre pares. Podés editar o eliminar tu perfil en
							cualquier momento desde tu panel de usuario.
						</p>

						<h3 className="mt-6 text-xl font-medium text-foreground">
							2.3. Métricas de Navegación y Analítica
						</h3>
						<p className="mt-2 text-foreground/85">
							Este sitio web utiliza analítica de rendimiento provista por
							Vercel Analytics. Esta tecnología no utiliza cookies de seguimiento
							invasivas, no almacena direcciones IP completas ni comparte datos
							con redes de publicidad de terceros. La métrica se procesa de forma
							anónima y agregada con el único fin de optimizar los tiempos de carga
							y la accesibilidad técnica de la página.
						</p>
					</section>

					{/* Section 3 */}
					<section className="border-t border-border pt-8">
						<h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
							3. Servicios de Terceros
						</h2>
						<p className="mt-4 text-foreground/85">
							Para el desarrollo de nuestras actividades comunitarias
							interactuamos con plataformas de terceros con estándares de
							seguridad comprobados:
						</p>
						<ul className="mt-4 list-disc pl-6 space-y-2 text-foreground/85">
							<li>
								<strong>Luma (Luma Calendar):</strong> Gestión de invitaciones,
								boletos y recordatorios de eventos.
							</li>
							<li>
								<strong>GitHub:</strong> Alojamiento de repositorios y proyectos
								de código abierto.
							</li>
							<li>
								<strong>Vercel:</strong> Infraestructura de despliegue y CDN
								global de alto rendimiento.
							</li>
						</ul>
					</section>

					{/* Section 4 */}
					<section className="border-t border-border pt-8">
						<h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
							4. Derechos del Titular de los Datos
						</h2>
						<p className="mt-4 text-foreground/85">
							Como titular de tus datos personales, tenés derecho a acceder,
							rectificar, actualizar o solicitar la supresión de tu información
							de nuestras bases de datos comunitarias o listas de comunicación en
							cualquier momento, conforme a lo establecido en el Artículo 14 de
							la Ley 25.326.
						</p>
						<p className="mt-3 text-foreground/85">
							La Agencia de Acceso a la Información Pública, en su carácter de
							Órgano de Control de la Ley N° 25.326, tiene la atribución de
							atender las denuncias y reclamos que se interpongan con relación al
							incumplimiento de las normas sobre protección de datos personales.
						</p>
					</section>

					{/* Section 5 */}
					<section className="border-t border-border pt-8">
						<h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
							5. Seguridad y Almacenamiento
						</h2>
						<p className="mt-4 text-foreground/85">
							Implementamos medidas técnicas y organizativas adecuadas para
							proteger los datos personales contra pérdida, uso indebido, acceso
							no autorizado, divulgación o alteración. Todo el tráfico hacia y
							desde nuestros servicios está encriptado mediante HTTPS/TLS 1.3.
						</p>
					</section>

					{/* Section 6 */}
					<section className="border-t border-border pt-8">
						<h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
							6. Contacto y Consultas de Privacidad
						</h2>
						<p className="mt-4 text-foreground/85">
							Para ejercer tus derechos de acceso, rectificación o eliminación de
							datos, o para cualquier duda relativa a esta política, podés
							escribirnos directamente a:
						</p>
						<div className="mt-4 border border-border p-5 bg-card/20 font-mono text-xs">
							<span className="text-[var(--hud)] font-bold">
								CANAL DE PRIVACIDAD // HACKTANDIL
							</span>
							<p className="mt-2 text-sm font-sans text-foreground">
								<strong>Email:</strong>{" "}
								<a
									href="mailto:contacto@hacktandil.org?subject=Consulta%20de%20Privacidad"
									className="text-[var(--hud)] hover:underline"
								>
									contacto@hacktandil.org
								</a>
							</p>
							<p className="mt-1 text-sm font-sans text-foreground/75">
								<strong>Ubicación:</strong> Tandil (B7000), Buenos Aires, Argentina.
							</p>
						</div>
					</section>
				</article>
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
							href="/contact"
							className="transition-colors hover:text-[var(--hud)]"
						>
							CONTACTO
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
