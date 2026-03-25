/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom color palette — warm clinical luxury
      colors: {
        cream: {
          50:  '#FDFAF6',
          100: '#F9F4EC',
          200: '#F3EBD8',
          300: '#E8D9C0',
        },
        sage: {
          50:  '#F4F7F4',
          100: '#E6EDE6',
          200: '#C8D9C8',
          300: '#9DBDA0',
          400: '#6E9E73',
          500: '#4D7D52',
          600: '#3A6140',
          700: '#2C4A30',
        },
        slate: {
          warm: '#E8E4DF',
          mid:  '#9B9490',
          deep: '#4A4540',
        },
        navy: {
          50:  '#F0F3F8',
          100: '#D8E1EF',
          200: '#B0C3DF',
          300: '#7899C3',
          400: '#4D73A8',
          500: '#2E5285',
          600: '#1E3A6E',
          700: '#132851',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
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
        'soft':  '0 4px 32px rgba(74, 69, 64, 0.08)',
        'warm':  '0 8px 48px rgba(74, 69, 64, 0.12)',
        'lifted':'0 16px 64px rgba(74, 69, 64, 0.14)',
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
