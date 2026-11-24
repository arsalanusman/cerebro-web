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
        surface: "var(--surface, #F7F8FA)",
        "surface-app": "var(--surface-app, #FAFAFC)",
        lavender: "var(--lavender, #F1F2FF)",
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
          light: "var(--brand-light, #A5B4FC)",
        },
        navy: {
          DEFAULT: "var(--navy, #1C1A57)",
          deep: "var(--deep-navy, #141244)",
        },
        "deep-navy": "var(--deep-navy, #141244)",
        "on-navy": {
          DEFAULT: "var(--on-navy, #CDD0F3)",
          accent: "var(--brand-light, #A5B4FC)",
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
        control: "var(--radius-control, 10px)",
        card: "var(--radius-card, 18px)",
        panel: "var(--radius-panel, 20px)",
        tile: "var(--radius-tile, 24px)",
        "tile-lg": "var(--radius-tile-lg, 28px)",
        pill: "var(--radius-pill, 999px)",
      },
      boxShadow: {
        card: "var(--shadow-card, 0 2px 6px rgba(16,20,38,0.05), 0 20px 48px rgba(28,26,87,0.16))",
        menu: "var(--shadow-menu, 0 24px 48px rgba(16,20,38,0.12))",
        float: "var(--shadow-float, 0 2px 6px rgba(16,20,38,0.06), 0 24px 56px rgba(10,8,40,0.28))",
      },
      maxWidth: {
        container: "1240px",
        content: "1240px",
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
