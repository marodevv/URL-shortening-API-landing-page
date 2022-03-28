module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        white: 'white',
        black: 'black',
        cyan: 'hsl(180, 66%, 49%)',
        'dark-violet': 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 87%, 67%)',
        gray: 'hsl(0, 0%, 92.5%)',
        'grayish-violet': 'hsl(257, 7%, 63%)',
        'dark-blue': 'hsl(255, 11%, 22%)',
        'very-dark-violet': 'hsl(260, 8%, 11%)',
      },
      spacing: {
        sm: '1.25rem',
        md: '2rem',
        lg: '5rem',
        xlg: '10rem',
        pg: '8.5%',
        'card-p': '2rem',
        btn: {
          sm: '6.25rem',
          lg: '9.5rem',
          'p-sm': '0.4rem 0.675rem',
          'p-lg': '0.875rem 1rem',
        },
      },
      borderRadius: {
        sm: '.4rem',
        lg: '1.5rem',
      },

      screens: {
        xlg: { max: '1100px' },
        lg: { max: '900px' },
        mob: { max: '700px' },
        sm: { max: '500px' },
      },
      transitionDuration: {
        sm: '.25s',
        md: '.4s',
      },
      fontFamily: { default: 'sans-serif' },
      fontSize: {
        default: '16px',
        h1: '5rem',
        h2: '3.25rem',
        h3: '2.25rem',
        h4: '1.65rem',
        h5: '1.35rem',
        h6: '1.3rem',
        p: '1.2rem',
        li: '1rem',
        a: '1rem',
      },
    },
  },
  plugins: [],
};
