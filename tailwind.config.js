module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // darkMode: false, // or 'media' or 'class'
  safelist: ["fill-svg", "font-cairo" , 'font-ibmPlex'],
  theme: {
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
