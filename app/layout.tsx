import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://hacktandil.org";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const title = "HackTandil // Comunidad Tecnológica de Tandil";
const description =
	"HackTandil es la comunidad tecnológica de Tandil. Conectá con desarrolladores, emprendedores y profesionales del software. Eventos, hackathons, charlas y networking en el Cluster Tecnológico Tandil (ecosistema CEPIT).";

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: "HackTandil // Comunidad Tecnológica de Tandil",
		template: "%s | HackTandil",
	},
	description,
	applicationName: "HackTandil",
	authors: [{ name: "HackTandil", url: SITE_URL }],
	creator: "HackTandil",
	publisher: "HackTandil",
	generator: "Next.js",
	keywords: [
		"Hacktandil",
		"Hack Tandil",
		"Tandil",
		"Tandil tech",
		"software Tandil",
		"CEPIT",
		"Cluster Tecnológico Tandil",
		"comunidad tech",
		"desarrolladores Tandil",
		"programación",
		"inteligencia artificial",
		"tecnología Argentina",
		"Buenos Aires",
		"networking tech",
		"eventos tecnología",
		"hackathons",
	],
	alternates: {
		canonical: "/",
		types: {
			"text/markdown": "/llms.txt",
		},
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		url: SITE_URL,
		siteName: "HackTandil",
		title: "HACKTANDIL - Comunidad Tech de Tandil",
		description:
			"Conectá con la comunidad tecnológica de Tandil. Eventos, charlas, networking y más. Software, innovación y desarrollo en el Cluster Tecnológico Tandil.",
		locale: "es_AR",
		images: [
			{
				url: "/social/og.png",
				width: 1200,
				height: 630,
				alt: "HACKTANDIL - Comunidad Tech de Tandil",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "HACKTANDIL - Comunidad Tech de Tandil",
		description:
			"Conectá con la comunidad tecnológica de Tandil. Eventos, charlas, networking y más. Software, innovación y desarrollo en el Cluster Tecnológico Tandil.",
		site: "@hacktandil",
		creator: "@hacktandil",
		images: ["/social/og.png"],
	},
	icons: {
		icon: [
			{ url: "/favicon/favicon-96x96.png", type: "image/png", sizes: "96x96" },
			{ url: "/favicon/favicon.svg", type: "image/svg+xml" },
		],
		shortcut: "/favicon/favicon.ico",
		apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
	},
	manifest: "/favicon/site.webmanifest",
};

export const viewport: Viewport = {
	themeColor: "#0a0a0a",
	colorScheme: "dark",
};

const organizationJsonLd = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"@id": `${SITE_URL}/#organization`,
	name: "Hacktandil",
	legalName: "Hacktandil Comunidad Tecnológica",
	alternateName: [
		"HACKTANDIL",
		"Hack Tandil",
		"Comunidad Tech Tandil",
		"HackTandil Tech Hub",
	],
	url: SITE_URL,
	logo: `${SITE_URL}/logo.svg`,
	image: `${SITE_URL}/social/og.png`,
	description:
		"Hacktandil es la comunidad tecnológica y polo de innovación de software en Tandil, Buenos Aires, Argentina. Conectamos desarrolladores, ingenieros de IA, estudiantes y fundadores en el Cluster Tecnológico Tandil y el ecosistema CEPIT.",
	email: "contacto@hacktandil.org",
	foundingDate: "2024",
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
			contactType: "Customer Support & Community Inquiries",
			email: "contacto@hacktandil.org",
			availableLanguage: ["es", "en"],
			areaServed: "AR",
			contactOption: "HearingImpairedSupported",
		},
		{
			"@type": "ContactPoint",
			contactType: "Partnerships & Sponsorships",
			email: "contacto@hacktandil.org",
			availableLanguage: ["es", "en"],
		},
	],
	geo: {
		"@type": "GeoCoordinates",
		latitude: -37.3217,
		longitude: -59.1328,
	},
	sameAs: [
		"https://github.com/hacktandil",
		"https://x.com/hacktandil",
		"https://instagram.com/hacktandil",
		"https://lu.ma/hacktandil",
		"https://platform.hacktandil.org",
	],
	knowsAbout: [
		"Software Development",
		"Artificial Intelligence",
		"Hackathons",
		"Technology Community",
		"Web Development",
		"Computer Science Education",
		"Tandil Tech Ecosystem",
	],
};

const websiteJsonLd = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	"@id": `${SITE_URL}/#website`,
	name: "Hacktandil",
	url: SITE_URL,
	description:
		"Portal de la comunidad tecnológica de Tandil - Eventos, networking, hackathons y desarrollo de software",
	inLanguage: "es",
	publisher: {
		"@id": `${SITE_URL}/#organization`,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="es"
			className={`${geistSans.variable} ${geistMono.variable} bg-background`}
		>
			<head>
				<link
					rel="alternate"
					type="text/markdown"
					href="/llms.txt"
					title="LLM Documentation"
				/>
				<link
					rel="sitemap"
					type="application/xml"
					href="/sitemap.xml"
					title="Sitemap"
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(organizationJsonLd),
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
				/>
			</head>
			<body className="font-sans antialiased">
				{children}
				{process.env.NODE_ENV === "production" && <Analytics />}
			</body>
		</html>
	);
}
