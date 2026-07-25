/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#FBF9F6',
          100: '#F8F6F2',
          200: '#EFEBE3',
          300: '#E0D9CC',
        },
        gold: {
          50:  '#FBF7EB',
          100: '#F5EDD4',
          200: '#EAD9A3',
          300: '#DCC46A',
          400: '#C9A227',
          500: '#C9A227',
          600: '#A8841F',
          700: '#826618',
        },
        slate: {
          warm: '#E8E4DF',
          mid:  '#6B7280',
          deep: '#2C3340',
        },
        navy: {
          50:  '#F2F4F7',
          100: '#E0E5EC',
          200: '#B8C3D4',
          300: '#7A8FA8',
          400: '#4A6380',
          500: '#2A4460',
          600: '#16304D',
          700: '#0B1F3A',
          800: '#081628',
          900: '#050E1A',
        },
        // Keep soft sage aliases mapped toward gold for any leftover refs
        sage: {
          50:  '#FBF7EB',
          100: '#F5EDD4',
          200: '#EAD9A3',
          300: '#DCC46A',
          400: '#C9A227',
          500: '#C9A227',
          600: '#A8841F',
          700: '#826618',
          800: '#5C4810',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-lato)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.1',  letterSpacing: '-0.015em' }],
        'display-md': ['2.75rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-sm': ['2rem',   { lineHeight: '1.2',  letterSpacing: '-0.005em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'xl':  '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft':  '0 4px 32px rgba(11, 31, 58, 0.08)',
        'warm':  '0 8px 48px rgba(11, 31, 58, 0.12)',
        'lifted':'0 16px 64px rgba(11, 31, 58, 0.14)',
      },
      animation: {
        'fade-up':   'fadeUp 0.7s ease forwards',
        'fade-in':   'fadeIn 0.6s ease forwards',
        'slide-in':  'slideIn 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%':   { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
