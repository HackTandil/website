# HACKTANDIL - Sitio Web

Sitio web oficial de la comunidad tecnológica de Tandil.

## Stack

- [Next.js](https://nextjs.org/) (App Router) - Framework web
- [React 19](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) - Estilos
- [Vercel](https://vercel.com/) - Deployment

## Desarrollo

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Build para producción
pnpm build

# Servir el build de producción
pnpm start
```

## Estructura del proyecto

```
/
├── public/             # Assets estáticos
│   ├── favicon/        # Favicons + site.webmanifest
│   ├── social/         # Imágenes OG / share (generadas)
│   └── assets/         # Logos de partners, imágenes
├── app/
│   ├── layout.tsx      # Layout raíz + metadata (SEO/OG/JSON-LD)
│   ├── page.tsx        # Landing page
│   └── globals.css
├── components/         # Componentes React (hero ASCII, HUD, etc.)
├── lib/
├── scripts/
│   └── gen-social.mjs  # Genera las imágenes OG en public/social
├── next.config.mjs
├── package.json
└── tsconfig.json
```

## Imágenes sociales (OG)

Las imágenes de compartir se generan a partir del still de la "Piedra
Movediza" + el título HACKTANDIL:

```bash
node scripts/gen-social.mjs   # requiere ImageMagick y rsvg-convert
```

## Despliegue

El sitio se despliega automáticamente en Vercel al hacer push a la rama `main`.
