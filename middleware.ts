import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const MARKDOWN_CONTENT: Record<string, string> = {
	"/": `# HACKTANDIL - Comunidad Tecnológica de Tandil

> Creamos la capa social para los que hacen tecnología en Tandil.

## Misión y Manifiesto
HackTandil es el punto de encuentro de desarrolladores, investigadores, emprendedores y estudiantes en el corazón del polo tecnológico de Tandil, Buenos Aires, Argentina.

### Principios Fundamentales
1. **Semillero de Talento**: Tandil es un semillero de talento informático de clase mundial que necesita un espacio común de convergencia.
2. **Visibilidad Radical**: Los proyectos construidos en Tandil merecen proyección nacional e internacional.
3. **Potencial Emprendedor**: Uniendo talento y visibilidad, Tandil tiene un potencial creador sin límites.

## Ecosistema y Partners
- **Cursor Community** (Colaborador de Eventos): https://cursor.com
- **Relaw** (Sponsor Legal Tech): https://relaw.io
- **Nodo Serrano** (Hub de Innovación & Venue): https://nodoserrano.org
- **The Red Guild** (Comunidad de Ciberseguridad): https://theredguild.org

## Próximos Eventos
Consultá y registrate en nuestros eventos presenciales y virtuales:
- Calendario Oficial en Luma: https://lu.ma/hacktandil

## Comunidad & Canales
- Plataforma Beta: https://platform.hacktandil.org
- GitHub: https://github.com/hacktandil
- X / Twitter: https://x.com/hacktandil
- Instagram: https://instagram.com/hacktandil
- Contacto General: contacto@hacktandil.org

## Navegación & Documentación
- Sobre Nosotros: https://hacktandil.org/about
- Directorio de Contacto: https://hacktandil.org/contact
- Política de Privacidad: https://hacktandil.org/privacy
- Mapa del Sitio (XML): https://hacktandil.org/sitemap.xml
- Guía para Agentes LLM: https://hacktandil.org/llms.txt
- Documentación para Agentes: https://hacktandil.org/agents.md
`,

	"/about": `# Sobre HackTandil // About

HackTandil es la comunidad de desarrollo de software y tecnología de Tandil, Buenos Aires, Argentina.

## Manifiesto y Misión
Creamos la capa social para los que hacen tecnología en Tandil. Conectamos desarrolladores, investigadores y constructores de software para colaborar, compartir conocimiento técnico y construir proyectos globales.

## Principios
1. **Talento en Común**: Tandil es un semillero de talento técnico. Creamos el punto de encuentro natural para colaborar.
2. **Visibilidad**: Damos difusión abierta a proyectos de software, herramientas y modelos desarrollados en Tandil.
3. **Construcción Global**: Creemos en el potencial emprendedor de nuestra ciudad para construir soluciones de estándar mundial.

## Iniciativas
- **Meetups & Demos Técnicas**: Charlas sobre arquitecturas, sistemas distribuidos, IA y código en producción.
- **Hackathons & Buildathons**: Jornadas de prototipado rápido y desarrollo intensivo.
- **Plataforma Builder (Beta)**: Espacio comunitario para conectar perfiles y proyectos locales.

## Colaboradores
- **Cursor Community**: Colaborador en eventos de desarrollo asistido por IA.
- **Relaw**: Sponsor legal tech.
- **Nodo Serrano**: Hub y venue de encuentro para builders.
- **The Red Guild**: Comunidad de investigación en seguridad.

## Organizadores & Contacto
- Dante (dante@hacktandil.org)
- Tadeo (tadeo@hacktandil.org)
- Email General: contacto@hacktandil.org
`,

	"/contact": `# Directorio de Contacto // Contact HackTandil

Canales oficiales de comunicación y soporte para la comunidad tecnológica de Tandil.

## Emails Oficiales
- **Consultas Generales y Prensa:** contacto@hacktandil.org
- **Sponsorship y Alianzas:** contacto@hacktandil.org
- **Organizadores:**
  - Dante: dante@hacktandil.org
  - Tadeo: tadeo@hacktandil.org

## Canales Digitales
- Calendario de Eventos (Luma): https://lu.ma/hacktandil
- Plataforma Comunitaria (Beta): https://platform.hacktandil.org
- GitHub: https://github.com/hacktandil
- X (Twitter): https://x.com/hacktandil
- Instagram: https://instagram.com/hacktandil

## Ubicación y Sede
- Ciudad: Tandil, Provincia de Buenos Aires, Argentina (CP B7000)
- Coordenadas: Latitud -37.3217, Longitud -59.1328
`,

	"/privacy": `# Política de Privacidad // Privacy Policy — HackTandil

Fecha de última actualización: 25 de agosto de 2026 // Tandil, Argentina

## 1. Compromiso con la Privacidad
HackTandil protege la privacidad de los miembros de su comunidad y usuarios de acuerdo con la Ley N° 25.326 de Protección de los Datos Personales de la República Argentina.

## 2. Tratamiento de Datos
- **Eventos:** El registro a eventos se realiza a través de Luma (lu.ma/hacktandil), recolectando únicamente datos de contacto necesarios para el acceso y capacidad de las sedes.
- **Plataforma Builder:** Los datos compartidos en perfiles públicos de platform.hacktandil.org son administrados directamente por cada usuario.
- **Métricas:** Utilizamos Vercel Analytics de forma agregada y anónima, sin cookies de seguimiento invasivas.

## 3. Derechos del Titular de los Datos
Cualquier usuario puede solicitar el acceso, rectificación o eliminación de sus datos escribiendo a contacto@hacktandil.org conforme al Art. 14 de la Ley 25.326.

## 4. Contacto de Privacidad
- Email: contacto@hacktandil.org
- Ubicación: Tandil (B7000), Buenos Aires, Argentina.
`,
};

const NOT_FOUND_MARKDOWN = `# 404 Recurso No Encontrado // Resource Not Found - HackTandil

La ruta solicitada no existe en este servidor.

## Enlaces de Recuperación para Agentes y Visitantes:
- Inicio / Homepage: https://hacktandil.org/
- Sobre Nosotros / About: https://hacktandil.org/about
- Directorio de Contacto / Contact: https://hacktandil.org/contact
- Política de Privacidad / Privacy: https://hacktandil.org/privacy
- Mapa del Sitio / Sitemap XML: https://hacktandil.org/sitemap.xml
- Guía para LLMs / Agent Instructions: https://hacktandil.org/llms.txt
- Documentación Extendida: https://hacktandil.org/llms-full.txt
- Calendario de Eventos: https://lu.ma/hacktandil
`;

export function middleware(request: NextRequest) {
	const accept = request.headers.get("accept") || "";
	const isMarkdownRequest =
		accept.includes("text/markdown") || accept.includes("text/x-markdown");

	const pathname = request.nextUrl.pathname;

	// If client explicitly requests markdown via Accept negotiation
	if (isMarkdownRequest) {
		const normalizedPath = pathname.endsWith("/") && pathname !== "/"
			? pathname.slice(0, -1)
			: pathname;

		if (normalizedPath in MARKDOWN_CONTENT) {
			return new NextResponse(MARKDOWN_CONTENT[normalizedPath], {
				status: 200,
				headers: {
					"Content-Type": "text/markdown; charset=utf-8",
					"Vary": "Accept, Accept-Encoding",
					"Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
				},
			});
		}

		// If it's a request to a nonexistent path with Accept: text/markdown, return agent-friendly 404 markdown
		if (
			!pathname.startsWith("/_next") &&
			!pathname.startsWith("/assets") &&
			!pathname.startsWith("/favicon") &&
			!pathname.includes(".")
		) {
			return new NextResponse(NOT_FOUND_MARKDOWN, {
				status: 404,
				headers: {
					"Content-Type": "text/markdown; charset=utf-8",
					"Vary": "Accept, Accept-Encoding",
					"Cache-Control": "no-cache",
				},
			});
		}
	}

	// For standard responses (HTML, etc.), ensure Vary header includes Accept and Accept-Encoding
	const response = NextResponse.next();
	const existingVary = response.headers.get("Vary");
	if (!existingVary) {
		response.headers.set("Vary", "Accept, Accept-Encoding");
	} else if (!existingVary.toLowerCase().includes("accept")) {
		response.headers.set("Vary", `${existingVary}, Accept`);
	}

	return response;
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico, assets, social images
		 */
		"/((?!_next/static|_next/image|assets/|favicon/|social/).*)",
	],
};
