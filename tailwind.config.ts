import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        lato: ["Lato"],
        garamond: ["Garamond"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "bounce-slow": "bounceAround 5s ease-in-out infinite",
        "move-slow": "moveAround 6s ease-in-out infinite",
        "rotate-slow": "rotateAround 7s ease-in-out infinite",
      },
      keyframes: {
        bounceAround: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-50px) translateX(50px)" },
        },
        moveAround: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(50px) translateX(-50px)" },
        },
        rotateAround: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-50px) translateX(-50px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
