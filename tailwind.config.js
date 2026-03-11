/** @type {import('tailwindcss').Config} */
module.exports = {
  // We will put our code in a 'src' directory shortly
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}