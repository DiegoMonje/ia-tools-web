import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans 3', 'system-ui', 'sans-serif'],
        body: ['Source Sans 3', 'system-ui', 'sans-serif'],
      },
      colors: {
        hub: {
          dark: '#0f172a',
          darkMid: '#1e293b',
          darkLight: '#334155',
          slate: '#475569',
          gray: '#64748b',
          grayLight: '#94a3b8',
          grayLighter: '#e2e8f0',
          bg: '#f8fafc',
          bgWarm: '#f1f5f9',
          white: '#ffffff',
          accent: '#0369a1',
          accentLight: '#0284c7',
          accentDark: '#075985',
          success: '#059669',
          warning: '#d97706',
          error: '#dc2626',
          gold: '#b45309',
          teal: '#0f766e',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '70ch',
            color: '#1e293b',
            h1: { fontWeight: '700' },
            h2: { fontWeight: '600', color: '#0f172a' },
            h3: { fontWeight: '600', color: '#0f172a' },
            h4: { fontWeight: '600' },
            strong: { fontWeight: '600' },
            a: {
              color: '#0369a1',
              textDecoration: 'underline',
              '&:hover': { color: '#0284c7' },
            },
            blockquote: {
              fontStyle: 'normal',
              borderLeftColor: '#0369a1',
              color: '#475569',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
