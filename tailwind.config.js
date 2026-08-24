/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#0a0a0a",
        panel: "#121212",
        line: "#2a2a2a",
        accent: "#f2b544",
      },
      fontFamily: {
        mono: [
          "JetBrains Mono",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
      },
      boxShadow: {
        soft: "0 12px 40px rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
};
