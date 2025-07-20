// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://sixcores.com',
  base: '/',

  // URLs terminan con "/" → mejor para SEO
  trailingSlash: 'always',

  // Genera archivos estáticos para despliegue en Vercel
  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel(),
  integrations: [react()]
});