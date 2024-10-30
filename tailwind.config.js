module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}" , './index.html'],
  // darkMode: false, // or 'media' or 'class'
  safelist: ["fill-svg", "font-cairo" , 'font-ibmPlex'],
  theme: {
  },
  variants: {
    extend: {
      color: {
        green: {
          900: "#1DD1A1",
          500: "#d5eff3",
          700: "#198754",
          300: "#2FAB99",
          100: "#2CBA94",
          alert: {
            50: "#BBF1E3",
          },
        },
        blue: {
          900: "#54A0FF",
          500: "#CCE3FF",
          alert: {
            100: "#54A0FF",
            50: "#CCE3FF",
          },
        },
        red: {
          900: "#EE5253",
          500: "#FFD3D3",
          700: "#A52C37",
          alert: {
            100: "#EE5253",
            50: "#FFD3D3",
          },
        },
        yellow: {
          900: "#F5A224",
          500: "#FFEFCD",
          alert: {
            100: "#F5A22",
            50: "#FFEFCD",
          },
        },
        gray: {
          900: "#101728",
          800: "#263238",
          700: "#909A9F",
          500: "#BDC3C7",
          300: "#EDEFF0",
          200: "#F5F8F8",
          dee1e3: "#DEE1E3",
        },
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
