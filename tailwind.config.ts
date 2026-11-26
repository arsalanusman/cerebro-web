import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg, #FFFFFF)",
        "logo-navy": "var(--logo-navy, #022771)",
        "logo-blue": "var(--logo-blue, #0070C2)",
        surface: "var(--surface, #F6F8FB)",
        "surface-app": "var(--surface-app, #FAFBFD)",
        ice: "var(--ice, #EEF5FC)",
        lavender: "var(--ice, #EEF5FC)",
        border: "var(--border, #E2E8F0)",
        "border-strong": "var(--border-strong, #CBD5E1)",
        "border-hover": "var(--border-hover, #B8C4D4)",
        ink: "var(--ink, #000000)",
        text: "var(--text, #1C2433)",
        muted: "var(--muted, #5A6675)",
        subtle: "var(--subtle, #6B7685)",
        sky: "var(--sky, #8EC5F0)",
        brand: {
          DEFAULT: "var(--brand, #0070C2)",
          hover: "var(--brand-hover, #005DA3)",
          pressed: "var(--brand-pressed, #004C87)",
          soft: "var(--brand-soft, #E8F2FC)",
          "soft-hover": "var(--brand-soft-hover, #D6E8F8)",
          tint: "var(--brand-tint, #F3F8FE)",
          border: "var(--brand-border, #BFD8F0)",
          light: "var(--brand-light, #8EC5F0)",
        },
        navy: {
          DEFAULT: "var(--navy, #022771)",
          deep: "var(--deep-navy, #011640)",
        },
        "deep-navy": "var(--deep-navy, #011640)",
        "on-navy": {
          DEFAULT: "var(--on-navy, #C9DDF2)",
          accent: "var(--sky, #8EC5F0)",
        },
        positive: {
          DEFAULT: "var(--positive, #15803D)",
          bg: "var(--positive-bg, #DCFCE7)",
          text: "var(--positive-text, #166534)",
        },
        negative: {
          DEFAULT: "var(--negative, #B91C1C)",
          bg: "var(--negative-bg, #FEE2E2)",
          text: "var(--negative-text, #991B1B)",
        },
        warning: {
          DEFAULT: "var(--warning, #C2410C)",
          bg: "var(--warning-bg, #FFF7ED)",
          text: "var(--warning-text, #9A3412)",
        },
        "neutral-bg": "var(--neutral-bg, #F1F2F5)",
        "neutral-text": "var(--neutral-text, #4B5160)",
        platform: {
          meta: "var(--platform-meta, #0081FB)",
          google: "var(--platform-google, #15803D)",
          tiktok: "var(--platform-tiktok, #000000)",
          soon: "var(--platform-soon, #7A8296)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-geist)", "Geist", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "Geist Mono", "ui-monospace", "monospace"],
      },
      borderRadius: {
        control: "var(--radius-control, 10px)",
        card: "var(--radius-card, 18px)",
        panel: "var(--radius-panel, 20px)",
        tile: "var(--radius-tile, 24px)",
        "tile-lg": "var(--radius-tile-lg, 28px)",
        pill: "var(--radius-pill, 999px)",
      },
      boxShadow: {
        card: "var(--shadow-card, 0 2px 6px rgba(0,0,0,0.04), 0 20px 48px rgba(2,39,113,0.12))",
        menu: "var(--shadow-menu, 0 24px 48px rgba(0,0,0,0.12))",
        float: "var(--shadow-float, 0 2px 6px rgba(0,0,0,0.05), 0 24px 56px rgba(1,22,64,0.22))",
      },
      maxWidth: {
        container: "1440px",
        content: "1440px",
      },
      height: {
        header: "72px",
        "button-desktop": "var(--button-h, 44px)",
        "button-header": "var(--button-h-header, 40px)",
      },
    },
  },
  plugins: [],
};

export default config;
