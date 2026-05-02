import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const site = process.env.SITE_URL || 'https://ia-tools-web.pages.dev';

export default defineConfig({
  site,
  integrations: [tailwind()],
});
