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
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        border: "var(--border)",
        ink: "var(--ink)",
        text: "var(--text)",
        muted: "var(--muted)",
        brand: {
          DEFAULT: "var(--brand)",
          hover: "var(--brand-hover)",
          soft: "var(--brand-soft)",
        },
        navy: "var(--navy)",
        chart: {
          1: "var(--chart-1)",
          2: "var(--chart-2)",
          3: "var(--chart-3)",
        },
        positive: "var(--positive)",
        negative: "var(--negative)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-geist)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        display: ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.025em" }], // 72px
        "display-mobile": ["2.625rem", { lineHeight: "1.1", letterSpacing: "-0.025em" }], // 42px
        h1: ["3.25rem", { lineHeight: "1.12", letterSpacing: "-0.025em" }], // 52px
        "h1-mobile": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.025em" }], // 36px
        h2: ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.015em" }], // 40px
        "h2-mobile": ["1.875rem", { lineHeight: "1.25", letterSpacing: "-0.015em" }], // 30px
        h3: ["1.375rem", { lineHeight: "1.3" }], // 22px
        "h3-mobile": ["1.25rem", { lineHeight: "1.3" }], // 20px
        "body-lg": ["1.25rem", { lineHeight: "1.6" }], // 20px
        "body-lg-mobile": ["1.125rem", { lineHeight: "1.6" }], // 18px
        body: ["1rem", { lineHeight: "1.6" }], // 16px
        small: ["0.875rem", { lineHeight: "1.5" }], // 14px
        caption: ["0.8125rem", { lineHeight: "1.4" }], // 13px
      },
      borderRadius: {
        control: "8px",
        card: "12px",
        product: "16px",
      },
      boxShadow: {
        product: "0 20px 40px -15px rgba(16, 20, 38, 0.08), 0 0 1px 1px rgba(16, 20, 38, 0.04)",
        menu: "0 12px 32px -8px rgba(16, 20, 38, 0.12), 0 0 1px rgba(16, 20, 38, 0.08)",
        panel: "0 16px 36px -10px rgba(16, 20, 38, 0.10)",
      },
      maxWidth: {
        content: "1240px",
      },
    },
  },
  plugins: [],
};

export default config;
