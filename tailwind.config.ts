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
        surface: "var(--surface, #F7F8FA)",
        "surface-2": "var(--surface-2, #EEF0F4)",
        "surface-app": "var(--surface-app, #FAFAFC)",
        border: "var(--border, #E4E7EC)",
        "border-strong": "var(--border-strong, #D5D8E0)",
        "border-hover": "var(--border-hover, #C9CDD6)",
        ink: "var(--ink, #101426)",
        text: "var(--text, #2B3040)",
        muted: "var(--muted, #5B6170)",
        subtle: "var(--subtle, #6B7180)",
        brand: {
          DEFAULT: "var(--brand, #4F46E5)",
          hover: "var(--brand-hover, #4338CA)",
          pressed: "var(--brand-pressed, #3730A3)",
          soft: "var(--brand-soft, #EEF0FF)",
          "soft-hover": "var(--brand-soft-hover, #E0E3FF)",
          tint: "var(--brand-tint, #F5F6FF)",
          border: "var(--brand-border, #C7CBF9)",
        },
        navy: {
          DEFAULT: "var(--navy, #1C1A57)",
          deep: "var(--navy-deep, #16144A)",
        },
        "on-navy": {
          DEFAULT: "var(--on-navy, #CDD0F3)",
          accent: "var(--on-navy-accent, #A5B4FC)",
        },
        chart: {
          1: "var(--chart-1, #2E2A82)",
          2: "var(--chart-2, #6B7FE8)",
          3: "var(--chart-3, #A5B4FC)",
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
          text: "var(--warning-text, #9A3412)",
          bg: "var(--warning-bg, #FFF7ED)",
          border: "var(--warning-border, #F5D9C0)",
        },
        "neutral-pill": {
          bg: "var(--neutral-pill-bg, #F1F2F5)",
          text: "var(--neutral-pill-text, #4B5160)",
        },
        platform: {
          meta: "var(--platform-meta, #1877F2)",
          google: "var(--platform-google, #15803D)",
          tiktok: "var(--platform-tiktok, #111827)",
          soon: "var(--platform-soon, #7A8296)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-geist)", "Geist", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "Geist Mono", "ui-monospace", "monospace"],
      },
      borderRadius: {
        control: "var(--radius-control, 8px)",
        button: "var(--radius-button, 10px)",
        card: "var(--radius-card, 12px)",
        "card-lg": "var(--radius-card-lg, 14px)",
        panel: "var(--radius-panel, 16px)",
        pill: "var(--radius-pill, 999px)",
      },
      boxShadow: {
        "card-hover": "var(--shadow-card-hover, 0 12px 32px rgba(16, 20, 38, 0.08))",
        menu: "var(--shadow-menu, 0 24px 48px rgba(16, 20, 38, 0.12))",
        frame: "var(--shadow-frame, 0 30px 70px rgba(10, 8, 40, 0.35))",
        "panel-ai": "var(--shadow-panel-ai, 0 2px 6px rgba(16, 20, 38, 0.08), 0 32px 80px rgba(10, 8, 40, 0.4))",
      },
      maxWidth: {
        container: "1240px",
        content: "1240px",
      },
      height: {
        header: "72px",
      },
    },
  },
  plugins: [],
};

export default config;
