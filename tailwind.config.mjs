/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#1a1a1a',
          light: '#4a4a4a',
          muted: '#8a8a8a',
        },
        paper: {
          DEFAULT: '#fafaf8',
          warm: '#f5f0eb',
        },
        accent: {
          DEFAULT: '#b5463e',
          warm: '#c76b55',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '72ch',
          },
        },
      },
    },
  },
  plugins: [],
};
