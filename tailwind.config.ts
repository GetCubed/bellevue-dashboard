import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        // Catppuccin Macchiato palette
        'ctp-base': '#24273a',
        'ctp-mantle': '#1e2030',
        'ctp-crust': '#181926',
        'ctp-surface0': '#363a4f',
        'ctp-surface1': '#494d64',
        'ctp-surface2': '#5b6078',
        'ctp-text': '#cad3f5',
        'ctp-subtext1': '#b8c0e0',
        'ctp-subtext0': '#a5adcb',
        'ctp-overlay2': '#939ab7',
        'ctp-overlay1': '#8087a2',
        'ctp-overlay0': '#6e738d',
        'ctp-lavender': '#b7bdf8',
        'ctp-blue': '#8aadf4',
        'ctp-sapphire': '#7dc4e4',
        'ctp-sky': '#91d7e3',
        'ctp-teal': '#8bd5ca',
        'ctp-green': '#a6da95',
        'ctp-yellow': '#eed49f',
        'ctp-peach': '#f5a97f',
        'ctp-maroon': '#ee99a0',
        'ctp-red': '#ed8796',
        'ctp-mauve': '#c6a0f6',
        'ctp-pink': '#f5bde6',
        'ctp-flamingo': '#f0c6c6',
        'ctp-rosewater': '#f4dbd6',
        // Keep existing blue colors for compatibility
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
