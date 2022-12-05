const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [
    plugin(({ addUtilities}) => {
      const utilities = {
        '.bg-search': {
          'background-image': `url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.4375 9.375C7.61212 9.375 9.375 7.61212 9.375 5.4375C9.375 3.26288 7.61212 1.5 5.4375 1.5C3.26288 1.5 1.5 3.26288 1.5 5.4375C1.5 7.61212 3.26288 9.375 5.4375 9.375Z' stroke='%232B2B39' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M8.22266 8.22168L10.5008 10.4998' stroke='%232B2B39' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`,
          'backgroundRepeat': 'no-repeat',
          'backgroundPosition': '10px center',
          'backgroundSize': '18px 18px',
        },
      }
      addUtilities(utilities)
    })
  ],
}
