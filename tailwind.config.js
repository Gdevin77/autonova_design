/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F3F6F8",
        surface: "#FFFFFF",
        panel: "#EAF0F3",
        navy: "#08090B",
        brand: "#3AAAD8",
        line: "#DDE5EA",
        accent: "#0C7DAB",
        accentSoft: "#096186",
        textPrimary: "#0B0F12",
        textMuted: "#56646E"
      },
      boxShadow: {
        glow: "0 14px 34px rgba(12, 125, 171, 0.25)",
        card: "0 1px 2px rgba(10,26,51,.06), 0 8px 24px rgba(10,26,51,.06)"
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "ui-sans-serif", "system-ui"]
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
