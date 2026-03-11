// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    routing: {
      prefixDefaultLocale: false,
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  site: 'https://kanpo-web-cloudflare.pages.dev',
  output: "static",
  integrations: [sitemap()],
});