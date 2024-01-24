/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      phone: "480px",
      tablet: "768px",
      laptop: "976px",
      desktop: "1440px",
    },
    colors: {
      "card-background": "#1F2A48",
      "button-bg": "#0079FE",
      "search-icon-bg": "#0079FE",
      gray: "#B5BAC5",
      "text-deep-gray": "#5C657A",
      profile: "#141C2F",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
