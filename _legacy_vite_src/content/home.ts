/**
 * Final Flagship Homepage copy for Cerebro DNano.
 * Follows docs/site-rules.md:
 * - No invented numbers.
 * - Strict platform scope: Meta Ads, Google Ads, TikTok Ads.
 * - No em dashes.
 * - Confirmed copy structure.
 */

export interface NavAction {
  label: string;
  href: string;
}

export interface PlatformItem {
  name: string;
  id: "meta" | "google" | "tiktok";
}

export interface ProductShotMeta {
  src: string;
  alt: string;
}

export interface StepItem {
  number: string;
  title: string;
  desc: string;
  href: string;
}

export interface FeatureItem {
  title: string;
  desc: string;
}

export const seo = {
  title: "Ad performance analytics and reporting | Cerebro DNano",
  description:
    "Bring Meta Ads, Google Ads and TikTok Ads into one consistent view, judge every campaign by its goal, and ask questions in plain language.",
  canonical: "https://cerebro-web.activ8.digital/",
};

export const hero = {
  h1: "Every ad platform in one view. Every campaign judged by its own goal.",
  lead: "Cerebro DNano brings your Meta Ads, Google Ads and TikTok Ads data into one consistent view, reports every campaign against the goal it was set up for, and answers your questions about it in plain language.",
  buttons: {
    primary: {
      label: "Book a demo",
      href: "/demo",
    },
    secondary: {
      label: "See how it works",
      href: "#how-it-works",
    },
  },
  connectsToLabel: "Connects to",
  platforms: [
    { name: "Meta Ads", id: "meta" },
    { name: "Google Ads", id: "google" },
    { name: "TikTok Ads", id: "tiktok" },
  ] as PlatformItem[],
  productShot: {
    src: "/product/dashboard.png",
    alt: "Executive overview dashboard with spend, impressions, clicks, CTR, CPM, CPC and CPA compared with the previous period",
  } as ProductShotMeta,
};

export const proofStrip = {
  heading: "Trusted by teams at",
};

export const problem = {
  h2: "Every channel has its own dashboard.",
  lines: [
    {
      title: "Its own numbers.",
      desc: "Meta, Google and TikTok each report in their own interface, so totals never sit side by side.",
    },
    {
      title: "Its own way of counting.",
      desc: "Clicks, views and conversions are labeled and counted differently on each platform.",
    },
    {
      title: "Its own report to build.",
      desc: "Someone exports, cleans and combines it all by hand before anyone can decide anything.",
    },
  ] as FeatureItem[],
  closing: "Cerebro brings it together and keeps it consistent.",
  // CONFIRM with product team: which click metric Cerebro uses for each platform. 149,612 + 235,904 + 36,584 = 422,100
  converge: {
    sources: [
      { platform: "Meta Ads", metric: "Link clicks", value: "149,612" },
      { platform: "TikTok Ads", metric: "Clicks (destination)", value: "235,904" },
      { platform: "Google Ads", metric: "Clicks", value: "36,584" },
    ],
    total: {
      label: "Clicks, all platforms",
      value: "422.1K",
      change: "4.12% lower than the previous 30 days",
      direction: "down",
    },
    caption: "Demo data.",
  },
};

export const howItWorks = {
  id: "how-it-works",
  h2: "From separate dashboards to one clear view.",
  steps: [
    {
      number: "1",
      title: "Connect",
      desc: "Link Meta Ads, Google Ads and TikTok Ads.",
      href: "#foundation",
    },
    {
      number: "2",
      title: "Consolidate",
      desc: "One dataset, always up to date.",
      href: "#foundation",
    },
    {
      number: "3",
      title: "Organize",
      desc: "Group by client, product and objective.",
      href: "#objectives",
    },
    {
      number: "4",
      title: "Visualize",
      desc: "Dashboards from platform to ad.",
      href: "#dashboards",
    },
    {
      number: "5",
      title: "Report",
      desc: "Widgets, templates and exports.",
      href: "#reports",
    },
  ] as StepItem[],
  thenAsk: {
    title: "Then ask",
    desc: "Ask Cerebro questions about all of it.",
    href: "#ask",
  },
};

export const foundation = {
  id: "foundation",
  h2: "A data foundation you can trust.",
  lead: "Every report and every answer starts here: connected accounts, scheduled syncs and one consistent dataset.",
  items: [
    {
      title: "Three platforms, one connection flow",
      desc: "Connect Meta Ads, Google Ads and TikTok Ads and choose exactly which ad accounts to include.",
    },
    {
      title: "Scheduled and on-demand syncs",
      desc: "Data refreshes on a schedule, and you can sync any connection yourself.",
    },
    {
      title: "Freshness you can see",
      desc: "Every view shows the date its data runs up to, and failed syncs are flagged on the Data health page.",
    },
    {
      title: "One currency, visible rates",
      desc: "Spend billed in different currencies is converted with clear exchange rate rules, and anything that couldn't be converted is flagged.",
    },
  ] as FeatureItem[],
  shots: {
    main: {
      src: "/product/connections.png",
      alt: "Connections page showing Meta Ads, Google Ads and TikTok Ads connected and up to date",
    },
    secondary: {
      src: "/product/data-health.png",
      alt: "Data health status report with sync coverage indicators",
    },
  },
  link: {
    label: "Explore data integration",
    href: "/platform/data-integration",
  },
};

export const objectiveReporting = {
  id: "objectives",
  h2: "Judge every campaign by its own goal.",
  // CONFIRM with product team
  lead: "An awareness campaign shouldn't be measured on cost per sale. Cerebro reports each campaign against the objective it was set up for, so reach campaigns are judged on reach and CPM, and sales campaigns on CPA and conversion value.",
  verdictCompare: {
    label: "Same TikTok spend, two verdicts. Demo data, last 30 days.",
    left: {
      header: "Judged on cost per sale",
      figure: "PKR 650.58",
      label: "CPA",
      pill: "Highest of the three platforms",
      pillType: "negative",
    },
    right: {
      header: "Judged on its goal: awareness",
      figure: "PKR 119.23",
      label: "CPM",
      pill: "Lowest of the three platforms",
      pillType: "positive",
      subline: "26M impressions",
    },
  },
  points: [
    "Filter any view by platform objective or your own client objective.",
    "See spend and results split by objective.",
    "Compare like with like across Meta, Google and TikTok.",
  ],
  productShot: {
    src: "/product/objective-filter.png",
    alt: "Dashboard with the client objective filter open showing Awareness, Traffic and Sales",
  } as ProductShotMeta,
  link: {
    label: "Explore objective-based reporting",
    href: "/platform/objective-reporting",
  },
};

export const dashboards = {
  id: "dashboards",
  h2: "From the big picture to a single ad.",
  lead: "Start with every platform together, then open any row to see its campaigns, ad sets and individual ads.",
  levels: [
    {
      id: "platform",
      label: "Platform",
      src: "/product/hierarchy-platform.png",
      alt: "Platform level hierarchy report showing spend, impressions and conversions by channel",
    },
    {
      id: "campaign",
      label: "Campaign",
      src: "/product/hierarchy-campaign.png",
      alt: "Campaign level drill-down showing campaign names, status and performance metrics",
    },
    {
      id: "adset",
      label: "Ad set",
      src: "/product/hierarchy-adset.png",
      alt: "Ad set level breakdown showing audiences, budgets and delivery",
    },
    {
      id: "ad",
      label: "Ad",
      src: "/product/hierarchy-ad.png",
      alt: "Individual ad level creative performance showing CTR and conversion rates",
    },
  ],
  items: [
    {
      title: "Every number compared",
      desc: "Each metric shows its change from the previous period, with dates in your time zone.",
    },
    {
      title: "Filters that follow you",
      desc: "Client, product, channel, account and objective filters apply at every level.",
    },
    {
      title: "Explore and export",
      desc: "Browse the underlying data in Explorer and export up to a million rows.",
    },
  ] as FeatureItem[],
  link: {
    label: "Explore dashboards",
    href: "/platform/dashboards",
  },
};

export const reports = {
  id: "reports",
  h2: "Build the report once. Reuse it for every client.",
  lead: "Design widgets, save them as your team's standard and drop them into any dashboard.",
  bento: {
    large: {
      title: "Widgets you design",
      desc: "Ten widget types, from KPI cards and trends to funnels, each with its own comparison, target and number style.",
      image: "/product/widget-builder.png",
      alt: "Widget builder showing ten widget types with customization settings",
    },
    card1: {
      title: "Shared widgets",
      desc: "Save your own widgets or use your team's standards.",
      image: "/product/shared-widgets.png",
      alt: "Team shared widgets library",
    },
    card2: {
      title: "Client dashboards",
      desc: "Give each client a dashboard of their own.",
      image: "/product/client-dashboard.png",
      alt: "Client-specific customized dashboard view",
    },
    slim1: {
      title: "Templates",
      desc: "Start any new dashboard from a template.",
    },
    slim2: {
      title: "Exports",
      desc: "CSV exports up to a million rows, run in the background.",
    },
  },
  link: {
    label: "Explore reports",
    href: "/platform/reports",
  },
};

export const askSection = {
  id: "ask",
  h2: "Ask Cerebro, the analyst on top of your data.",
  lead: "Once your data is connected and consistent, ask questions in plain language. Every answer comes with the numbers behind it.",
  cards: [
    {
      title: "Why did it change?",
      desc: "Finds what moved a metric, down to the platform, campaign and ad.",
      image: "/product/ask-why-cpa.png",
      alt: "Ask Cerebro explaining why cost per acquisition rose, with a breakdown by platform",
    },
    {
      title: "Who is responding?",
      desc: "Results by audience, such as age and gender, where the platform provides them.",
      image: "/product/ask-audience.png",
      alt: "Ask Cerebro showing Meta conversions and cost per acquisition by age and gender",
    },
    {
      title: "What should we change?",
      desc: "Specific fixes with their likely impact, so you know what to test first.",
      image: "/product/ask-fixes.png",
      alt: "Ask Cerebro recommending budget allocations and estimated conversion gains",
    },
    {
      title: "What can't it see?",
      desc: "Ask about data it doesn't have, like in-store sales, and it tells you instead of guessing.",
      image: "/product/ask-scope.png",
      alt: "Ask Cerebro displaying transparency boundaries on unintegrated datasets",
    },
  ],
  link: {
    label: "Learn more about Ask Cerebro",
    href: "/ask-cerebro",
  },
};

export const teamsAndSolutions = {
  h2: "Built for teams that manage many brands.",
  items: [
    {
      title: "One workspace, many clients",
      desc: "Keep every brand you manage in one place, each with its own dashboards.",
    },
    {
      title: "Access by role and client",
      desc: "Give each person a role and limit them to the clients they work on.",
    },
    {
      title: "Client viewer access",
      desc: "Share dashboards with clients without opening up your whole workspace.",
    },
    {
      title: "Six roles",
      desc: "From operations admin to client viewer, so everyone sees what they need and nothing more.",
    },
  ] as FeatureItem[],
  productShot: {
    src: "/product/team-access.png",
    alt: "Team and access page listing people, roles and the clients each person can see",
  } as ProductShotMeta,
  solutionsHeading: "Solutions for",
  solutions: [
    { label: "Agencies", href: "/solutions/agencies" },
    { label: "Brands", href: "/solutions/brands" },
    { label: "Banking and finance", href: "/solutions/finance" },
    { label: "Telecom", href: "/solutions/telecom" },
    { label: "FMCG", href: "/solutions/fmcg" },
    { label: "E-commerce", href: "/solutions/ecommerce" },
  ],
};

export const trust = {
  h2: "Built to be trusted with client data.",
  items: [
    {
      title: "Role-based access",
      desc: "Six roles with clear permissions.",
    },
    {
      title: "Client-level permissions",
      desc: "People only see the clients they are assigned to.",
    },
    {
      // CONFIRM with product team
      title: "Activity log",
      desc: "Exports, invitations and role changes are recorded.",
    },
    {
      title: "Data freshness",
      desc: "Every view shows how current its data is.",
    },
  ] as FeatureItem[],
  link: {
    label: "Read about security",
    href: "/security",
  },
};

export const finalCta = {
  h2: "See your own campaigns in Cerebro.",
  lead: "Book a personalized demo. We'll walk through Cerebro using the platforms and reports your team already works with.",
  button: {
    label: "Book a demo",
    href: "/demo",
  },
};
