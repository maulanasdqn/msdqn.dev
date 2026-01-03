import mdx from '@astrojs/mdx';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import partytown from '@astrojs/partytown';

const isVercel = process.env.VERCEL === 'true';

const getAdapter = () => {
  if (isVercel) {
    return vercel({
      webAnalytics: {
        enabled: true,
      },
    });
  }
  return node({
    mode: 'standalone',
  });
};

export default defineConfig({
  integrations: [
    tailwind(),
    mdx({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'wrap',
            properties: {
              className: ['anchor-link'],
            },
          },
        ],
      ],
    }),
    partytown({
      config: {
        forward: [
          'dataLayer.push',
          'gtag',
          'ga',
          'GoogleAnalyticsObject',
          '_gaq.push',
          'gtm',
        ],
        debug: false,
      },
    }),
  ],
  output: 'server',
  adapter: getAdapter(),
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
    assets: '_astro',
  },
});
