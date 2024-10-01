/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "roboto-condensed": ["Roboto Condensed", "sans-serif"],
        mukta: ["Mukta", "sans-serif"],
      },
    },
  },
  plugins: ["@tailwindcss/forms"],
};
