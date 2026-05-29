import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ofd: {
          ink: "#10180f",
          deep: "#111b0f",
          forest: "#24401a",
          moss: "#3f6130",
          sage: "#8f9d78",
          cream: "#f3f1e8",
          paper: "#fffdf6",
          muted: "#5f6757",
          line: "#d7d6c8",
          amber: "#c99a31",
          clay: "#8f5935",
          danger: "#832b2f",
        },
      },
      boxShadow: {
        soft: "0 18px 55px rgba(16, 24, 15, 0.13)",
        card: "0 12px 32px rgba(16, 24, 15, 0.09)",
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
