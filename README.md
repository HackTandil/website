# HACKTANDIL - Sitio Web

Sitio web oficial de la comunidad tecnológica de Tandil.

## Stack

- [Astro](https://astro.build/) - Framework web
- [Vercel](https://vercel.com/) - Deployment

## Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build de producción
npm run preview
```

## Estructura del proyecto

```
/
├── public/             # Assets estáticos (favicon, logo, etc.)
├── src/
│   ├── layouts/        # Layouts de Astro
│   │   └── Layout.astro
│   └── pages/          # Páginas del sitio
│       └── index.astro
├── astro.config.mjs    # Configuración de Astro
├── package.json
└── tsconfig.json
```

## Despliegue

El sitio se despliega automáticamente en Vercel al hacer push a la rama `main`.
