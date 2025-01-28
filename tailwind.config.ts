import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        bgPrimary: "var(--color-bg-primary)",
        tBase: "var(--color-tbase)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },

  plugins: []
} satisfies Config;
