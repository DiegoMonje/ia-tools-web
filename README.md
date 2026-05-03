# IA Tools Web

Web en Astro y Tailwind CSS enfocada en guías, rankings, comparativas y análisis de herramientas de inteligencia artificial.

## Objetivo del proyecto

El proyecto funciona como un hub SEO de herramientas IA para usuarios que quieren comparar soluciones de texto, imagen, vídeo, programación, productividad, automatización y negocio.

## Stack técnico

- Astro 4
- Tailwind CSS 3
- Astro Content Collections
- Markdown para artículos del blog

## Scripts disponibles

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Estructura principal

```text
src/
  components/    Componentes reutilizables de la interfaz
  content/       Colecciones de contenido del blog
  layouts/       Layout base con SEO y estructura común
  pages/         Páginas estáticas, blog, sitemap y robots
```

## SEO incluido

- Metadatos básicos por página
- Canonical URL
- Open Graph
- Twitter Cards
- Schema.org para WebSite y Organization
- Sitemap XML dinámico
- Robots.txt dinámico

## Configuración de dominio

El dominio público se toma desde la variable de entorno `SITE_URL`.

Ejemplo:

```bash
SITE_URL=https://midominio.com npm run build
```

Si no se define, Astro usará el valor configurado en `astro.config.mjs`.

## Flujo recomendado de trabajo

1. Crear o editar artículos en la colección `blog`.
2. Revisar título, descripción, categoría, etiquetas y fecha.
3. Ejecutar `npm run build` antes de publicar.
4. Desplegar con `SITE_URL` apuntando al dominio real.

## Notas

Antes de monetizar con afiliación o AdSense, conviene revisar las páginas legales, añadir aviso de afiliados si corresponde y conectar analítica/webmaster tools.