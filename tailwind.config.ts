import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#08090C",
          darker: "#040507",
          card: "#0F1117",
          cardHover: "#161922",
          border: "#1E2230",
          cyan: "#00F0FF",
          cyanGlow: "rgba(0, 240, 255, 0.25)",
          amber: "#F59E0B",
          amberGlow: "rgba(245, 158, 11, 0.25)",
          emerald: "#10B981",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gloss-mesh": "radial-gradient(at 0% 0%, rgba(0, 240, 255, 0.12) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(245, 158, 11, 0.08) 0px, transparent 50%)",
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(0, 240, 255, 0.3)",
        "glow-amber": "0 0 25px -5px rgba(245, 158, 11, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;

