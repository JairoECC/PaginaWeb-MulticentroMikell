/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'my-colour': '#09178a',
        'blue-dark': '#01063c',
        'blue-full-dark': '#12183a',
        'body-color': '#F5FBFF',
      fontSize: {
        '14px': '14px',
        '13px': '13px',
      }
      },
    },
  },
  plugins: [],
}

