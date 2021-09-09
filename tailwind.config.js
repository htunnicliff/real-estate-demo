const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        side: {
          black: "hsla(93, 0%, 18%, 1)",
          gray: {
            DEFAULT: "hsla(0, 0%, 96%, 1)",
            light: "hsla(0, 0%, 59%, 1)",
          },
          red: "hsla(0, 100%, 43%, 1)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
