import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    'animate-in',
    'scroll-animate',
    'fade-up',
    'fade-down',
    'fade-left',
    'fade-right',
    'scale-up',
    'zoom-in',
    'bounce-in',
    'loaded',
    'error',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Onest Variable"',
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
      colors: {
        mono: {
          bg: '#0a0a0a',
          surface: '#111111',
          raised: '#171717',
          line: '#262626',
          'line-strong': '#404040',
          text: '#fafafa',
          subtle: '#a3a3a3',
          muted: '#8a8a8a',
          accent: '#ffffff',
        },
      },
    },
  },
  plugins: [],
};

export default config;
