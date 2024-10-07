/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E53D3B",
        secondary: "#FFFFFA",
        tertiary: "#F2F2F2",
        mainBg: "#F7F7F7",

        primaryDark: "#151515",
        secondaryDark: "#1F1F1F",
        tertiaryDark: "#242424",
      },
    },
  },
  plugins: [],
};
