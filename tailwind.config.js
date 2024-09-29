/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryLight: "#F5F5F5",
        secondaryLight: "#E9E9E9",
        thirdLight: "#FAFAFA",

        primaryDark: "#171516",
        secondaryDark: "#201E1F",
        thirdDark: "#312E2F",

        primaryRed: "#FF4000",
        secondaryRed: "FAAA8D",

        primaryCyan: "#347B85",
        secondaryCyan: "#50B2C0",
        thirdCyan: "#66DCED",
      },
    },
  },
  plugins: [],
};
