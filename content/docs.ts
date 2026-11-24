export interface DocChapter {
  slug: string;
  g: string; // Group
  t: string; // Title
  intro: string;
}

export const docChapters: DocChapter[] = [
  {
    slug: "getting-started",
    g: "Get started",
    t: "Getting started",
    intro:
      "Cerebro brings data from your ad platforms and uploaded sheets into one consistent model. Cerebro AI cleans and standardizes it, so dashboards, reports and Ask Cerebro all read the same numbers. This chapter covers the key terms and your first hour.",
  },
  {
    slug: "workspace-and-clients",
    g: "Get started",
    t: "Workspace and clients",
    intro: "How a workspace is organized into clients, and how to add a new client.",
  },
  {
    slug: "native-connectors",
    g: "Bring data in",
    t: "Native connectors",
    intro:
      "Connecting Meta Ads, Google Ads and TikTok Ads, and choosing which ad accounts to include.",
  },
  {
    slug: "custom-connectors-with-ai",
    g: "Bring data in",
    t: "Custom connectors with AI",
    intro:
      "Drafting a connector for any marketing platform with Cerebro AI, reviewing its field mappings, and going live.",
  },
  {
    slug: "uploading-sheets",
    g: "Bring data in",
    t: "Uploading sheets",
    intro:
      "Uploading CSV, Excel and Google Sheets exports, and reviewing how Cerebro AI mapped each column.",
  },
  {
    slug: "sync-and-data-health",
    g: "Bring data in",
    t: "Sync and data health",
    intro:
      "Sync schedules, syncing on demand, data freshness, and fixing a connection that needs attention.",
  },
  {
    slug: "currency-and-exchange-rates",
    g: "Report",
    t: "Currency and exchange rates",
    intro:
      "How spend in other currencies is converted, and how to read currency details on a number.",
  },
  {
    slug: "filters-objectives-and-products",
    g: "Report",
    t: "Filters, objectives and products",
    intro:
      "Client, product, channel and account filters, platform and client objectives, and product rules.",
  },
  {
    slug: "dashboards-and-widgets",
    g: "Report",
    t: "Dashboards and widgets",
    intro:
      "Templates, editing a dashboard, the widget types, rules and targets, and shared widgets.",
  },
  {
    slug: "report-builder-hierarchy-and-exports",
    g: "Report",
    t: "Report builder, hierarchy and exports",
    intro:
      "Building a report, drilling from platform to ad, Explorer, and exporting data.",
  },
  {
    slug: "ask-cerebro",
    g: "Ask and manage",
    t: "Ask Cerebro",
    intro:
      "Asking good questions, reading an answer and its sources, and exporting the table behind it.",
  },
  {
    slug: "team-roles-and-access",
    g: "Ask and manage",
    t: "Team, roles and access",
    intro:
      "The six roles, client access, inviting and suspending people, the activity log and API tokens.",
  },
];

export const docTerms = [
  {
    k: "Workspace",
    v: "Your company’s space in Cerebro, holding every client, connection and dashboard.",
    line: "transparent",
  },
  {
    k: "Client",
    v: "A brand you report on. Each client has its own data, dashboards and access.",
    line: "#EEF0F3",
  },
  {
    k: "Connection",
    v: "A link to an ad platform account, native or custom, that syncs data into Cerebro.",
    line: "#EEF0F3",
  },
  {
    k: "Sheet upload",
    v: "A CSV, Excel or Google Sheets export that Cerebro AI maps into the same model.",
    line: "#EEF0F3",
  },
  {
    k: "Objective",
    v: "The goal a campaign was set up for, from the platform or set by your team.",
    line: "#EEF0F3",
  },
  {
    k: "Widget",
    v: "One building block of a dashboard, such as a KPI, trend, table or funnel.",
    line: "#EEF0F3",
  },
  {
    k: "Ask Cerebro",
    v: "The AI analyst that answers questions about your data in plain language.",
    line: "#EEF0F3",
  },
];

export const docSteps = [
  {
    n: "1",
    title: "Add a client",
    text: "Create the brand you want to report on first.",
  },
  {
    n: "2",
    title: "Bring data in",
    text: "Connect Meta Ads, Google Ads or TikTok Ads, build a custom connector, or upload a sheet.",
  },
  {
    n: "3",
    title: "Check data health",
    text: "Make sure each source shows the date its data runs up to and nothing is flagged.",
  },
  {
    n: "4",
    title: "Open the executive overview",
    text: "Review the headline numbers, then ask Cerebro your first question.",
  },
];
