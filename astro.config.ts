import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  vite: {
    build: {
      cssMinify: 'lightningcss',
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
          },
        },
      },
    },
    ssr: {
      noExternal: ['@supabase/supabase-js'],
    },
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
