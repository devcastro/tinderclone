module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "tinder": "url('/src/images/background.webp')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
