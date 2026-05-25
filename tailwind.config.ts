import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0F172A',
        cyan: {
          DEFAULT: '#06B6D4',
          light: '#67E8F9',
          dark: '#0891B2',
        },
        violet: {
          DEFAULT: '#8B5CF6',
          light: '#C4B5FD',
        },
        surface: '#F8FAFC',
        muted: '#94A3B8',
        subtle: '#64748B',
        'border-light': '#E2E8F0',
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        dm: ['var(--font-dm-sans)', 'sans-serif'],
      },
      keyframes: {
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseGlow: {
          '0%': { boxShadow: '0 0 0 0 rgba(6,182,212,0.3)' },
          '100%': { boxShadow: '0 0 24px 8px rgba(6,182,212,0.7)' },
        },
        dashTravel: {
          to: { strokeDashoffset: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        ringPulse: {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.92)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        connectorDot: {
          '0%': { left: '0%', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { left: '100%', opacity: '0' },
        },
      },
      animation: {
        gradientX: 'gradientX 4s ease infinite',
        pulseGlow: 'pulseGlow 2s ease-in-out alternate infinite',
        dashTravel: 'dashTravel 3s linear infinite',
        fadeUp: 'fadeUp 0.7s ease forwards',
        drawLine: 'drawLine 1.5s ease forwards',
        ringPulse: 'ringPulse 1.5s ease-out infinite',
        scaleIn: 'scaleIn 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        connectorDot: 'connectorDot 1.8s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
