/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      phone: "320px",
      tablet: "1024px",
      laptop: "1280px",
      desktop: "1536px",
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('/src/assets/images/HeroSampleImage.jpg')",
      },
      aspectRatio: {
        "9/10": "9 / 10",
      },
      colors: {
        cerulean: "#007BA7",
        offwhite: "#FAF9F6",
      },
    },
  },
  plugins: [],
};
