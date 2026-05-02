import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// ⚠️ IMPORTANTE: Reemplaza por tu dominio real antes de desplegar
export default defineConfig({
  site: 'https://www.tu-dominio-real.com',
  integrations: [tailwind()],
});