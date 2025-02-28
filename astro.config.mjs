import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [
    tailwind(),
    react()
  ],
  output: 'hybrid',
  adapter: netlify(),
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  vite: {
    ssr: {
      noExternal: ['lucide-react']
    }
  }
});