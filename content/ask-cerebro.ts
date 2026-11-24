/**
 * Ask Cerebro platform page content.
 * Source: handoff/design/AskCerebro.dc.html
 */

export interface AskCerebroQuestion {
  label: string;
  question: string;
  steps: string[];
  head?: { v: string; a?: "left" | "right" }[];
  rows?: (string | { v: string; a?: "left" | "right"; c?: string; w?: number })[][];
  narrative: string;
  noTable?: boolean;
  suggest?: string[];
}

export const askCerebroContent = {
  seo: {
    title: "Ask Cerebro | AI Ad Performance Analyst | Cerebro DNano",
    description:
      "Ask Cerebro answers questions about your connected and uploaded ad data in plain language. Every answer shows the numbers behind it, with full data transparency.",
    canonical: "https://cerebro.media/ask-cerebro",
  },

  hero: {
    breadcrumb: "Ask Cerebro",
    eyebrow: "Cerebro AI",
    h1: "Your AI analyst, answering from your own data.",
    lead: "Ask Cerebro answers questions about your connected and uploaded data in plain language. Every answer shows the numbers behind it, and it tells you when something is missing.",
    primaryBtn: { label: "Book a demo", href: "/demo" },
    secondaryBtn: { label: "See what you can ask", href: "#ask-types" },
    caption: "Demo data for a sample brand. Answers replayed from Ask Cerebro.",
  },

  questions: [
    {
      label: "Why did CPA rise?",
      question: "Why did CPA rise in the last 30 days?",
      steps: [
        "Compared with the 30 days before",
        "Split the change by platform",
        "Checked TikTok campaigns and objectives",
      ],
      head: [
        { v: "Platform" },
        { v: "Before", a: "right" },
        { v: "Now", a: "right" },
        { v: "Change", a: "right" },
      ],
      rows: [
        [
          "TikTok Ads",
          { v: "440.68", a: "right" },
          { v: "650.58", a: "right" },
          { v: "↑ 47.6%", a: "right", c: "#B91C1C", w: 600 },
        ],
        [
          "Meta Ads",
          { v: "405.80", a: "right" },
          { v: "394.45", a: "right" },
          { v: "↓ 2.8%", a: "right", c: "#15803D", w: 600 },
        ],
        [
          "Google Ads",
          { v: "291.67", a: "right" },
          { v: "243.22", a: "right" },
          { v: "↓ 16.6%", a: "right", c: "#15803D", w: 600 },
        ],
      ],
      narrative:
        "CPA rose 17% to PKR 468.81. TikTok drove the increase: spend grew from PKR 2.6M to 3.1M while conversions fell. Most of the extra spend went to an awareness campaign.",
    },
    {
      label: "Best audience on Meta?",
      question: "Which audience converts best on Meta?",
      steps: [
        "Pulled Meta results by age and gender",
        "Compared each audience with the Meta average",
      ],
      head: [
        { v: "Audience" },
        { v: "Share", a: "right" },
        { v: "CPA", a: "right" },
      ],
      rows: [
        [
          "Women 25–34",
          { v: "35%", a: "right" },
          { v: "PKR 312", a: "right", c: "#15803D", w: 600 },
        ],
        [
          "Women 18–24",
          { v: "22%", a: "right" },
          { v: "PKR 398", a: "right" },
        ],
        [
          "Men 18–24",
          { v: "11%", a: "right" },
          { v: "PKR 630", a: "right", c: "#B91C1C", w: 600 },
        ],
      ],
      narrative:
        "Women 25–34 bring in 35% of Meta conversions at PKR 312 each, 21% below the Meta average.",
    },
    {
      label: "How do we cut CPA?",
      question: "What should we change to bring CPA down next month?",
      steps: [
        "Ranked ad sets and ads by CPA",
        "Estimated the likely impact of each change",
      ],
      head: [{ v: "Change" }, { v: "Likely impact", a: "right" }],
      rows: [
        [
          "Move PKR 300K to Meta, Women 18–34 | Feed",
          { v: "+300 to +350 conv.", a: "right", c: "#15803D", w: 600 },
        ],
        [
          "Shift Meta budget from Men 18–24 to Women 25–34",
          { v: "+250 to +300 conv.", a: "right", c: "#15803D", w: 600 },
        ],
        [
          "Pause 2 TikTok ads with CTR below 0.4%",
          { v: "Save about PKR 120K", a: "right", c: "#15803D", w: 600 },
        ],
      ],
      narrative:
        "Together these could bring CPA to about PKR 430 to 445. Test each change over two weeks.",
    },
    {
      label: "In-store sales?",
      question: "How many in-store sales did Winter Collection drive?",
      steps: [],
      noTable: true,
      narrative:
        "I can’t answer that from the connected data. In-store sales aren’t in any connected source or uploaded sheet. I can show online conversions and conversion value for Winter Collection instead.",
      suggest: [
        "Online conversions for Winter Collection",
        "Winter Collection reach and frequency",
      ],
    },
  ] as AskCerebroQuestion[],

  kinds: [
    {
      n: "01",
      title: "Why did it change?",
      text: "Ask why a number went up or down. Cerebro compares periods, splits the change by platform, campaign and ad, and points to what moved it.",
      example: "Why did CPA rise in the last 30 days?",
      visualTitle: "CPA by platform, PKR, last 30 days",
      bars: [
        {
          name: "TikTok Ads",
          value: "PKR 650.58, up 47.6%",
          pct: "100%",
          color: "#B91C1C",
          c: "#B91C1C",
        },
        {
          name: "Meta Ads",
          value: "PKR 394.45, down 2.8%",
          pct: "61%",
          color: "#C9CDD6",
          c: "#101426",
        },
        {
          name: "Google Ads",
          value: "PKR 243.22, down 16.6%",
          pct: "37%",
          color: "#C9CDD6",
          c: "#101426",
        },
      ],
    },
    {
      n: "02",
      title: "Who is responding?",
      text: "See results by age and gender where the platform reports them, and which audiences cost more or less than average.",
      example: "Which audience converts best on Meta?",
      visualTitle: "Share of Meta conversions by audience",
      bars: [
        {
          name: "Women 25–34",
          value: "35%, PKR 312 CPA",
          pct: "100%",
          color: "#4F46E5",
          c: "#101426",
        },
        {
          name: "Women 18–24",
          value: "22%, PKR 398 CPA",
          pct: "63%",
          color: "#6B7FE8",
          c: "#101426",
        },
        {
          name: "Men 25–34",
          value: "17%, PKR 441 CPA",
          pct: "49%",
          color: "#A5B4FC",
          c: "#101426",
        },
      ],
    },
    {
      n: "03",
      title: "What should we change?",
      text: "Get specific suggestions, such as moving budget between ad sets, each with its likely impact, so you know what to test first.",
      example: "What should we change to bring CPA down?",
      visualTitle: "Suggested changes and likely impact",
      bars: [
        {
          name: "Move PKR 300K to Women 18–34 | Feed",
          value: "+300 to +350 conv.",
          pct: "100%",
          color: "#15803D",
          c: "#15803D",
        },
        {
          name: "Shift Men 18–24 budget to Women 25–34",
          value: "+250 to +300 conv.",
          pct: "86%",
          color: "#15803D",
          c: "#15803D",
        },
        {
          name: "Pause 2 low-CTR TikTok ads",
          value: "Save about PKR 120K",
          pct: "40%",
          color: "#86EFAC",
          c: "#15803D",
        },
      ],
    },
    {
      n: "04",
      title: "What can’t it see?",
      text: "Ask about something outside your connected data or uploaded sheets and Cerebro says so, then offers what it can show instead.",
      example: "How many in-store sales did Winter Collection drive?",
      visualTitle: "What Cerebro can answer from",
      bars: [
        {
          name: "Connected platforms",
          value: "Meta, Google, TikTok",
          pct: "100%",
          color: "#4F46E5",
          c: "#101426",
        },
        {
          name: "Uploaded sheets",
          value: "CSV, Excel, Google Sheets",
          pct: "100%",
          color: "#6B7FE8",
          c: "#101426",
        },
        {
          name: "In-store sales",
          value: "Not connected",
          pct: "6%",
          color: "#C9CDD6",
          c: "#6B7180",
        },
      ],
    },
  ],

  howItWorks: [
    {
      n: "1",
      title: "Reads your question",
      text: "Understands what you are asking, for which client, period and platforms.",
    },
    {
      n: "2",
      title: "Finds the right data",
      text: "Uses the same clean model your dashboards use, from connectors and uploaded sheets.",
    },
    {
      n: "3",
      title: "Works through it",
      text: "Compares periods, splits by platform, campaign and audience, and checks data coverage.",
    },
    {
      n: "4",
      title: "Answers with the numbers",
      text: "A plain-language answer with the table behind it, plus any gaps it found.",
    },
  ],

  checks: [
    {
      title: "Your data only",
      text: "Answers come from your workspace, for the clients you can access.",
      d: "M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4",
    },
    {
      title: "Numbers behind every answer",
      text: "Each answer includes its table, with sources and data details you can open.",
      d: "M3 4h18v16H3zM3 10h18M9 4v16",
    },
    {
      title: "Gaps called out",
      text: "Partial coverage or a missing exchange rate is stated, with what it affects.",
      d: "M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z",
    },
  ],

  questionGroups: [
    {
      title: "Performance",
      qs: [
        "Summarize performance for the last 30 days",
        "Which campaigns spent the most this month?",
      ],
    },
    {
      title: "Diagnosis",
      qs: [
        "Why did CPA rise last month?",
        "Why did clicks drop on TikTok last week?",
      ],
    },
    {
      title: "Audience",
      qs: [
        "Which audience converts best on Meta?",
        "How does CPA differ by age group?",
      ],
    },
    {
      title: "Budget",
      qs: [
        "What should we change to bring CPA down?",
        "Which ad sets cost more than average?",
      ],
    },
    {
      title: "Data health",
      qs: ["Check data dates", "Inspect sync health"],
    },
  ],

  faq: [
    {
      q: "What data does Ask Cerebro use?",
      a: "Only the data in your Cerebro workspace: the platforms you connect and the sheets you upload, for the clients you can access.",
    },
    {
      q: "Can I export an answer?",
      a: "Yes. Copy any answer table as CSV or download it.",
    },
    {
      q: "What happens when data is missing?",
      a: "Ask Cerebro tells you, for example when coverage is partial or an exchange rate is missing, and explains how it affects the answer.",
    },
    {
      q: "Is our data used to train AI models?",
      a: "No. Client advertising data is processed in isolated tenant environments and is never used to train generalized foundation models.",
    },
    {
      q: "Does Ask Cerebro change anything in our ad accounts?",
      a: "No. Cerebro connects with read-only access to campaign reporting endpoints. It cannot alter budgets, pause ads, or adjust targeting in your live accounts.",
    },
  ],

  pillars: [
    { label: "AI data engine", href: "/platform/data-integration" },
    { label: "Ask Cerebro", href: "/ask-cerebro", active: true },
    { label: "Dashboards", href: "/platform/dashboards" },
    { label: "Report builder", href: "/platform/reports" },
    { label: "Hierarchy reports", href: "/platform/objective-reporting" },
  ],
};
