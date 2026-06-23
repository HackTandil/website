import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const SITE_URL = 'https://hacktandil.org'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const title = 'HackTandil'
const description =
  'Hacktandil es la comunidad tecnológica de Tandil. Conectá con desarrolladores, emprendedores y profesionales del software. Eventos, charlas y networking en el Cluster Tecnológico Tandil. Parte del ecosistema CEPIT.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: 'Hacktandil',
  authors: [{ name: 'Hacktandil', url: SITE_URL }],
  creator: 'Hacktandil',
  publisher: 'Hacktandil',
  generator: 'Next.js',
  keywords: [
    'Hacktandil',
    'Tandil',
    'Tandil tech',
    'software Tandil',
    'CEPIT',
    'Cluster Tecnológico Tandil',
    'comunidad tech',
    'desarrolladores Tandil',
    'programación',
    'tecnología Argentina',
    'Buenos Aires',
    'networking tech',
    'eventos tecnología',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Hacktandil',
    title: 'HACKTANDIL - Comunidad Tech de Tandil',
    description:
      'Conectá con la comunidad tecnológica de Tandil. Eventos, charlas, networking y más. Software, innovación y desarrollo en el Cluster Tecnológico Tandil.',
    locale: 'es_AR',
    images: [
      {
        url: '/social/og.png',
        width: 1200,
        height: 630,
        alt: 'HACKTANDIL - Comunidad Tech de Tandil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HACKTANDIL - Comunidad Tech de Tandil',
    description:
      'Conectá con la comunidad tecnológica de Tandil. Eventos, charlas, networking y más. Software, innovación y desarrollo en el Cluster Tecnológico Tandil.',
    site: '@hacktandil',
    creator: '@hacktandil',
    images: ['/social/og.png'],
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/favicon/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Hacktandil',
  alternateName: ['HACKTANDIL', 'Hack Tandil'],
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  description:
    'Comunidad tecnológica de Tandil. Conectamos desarrolladores, emprendedores y profesionales del software en el Cluster Tecnológico Tandil.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tandil',
    addressRegion: 'Buenos Aires',
    addressCountry: 'Argentina',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -37.3217,
    longitude: -59.1328,
  },
  sameAs: [
    'https://github.com/hacktandil',
    'https://x.com/hacktandil',
    'https://lu.ma/hacktandil',
  ],
  keywords: [
    'Tandil tech',
    'software',
    'CEPIT',
    'Cluster Tecnológico Tandil',
    'comunidad tech',
    'networking',
    'desarrolladores',
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Hacktandil',
  url: SITE_URL,
  description:
    'Portal de la comunidad tecnológica de Tandil - Eventos, networking y desarrollo de software',
  inLanguage: 'es',
  about: {
    '@type': 'Thing',
    name: 'Comunidad de tecnología y software en Tandil, Buenos Aires, Argentina',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
