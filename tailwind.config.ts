import type { Config } from "tailwindcss"

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#A5B4FC",
        input: "#A5B4FC",
        ring: "#818CF8",
        background: "#F5F5F5",
        foreground: "#A0A1AA",
        primary: {
          DEFAULT: "#FFFFFF",
          foreground: "#A5B4FC",
        },
        secondary: {
          DEFAULT: "#A5B4FC",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#A5B4FC",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#818CF8",
          foreground: "818CF8",
        },
        accent: {
          DEFAULT: "#818CF8",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#A0A1AA",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#A5B4FC",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config