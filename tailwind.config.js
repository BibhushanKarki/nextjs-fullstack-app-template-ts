module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // Ensure these match with .storybook/preview.js
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: '#2B2929',
      secondary: '#E1B8B2',
      gray: {
        light: '#DBDCDC',
        mid: '#828282',
        dark: '#4B4A4A',
      },
      success: {
        light: '#B9F6CA',
        mid: '#69F0AE',
        dark: '#00C853',
      },
      warning: {
        light: '#FFF8E1',
        mid: '#FFE57F',
        dark: '#FFC107',
      },
      error: {
        light: '#FBE9E7',
        mid: '#FFAB91',
        dark: '#D84315',
      },
    },
    boxShadow: {
      default: 'none',
    },
    fontSize: {
      xs: ['12px', { lineHeight: '125%', letterSpacing: '1px' }],
      sm: ['14px', { lineHeight: '125%', letterSpacing: '1px' }],
      base: ['16px', { lineHeight: '125%', letterSpacing: '-0.1px' }],
      lg: ['18px', { lineHeight: '125%', letterSpacing: '0' }],
      xl: ['20px', { lineHeight: '32', letterSpacing: '3px' }],
      '2xl': ['32px', { lineHeight: '32', letterSpacing: '3px' }],
      '3xl': ['36px', { lineHeight: '72', letterSpacing: '2px' }],
      '4xl': ['48px', { lineHeight: '72', letterSpacing: '2px' }],
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
};
