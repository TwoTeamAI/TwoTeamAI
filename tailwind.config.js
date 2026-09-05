/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base Surfaces
        'carbon': '#090A0C',
        'charcoal': '#121417',
        'mineral': '#1A1D23',
        // Typography & Foreground
        'chalk': '#F6F7F9',
        'titanium': '#9EA3AE',
        'sand': '#D4D4D8',
        // Signature Accents
        'amber': '#F59E0B',
        'bronze': '#D97706',
        'emerald': '#10B981',
        // Borders
        'hairline': 'rgba(255,255,255,0.07)',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['Geist Mono', 'Space Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.5rem, 4vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '0' }],
        'heading-lg': ['clamp(1.75rem, 3vw, 2.25rem)', { lineHeight: '1.25' }],
        'heading-md': ['clamp(1.5rem, 2.5vw, 1.875rem)', { lineHeight: '1.3' }],
        'heading-sm': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.35' }],
        'body-lg': ['clamp(1.125rem, 1.5vw, 1.25rem)', { lineHeight: '1.6' }],
        'body': ['clamp(1rem, 1.25vw, 1.125rem)', { lineHeight: '1.65' }],
        'body-sm': ['clamp(0.875rem, 1vw, 1rem)', { lineHeight: '1.6' }],
        'caption': ['clamp(0.75rem, 0.875vw, 0.875rem)', { lineHeight: '1.5' }],
      },
      spacing: {
        'space-4xs': '0.125rem',
        'space-3xs': '0.25rem',
        'space-2xs': '0.375rem',
        'space-xs': '0.5rem',
        'space-sm': '0.75rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xl': '2rem',
        'space-2xl': '3rem',
        'space-3xl': '4rem',
        'space-4xl': '6rem',
        'space-5xl': '8rem',
      },
      borderRadius: {
        'radius-sm': '0.375rem',
        'radius-md': '0.5rem',
        'radius-lg': '0.75rem',
        'radius-xl': '1rem',
        'radius-2xl': '1.5rem',
        'radius-full': '9999px',
      },
      boxShadow: {
        'inset-tactile': 'inset 0 1px 0 rgba(255,255,255,0.05), inset 0 -1px 0 rgba(0,0,0,0.3)',
        'elevation-1': '0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3)',
        'elevation-2': '0 4px 12px rgba(0,0,0,0.45), 0 2px 4px rgba(0,0,0,0.3)',
        'elevation-3': '0 12px 32px rgba(0,0,0,0.5), 0 4px 8px rgba(0,0,0,0.35)',
        'amber-glow': '0 0 24px rgba(245,158,11,0.25), 0 0 48px rgba(245,158,11,0.1)',
        'emerald-glow': '0 0 24px rgba(16,185,129,0.25), 0 0 48px rgba(16,185,129,0.1)',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '250ms',
        'slow': '400ms',
        'slower': '600ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      backdropBlur: {
        'glass': '20px',
      },
    },
  },
  plugins: [],
}