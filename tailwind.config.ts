import type { Config } from 'tailwindcss';
import formsPlugin from '@tailwindcss/forms';

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
        rosewater: '#F5E0DC',
        flamingo: '#F2CDCD',
        pink: '#F5C2E7',
        mauve: '#CBA6F7',
        red: '#F38BA8',
        maroon: '#EBA0AC',
        peach: '#FAB387',
        yellow: '#F9E2AF',
        green: '#A6E3A1',
        teal: '#94E2D5',
        sky: '#89DCEB',
        sapphire: '#74C7EC',
        blue: '#89B4FA',
        lavender: '#B4BEFE',
        text: '#CDD6F4',
        subtext1: '#BAC2DE',
        subtext0: '#A6ADC8',
        overlay2: '#9399B2',
        overlay1: '#7F849C',
        overlay0: '#6C7086',
        surface2: '#585B70',
        surface1: '#45475A',
        surface0: '#313244',
        base0: '#1E1E2E',
        mantle: '#181825',
        crust: '#11111B',
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
  plugins: [formsPlugin],
};
export default config;
