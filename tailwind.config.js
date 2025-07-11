module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        squaddPink: "#e44fff",
        squaddBlue: "#22d3ee",
        squaddRed: "#ff265b",
      },
      fontFamily: {
        // TikTok vibe için sans, bold headline gibi
        display: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
