import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      spacing: {
        // Define tamaños de espaciado personalizados
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        // Agrega radios de borde personalizados
        xl: "1.5rem",
        "2xl": "2rem",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
