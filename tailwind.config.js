/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#757575",
          "200": "rgba(0, 0, 0, 0.4)",
        },
        silver: {
          "100": "#c2c2c2",
          "200": "#b6b5b5",
          "300": "#b5b5b5",
        },
        wheat: "#d9cba5",
        black: "#000",
        whitesmoke: {
          "100": "#f4f4f4",
          "200": "#ededed",
          "300": "#ebebeb",
        },
        darkgray: "#acabab",
        royalblue: "#2771ff",
        maroon: "#7e1f16",
        gainsboro: {
          "100": "#e8e8e8",
          "200": "#dfdfdf",
          "300": "#d9d9d9",
        },
        yellowgreen: "#e4e757",
        palegreen: "#72f487",
        brown: "#8b332b",
        dimgray: "#4e4e4e",
      },
      fontFamily: {
        inter: "Inter",
        helvetica: "Helvetica",
      },
      borderRadius: {
        "8xs": "5px",
        "2xl": "21px",
        "17xl": "36px",
        "3xl": "22px",
        "44xl": "63px",
        "12xs": "1px",
        "20xl-8": "39.8px",
        "10xl": "29px",
        "3xs": "10px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
