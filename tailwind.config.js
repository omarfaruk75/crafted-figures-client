/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  darkMode:"class",
  theme: {
    extend: {},
    themes: false, 
    darkTheme: "dark", 
    base: true,
    styled: true, 
    utils: true, 
    prefix: "", 
    logs: true, 
    themeRoot: ":root", 
  },
   plugins: [require("daisyui")],
}