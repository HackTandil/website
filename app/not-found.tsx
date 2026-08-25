import Link from "next/link";

export const metadata = {
	title: "404 - Recurso No Encontrado // Resource Not Found — HackTandil",
	description:
		"El recurso o página solicitada no existe. Consultá el mapa del sitio o la documentación para continuar.",
	robots: {
		index: false,
		follow: true,
	},
};

export default function NotFound() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-24 text-foreground font-sans">
			<div className="mx-auto max-w-2xl border border-border bg-card/30 p-8 sm:p-12 text-center">
				<span className="font-mono text-xs tracking-[0.3em] text-[var(--rec)]">
					STATUS // 404 NOT FOUND
				</span>
				<h1 className="mt-4 font-sans text-3xl font-bold tracking-tight sm:text-5xl">
					Recurso No Encontrado
				</h1>
				<p className="mt-4 text-foreground/80 leading-relaxed">
					La ruta que intentás acceder no existe o fue trasladada. Si sos un
					agente de inteligencia artificial o un visitante humano, utilizá los
					siguientes enlaces para continuar navegando el ecosistema de HackTandil:
				</p>

				<div className="mt-8 border-t border-border pt-6 text-left font-mono text-xs">
					<span className="text-[var(--hud)] tracking-widest block font-semibold mb-3">
						DIRECTORIO DE RECUPERACIÓN // RECOVERY LINKS
					</span>
					<ul className="space-y-2 text-foreground/85">
						<li>
							<Link href="/" className="text-[var(--hud)] hover:underline">
								› Inicio / Homepage
							</Link>{" "}
							— Portal principal y manifiesto
						</li>
						<li>
							<Link href="/about" className="text-[var(--hud)] hover:underline">
								› Sobre Nosotros / About
							</Link>{" "}
							— Historia, misión y aliados
						</li>
						<li>
							<Link href="/contact" className="text-[var(--hud)] hover:underline">
								› Contacto / Directory
							</Link>{" "}
							— Canales oficiales y organizadores
						</li>
						<li>
							<Link href="/privacy" className="text-[var(--hud)] hover:underline">
								› Privacidad / Privacy Policy
							</Link>{" "}
							— Términos y datos
						</li>
						<li>
							<a
								href="/sitemap.xml"
								className="text-[var(--hud)] hover:underline"
							>
								› Mapa del Sitio / sitemap.xml
							</a>{" "}
							— Índice completo de URLs indexables
						</li>
						<li>
							<a href="/llms.txt" className="text-[var(--hud)] hover:underline">
								› Guía para LLMs / llms.txt
							</a>{" "}
							— Especificación para agentes de IA
						</li>
						<li>
							<a
								href="https://lu.ma/hacktandil"
								target="_blank"
								rel="noreferrer"
								className="text-[var(--hud)] hover:underline"
							>
								› Calendario de Eventos (Luma) ↗
							</a>
						</li>
					</ul>
				</div>

				<div className="mt-8 flex justify-center">
					<Link
						href="/"
						className="border border-[var(--hud)] bg-[var(--hud)] px-6 py-2.5 font-mono text-xs font-semibold text-black hover:bg-transparent hover:text-[var(--hud)] transition-colors"
					>
						VOLVER AL INICIO
					</Link>
				</div>
			</div>
		</main>
	);
}
