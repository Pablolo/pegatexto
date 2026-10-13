// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import { rename, rmdir } from 'node:fs/promises';

/**
 * Astro solo genera como `404.html` la página de error de la raíz; las de otros idiomas
 * salen como `en/404/index.html`. Cloudflare sirve el `404.html` más cercano a la ruta
 * pedida, así que se mueven a `<idioma>/404.html`.
 */
const localized404 = (locales) => ({
  name: 'localized-404',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      for (const locale of locales) {
        const folder = new URL(`${locale}/404/`, dir);
        await rename(new URL('index.html', folder), new URL(`${locale}/404.html`, dir));
        await rmdir(folder);
      }
    }
  }
});

// https://astro.build/config
export default defineConfig({
  site: 'https://pegatexto.com',
  trailingSlash: 'always',

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },

  build: {
    inlineStylesheets: 'always'
  },

  devToolbar: {
    enabled: false
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({ filter: (page) => !/\/404\/$/.test(page) }),
    localized404(['en'])
  ]
});