const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const customColors = {
  clubhouse: {
    brown: '#f2efe4',
    deep: '#e7e3d5',
    gray: '999999',
    red: '#fe3b30',
    orange: '#feaf52',
    green: '#27ae60',
    white: '#fefffe'
  }
}

const colors = {
  ...defaultColors,
  ...customColors
}

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors
  },
  extend: {},
  variants: {
    extend: {},
  },
  plugins: [],
}
