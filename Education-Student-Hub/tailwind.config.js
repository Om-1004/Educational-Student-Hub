/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./User/src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "320px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontSize: {
        xsm: "0.6rem", // You can adjust the size as needed
      },
    },
  },
  plugins: [],
};
