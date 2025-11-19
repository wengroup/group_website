module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["'Akshar', 'sans-serif'"],
        opensans: ["'open sans'", "'sans-serif'"],
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
