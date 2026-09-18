import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0E7C86',
          deep: '#0A5F67',
          soft: '#EAF5F5',
          50: '#F0FAFB',
          100: '#D6F1F3',
          200: '#ADE3E7',
          300: '#7ACDD4',
          400: '#3EADB8',
          500: '#0E7C86',
          600: '#0A6A73',
          700: '#0A5F67',
          800: '#0C4D54',
          900: '#0E4148',
        },
        teal: {
          DEFAULT: '#0E7C86',
          50: '#F0FAFB',
          100: '#D6F1F3',
          200: '#ADE3E7',
          300: '#7ACDD4',
          400: '#3EADB8',
          500: '#0E7C86',
          600: '#0A6A73',
          700: '#0A5F67',
          800: '#0C4D54',
          900: '#0E4148',
        },
        coral: {
          DEFAULT: '#E8846B',
          soft: '#FCEBE6',
        },
        mint: {
          DEFAULT: '#7FC8B8',
          soft: '#EAF7F3',
        },
        amber: {
          DEFAULT: '#F0B860',
          soft: '#FDF3E2',
        },
        surface: '#FFFFFF',
        'surface-alt': '#F0F6F6',
        background: '#F7FAFA',
        border: '#E0EAEB',
        'text-primary': '#2C3539',
        'text-muted': '#7A8B8E',
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        control: '8px',
      },
      boxShadow: {
        card: '0 1px 8px rgba(14, 124, 134, 0.07)',
        'card-hover': '0 8px 30px rgba(14, 124, 134, 0.12)',
        hero: '0 25px 60px rgba(14, 124, 134, 0.15)',
        glow: '0 0 40px rgba(14, 124, 134, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.7s ease-out forwards',
        'slide-in-right': 'slideInRight 0.7s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'counter-up': 'counterUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        counterUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
