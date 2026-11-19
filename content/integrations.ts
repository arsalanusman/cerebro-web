export interface WayToConnect {
  title: string;
  text: string;
  cta: string;
  href: string;
  d: string;
}

export interface NativeConnector {
  name: string;
  mark: string;
  color: string;
  status: "Live" | "Coming soon";
  pillBg: string;
  pillFg: string;
  bg: string;
  facts: { k: string; v: string }[];
}

export interface ConnectorStep {
  n: string;
  title: string;
  text: string;
}

export interface IntegrationFaq {
  q: string;
  a: string;
}

export const integrationsData = {
  seoTitle: "Integrations | Cerebro DNano",
  seoDesc: "Bring in data from any marketing platform. Native connectors for Meta, Google and TikTok, AI-built connectors for anything else, and sheet uploads.",
  ways: [
    {
      title: "Native connectors",
      text: "Meta Ads, Google Ads and TikTok Ads, maintained by Cerebro. LinkedIn Ads and DV360 are coming soon.",
      cta: "See native connectors",
      href: "#native",
      d: "M12 22v-5M9 8V2M15 8V2M18 8v5a6 6 0 0 1-12 0V8z",
    },
    {
      title: "Custom connectors",
      text: "Any other marketing platform. Build it yourself with AI help, or ask our team.",
      cta: "See how AI builds them",
      href: "#custom",
      d: "M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z",
    },
    {
      title: "Sheet upload",
      text: "Exports from any platform as CSV, Excel or Google Sheets, mapped and cleaned by AI.",
      cta: "See sheet upload",
      href: "#upload",
      d: "M12 16V4M7 9l5-5 5 5M4 20h16",
    },
  ],
  native: [
    {
      name: "Meta Ads",
      mark: "M",
      color: "#1877F2",
      status: "Live",
      pillBg: "#DCFCE7",
      pillFg: "#166534",
      bg: "#FFFFFF",
      facts: [
        { k: "Connects through", v: "Meta Business" },
        { k: "Levels", v: "Campaign, ad set, ad" },
        { k: "Breakdowns", v: "Age and gender" },
      ],
    },
    {
      name: "Google Ads",
      mark: "G",
      color: "#15803D",
      status: "Live",
      pillBg: "#DCFCE7",
      pillFg: "#166534",
      bg: "#FFFFFF",
      facts: [
        { k: "Connects through", v: "Google Ads accounts and manager accounts" },
        { k: "Levels", v: "Campaign, ad group, ad" },
        { k: "Breakdowns", v: "Geographic, device, audience" }, // CONFIRM with product team
      ],
    },
    {
      name: "TikTok Ads",
      mark: "T",
      color: "#111827",
      status: "Live",
      pillBg: "#DCFCE7",
      pillFg: "#166534",
      bg: "#FFFFFF",
      facts: [
        { k: "Connects through", v: "TikTok Business Center" },
        { k: "Levels", v: "Campaign, ad group, ad" },
        { k: "Breakdowns", v: "Placement, video views, conversions" }, // CONFIRM with product team
      ],
    },
    {
      name: "LinkedIn Ads",
      mark: "in",
      color: "#7A8296",
      status: "Coming soon",
      pillBg: "#F1F2F5",
      pillFg: "#4B5160",
      bg: "#FAFAFB",
      facts: [
        { k: "Status", v: "In development. Upload exports as sheets in the meantime." },
      ],
    },
    {
      name: "DV360",
      mark: "DV",
      color: "#7A8296",
      status: "Coming soon",
      pillBg: "#F1F2F5",
      pillFg: "#4B5160",
      bg: "#FAFAFB",
      facts: [
        { k: "Status", v: "In development. Upload exports as sheets in the meantime." },
      ],
    },
  ],
  steps: [
    { n: "1", title: "Describe the platform", text: "Name it and share its API docs or a sample export." },
    { n: "2", title: "AI drafts the connector", text: "Cerebro AI builds the connection and maps the fields." },
    { n: "3", title: "Review and go live", text: "Approve the mappings. Data syncs into the same model." },
  ],
  fields: [
    { from: "cost_local", to: "Spend", state: "Mapped", bg: "#DCFCE7", fg: "#166534" },
    { from: "imps", to: "Impressions", state: "Mapped", bg: "#DCFCE7", fg: "#166534" },
    { from: "click_count", to: "Clicks", state: "Mapped", bg: "#DCFCE7", fg: "#166534" },
    { from: "goal_completions", to: "Conversions", state: "Review", bg: "#FFF7ED", fg: "#9A3412" },
    { from: "placement_group", to: "Ad set", state: "Review", bg: "#FFF7ED", fg: "#9A3412" },
  ],
  mapping: [
    { from: "Amount spent (PKR)", to: "Spend" },
    { from: "Impr.", to: "Impressions" },
    { from: "Link clicks", to: "Clicks" },
    { from: "Results", to: "Conversions" },
    { from: "Campaign name", to: "Campaign" },
  ],
  faq: [
    {
      q: "Which platforms have native connectors?",
      a: "Meta Ads, Google Ads and TikTok Ads today. LinkedIn Ads and DV360 are coming soon.",
    },
    {
      q: "What if our platform has no native connector?",
      a: "Build a custom connector with AI help, ask our team to build it, or upload its exports as CSV, Excel or Google Sheets.",
    },
    {
      q: "Can we choose which ad accounts are included?",
      a: "Yes. You choose the ad accounts when you connect and can turn them on or off later.",
    },
    {
      q: "How often does data update?",
      a: "Campaign data refreshes every hour automatically, with manual on-demand sync available anytime from the workspace settings.", // CONFIRM with product team
    },
    {
      q: "Does connecting give Cerebro access to change our campaigns?",
      a: "No. Cerebro connects with read-only reporting access. It cannot create, edit, pause, or alter any campaigns, bids, or ad spend in your advertising accounts.",
    },
  ],
};
