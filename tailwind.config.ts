import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 農業らしい自然な色合い
        'farm-green': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        'earth-brown': {
          50: '#fdfcf1',
          100: '#faf6e6',
          200: '#f4edc0',
          300: '#ece091',
          400: '#e2cd5f',
          500: '#d4b93c',
          600: '#b89d31',
          700: '#94802a',
          800: '#7a6728',
          900: '#685526',
        },
        'harvest-orange': {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        }
      },
      fontFamily: {
        // サイト全体を本番と同じ Zen Maru 系に統一
        'sans': ['Zen Maru Gothic', 'Hiragino Mincho ProN W6', 'Yu Mincho', '游明朝', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'farm-pattern': "url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23dcfce7\" fill-opacity=\"0.1\" fill-rule=\"evenodd\"%3E%3Ccircle cx=\"3\" cy=\"3\" r=\"3\"/%3E%3Ccircle cx=\"13\" cy=\"13\" r=\"3\"/%3E%3C/g%3E%3C/svg%3E')",
      },
      animation: {
        'ken-burns': 'kenBurns 20s ease-in-out infinite alternate',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'parallax': 'parallax 25s linear infinite',
        'zoom-slow': 'zoomSlow 15s ease-in-out infinite alternate',
        'parallax-slide-in-left': 'parallaxSlideInLeft 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'parallax-slide-in-right': 'parallaxSlideInRight 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'parallax-slide-out-left': 'parallaxSlideOutLeft 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'parallax-slide-out-right': 'parallaxSlideOutRight 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'parallax-zoom': 'parallaxZoom 12s ease-in-out infinite alternate',
      },
      keyframes: {
        kenBurns: {
          '0%': {
            transform: 'scale(1.05) translateX(0px) translateY(0px)',
          },
          '25%': {
            transform: 'scale(1.12) translateX(-8px) translateY(-3px)',
          },
          '50%': {
            transform: 'scale(1.18) translateX(-12px) translateY(-6px)',
          },
          '75%': {
            transform: 'scale(1.15) translateX(8px) translateY(3px)',
          },
          '100%': {
            transform: 'scale(1.1) translateX(12px) translateY(6px)',
          },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        parallax: {
          '0%': {
            transform: 'scale(1.05) translateX(0px)',
          },
          '100%': {
            transform: 'scale(1.15) translateX(-20px)',
          },
        },
        zoomSlow: {
          '0%': {
            transform: 'scale(1.0)',
          },
          '100%': {
            transform: 'scale(1.2)',
          },
        },
        parallaxSlideInLeft: {
          '0%': {
            transform: 'translateX(-100%) scale(1.2)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0%) scale(1.0)',
            opacity: '1',
          },
        },
        parallaxSlideInRight: {
          '0%': {
            transform: 'translateX(100%) scale(1.2)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0%) scale(1.0)',
            opacity: '1',
          },
        },
        parallaxSlideOutLeft: {
          '0%': {
            transform: 'translateX(0%) scale(1.0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(-100%) scale(0.9)',
            opacity: '0',
          },
        },
        parallaxSlideOutRight: {
          '0%': {
            transform: 'translateX(0%) scale(1.0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(100%) scale(0.9)',
            opacity: '0',
          },
        },
        parallaxZoom: {
          '0%': {
            transform: 'scale(1.05) translateX(-10px) translateY(-5px)',
          },
          '25%': {
            transform: 'scale(1.1) translateX(8px) translateY(-3px)',
          },
          '50%': {
            transform: 'scale(1.15) translateX(-5px) translateY(7px)',
          },
          '75%': {
            transform: 'scale(1.12) translateX(12px) translateY(-8px)',
          },
          '100%': {
            transform: 'scale(1.08) translateX(-8px) translateY(5px)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config 