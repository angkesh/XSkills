/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdx: "736px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },

      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "var(--background-color)",
        designColor: "var(--design-color)",
        imgBorderColor: "var(--img-border-color)",
        color1: "var(--color-1)",
        color2: "var(--color-2)",
        color3: "var(--color-3)",
        color4: "var(--color-4)",
        color5: "var(--color-5)",
        color6: "var(--color-6)",
        color7: "var(--color-7)",
        color8: "var(--color-8)",
        color9: "var(--color-9)",
        color10: "var(--color-10)",
        color11: "var(--color-11)",
        color12: "var(--color-12)",
        color13: "var(--color-13)",
        color14: "var(--color-14)",
        color15: "var(--color-15)",
        color16: "var(--color-16)",
        color17: "var(--color-17)",
        color18: "var(--color-18)",
        color19: "var(--color-19)",
        color20: "var(--color-20)",
        color21: "var(--color-21)",
        color22: "var(--color-22)",
        color23: "var(--color-23)",
        color24: "var(--color-24)",
        color25: "var(--color-25)",
        color26: "var(--color-26)",
        color27: "var(--color-27)",
        color28: "var(--color-28)",
        color29: "var(--color-29)",
        color30: "var(--color-30)",
        color31: "var(--color-31)",
        color32: "var(--color-32)",
        color33: "var(--color-33)",
        color34: "var(--color-34)",
        color35: "var(--color-35)",
        color36: "var(--color-36)",
        color37: "var(--color-37)",
        color38: "var(--color-38)",
        eduIcon: "var(--edu-icon-bg-color)",
        lightText: "var(--lightText-color)",
        boxBg: "var(--box-bg-color)",
        courseTitleColor: "#000080",
        closeColor: "var(--close-button-color)",
        popupColor: "var(--popup-color)",
        prevNextColor: "var(--img-prev-next-color)",
        textColor: "var(--text-color)",
        playColor: "var(--play-color)",
        searchBoxColor: "var(--search-box-color)",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px var(--shadow-color-1), -10px -10px 19px var(--shadow-color-2)",
        shadowTwo: "3px 3px 19px var(--shadow-color-1), -3px -3px 19px var(--shadow-color-2)",
        shadowThree: "2px 2px 15px var(--shadow-color-1), -2px -2px 15px var(--shadow-color-2)",
        shadowFour: "5px 5px 10px var(--shadow-color-3), -5px -5px 10px var(--shadow-color-4)"
      },
    },
  },
  darkMode: 'class',

  plugins: [],
}
