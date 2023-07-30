/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        maroon: "#7e1f16",
        black: "#000",
        gainsboro: {
          "100": "#dfdfdf",
          "200": "#d9d9d9",
        },
        yellowgreen: "#e4e757",
        palegreen: "#72f487",
        silver: "#b5b5b5",
        wheat: "#d9cba5",
        brown: "#8b332b",
        royalblue: "#2771ff",
        whitesmoke: "#f4f4f4",
      },
      fontFamily: {
        inter: "Inter",
        helvetica: "Helvetica",
      },
      borderRadius: {
        "20xl-8": "39.8px",
        "8xs": "5px",
        "2xl": "21px",
        "17xl": "36px",
        "3xl": "22px",
        "12xs": "1px",
      },
    },
    fontSize: {
      xs: "12px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
