export interface PricingPlan {
  name: string;
  for: string;
  cta: string;
  href: string;
  items: string[];
}

export interface PricingFaq {
  q: string;
  a: string;
}

export interface MatrixRow {
  isGroup?: boolean;
  label: string;
  a: string;
  b: string;
  c3: string;
}

export const pricingData = {
  seoTitle: "Pricing plans | Cerebro dNano",
  seoDesc: "Plans that fit how you work. Every plan includes Cerebro AI. Set up around your platforms, brands and team.",
  sizes: ["1 brand", "2 to 5", "6 or more"],
  plans: [
    {
      name: "Starter",
      for: "For one brand getting started with cross-platform reporting.",
      cta: "Book a demo",
      href: "/demo",
      items: [
        "Meta Ads, Google Ads and TikTok Ads",
        "Sheet uploads with AI mapping",
        "Ask Cerebro",
        "Dashboards and report builder",
        "Up to 3 team members", // CONFIRM with product team
      ],
    },
    {
      name: "Scale",
      for: "For growing teams running several brands or markets.",
      cta: "Book a demo",
      href: "/demo",
      items: [
        "Everything in Starter",
        "AI-built custom connectors",
        "Hierarchy reports and Explorer",
        "Shared widgets and templates",
        "Up to 10 team members", // CONFIRM with product team
      ],
    },
    {
      name: "Agency and Enterprise",
      for: "For agencies and large organizations with many clients and strict access needs.",
      cta: "Talk to sales",
      href: "/contact",
      items: [
        "Everything in Scale",
        "Client viewer and client admin roles",
        "Client-level permissions and activity log",
        "Connectors built by our team on request",
        "Dedicated account manager and custom SLA", // CONFIRM with product team
      ],
    },
  ],
  matrix: [
    { isGroup: true, label: "Data in", a: "", b: "", c3: "" },
    { label: "Meta Ads, Google Ads and TikTok Ads", a: "Included", b: "Included", c3: "Included" },
    { label: "Sheet uploads with AI mapping", a: "Included", b: "Included", c3: "Included" },
    { label: "AI-built custom connectors", a: "Available as add-on", b: "Included", c3: "Included" },
    { label: "Ad accounts and brands", a: "1 Brand / 5 Accounts", b: "Up to 5 Brands", c3: "Unlimited" },
    { isGroup: true, label: "Cerebro AI", a: "", b: "", c3: "" },
    { label: "Ask Cerebro", a: "Included", b: "Included", c3: "Included" },
    { label: "AI data checks", a: "Included", b: "Included", c3: "Included" },
    { isGroup: true, label: "Reporting", a: "", b: "", c3: "" },
    { label: "Dashboards and widgets", a: "Unlimited", b: "Unlimited", c3: "Unlimited" },
    { label: "Report builder and hierarchy reports", a: "Basic", b: "Advanced", c3: "Advanced" },
    { label: "Exports and SQL", a: "CSV & PDF", b: "CSV, PDF & Google Sheets", c3: "Full API & Data Warehouse Export" },
    { isGroup: true, label: "Team and access", a: "", b: "", c3: "" },
    { label: "Users", a: "3 seats", b: "10 seats", c3: "Unlimited seats" },
    { label: "Client viewer access", a: "-", b: "Included", c3: "Included" },
    { label: "Activity log", a: "30 days", b: "90 days", c3: "1 year audit log" },
  ],
  faq: [
    {
      q: "Is there a free trial?",
      a: "We start with a personalized demo on your own platforms or sheets, so you can judge Cerebro with your real campaigns.",
    },
    {
      q: "Is Cerebro AI included in every plan?",
      a: "Yes. Ask Cerebro and AI sheet mapping are part of every plan.",
    },
    {
      q: "Which currency do you bill in?",
      a: "We support billing in PKR and USD via corporate invoice or card.", // CONFIRM with product team
    },
    {
      q: "Can we change plans later?",
      a: "Yes, you can upgrade or add extra brand workspaces and team seats at any time during your billing period.", // CONFIRM with product team
    },
  ],
};
