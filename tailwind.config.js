/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F4F7FB",
        surface: "#FFFFFF",
        panel: "#EDF2F8",
        navy: "#0A1A33",
        line: "#E1E8F2",
        accent: "#1A56FF",
        accentSoft: "#1245D6",
        textPrimary: "#0A1A33",
        textMuted: "#5A6B84"
      },
      boxShadow: {
        glow: "0 14px 34px rgba(26, 86, 255, 0.22)",
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
