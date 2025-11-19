module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontFamily: {
          roboto: ["'Akshar'", "sans-serif"],
          opensans: ["'Open Sans'", "sans-serif"],
        },
      },
      height: {
        128: "32rem",
      },
      width: {
        128: "47rem",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
