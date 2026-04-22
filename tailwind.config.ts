import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        'ink-soft': 'rgb(var(--color-ink-soft) / <alpha-value>)',
        'ink-card': 'rgb(var(--color-ink-card) / <alpha-value>)',
        'ink-border': 'rgb(var(--color-ink-border) / <alpha-value>)',
        amber: {
          DEFAULT: '#E8A020',
          dim: '#B87A14',
          glow: 'rgba(232,160,32,0.15)',
        },
        bone: {
          DEFAULT: 'rgb(var(--color-bone) / <alpha-value>)',
          dim: 'rgb(var(--color-bone-dim) / <alpha-value>)',
          muted: 'rgb(var(--color-bone-muted) / <alpha-value>)',
        },
        teal: {
          DEFAULT: '#1A7A6A',
          light: '#22A08A',
          glow: 'rgba(26,122,106,0.15)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
      },
      spacing: {
        section: 'clamp(4rem, 8vw, 7rem)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      backgroundImage: {
        'grid-ink': 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        'amber-glow': 'radial-gradient(ellipse at center, rgba(232,160,32,0.12) 0%, transparent 70%)',
        'teal-glow': 'radial-gradient(ellipse at center, rgba(26,122,106,0.1) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'scan': 'scan 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scan: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
