/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#06080f",
        panel: "#0d1220",
        line: "#1b2538",
        accent: "#6ee7b7",
      },
      boxShadow: {
        soft: "0 12px 40px rgba(2, 8, 23, 0.35)",
      },
    },
  },
  plugins: [],
};
