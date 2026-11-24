/**
 * Flagship Homepage content for Cerebro dNano.
 * Source of truth: handoff/design/Home2.dc.html & handoff/design/Main.dc.html
 * Adheres strictly to docs/site-rules.md:
 * - Live platforms: Meta Ads, Google Ads, TikTok Ads only
 * - No em dashes
 * - No invented statistics or client counts
 * - Exact captions preserved
 */

export interface CellItem {
  v: string;
  a?: "left" | "right";
  c?: string;
  w?: number;
}

export interface TableRow {
  cells: CellItem[];
}

export interface TableHeadItem {
  v: string;
  a?: "left" | "right";
}

export interface HeroQuestion {
  label: string;
  question: string;
  steps: string[];
  dateLine: string;
  head: TableHeadItem[];
  rows: (string | CellItem)[][];
  narrative: string;
  kpi: string[];
  mix: string[];
}

export interface HeroKpi {
  label: string;
  value: string;
  delta: string;
  sub: string;
  tone: "neutral" | "positive" | "negative";
}

export interface HeroPlatformMix {
  name: string;
  spend: string;
  spendPct: string;
  clicks: string;
  ctr: string;
  cpa: string;
  logo?: string;
}

export interface AiStep {
  n: string;
  title: string;
  text: string;
  example: string;
  d: string;
}

export interface EngineSource {
  label: string;
  d: string;
  steps: [string, string][];
}

export interface EngineNativeItem {
  mark: string;
  color: string;
  name: string;
  status: string;
  pillBg: string;
  pillFg: string;
  logo?: string;
}

export interface EngineOutput {
  label: string;
  d: string;
}

export interface AskQuestionItem {
  q: string;
  kind: string;
  dateLine: string;
  head: TableHeadItem[];
  rows: (string | CellItem)[][];
  narrative: string;
  note?: string;
  suggest?: string[];
}

export interface ObjectiveOption {
  tab: string;
  label: string;
  labelColor: string;
  verdict: string;
  explain: string;
  scale: string;
  bars: {
    name: string;
    value: string;
    pct: string;
    color: string;
    w: number;
  }[];
}

export interface SolutionItem {
  label: string;
  title: string;
  lead: string;
  points: string[];
  link: string;
  href: string;
}

export interface TeamMember {
  initial: string;
  name: string;
  role: string;
  clients: string;
}

export interface CompareItem {
  task: string;
  without: string;
  with: string;
}

export interface TrustItem {
  title: string;
  text: string;
  d: string;
}

// ---------------------------------------------------------------------------
// SEO Metadata
// ---------------------------------------------------------------------------
export const seo = {
  title: "Ad performance analytics and reporting | Cerebro dNano",
  description:
    "Bring Meta Ads, Google Ads and TikTok Ads into one consistent view, judge every campaign by its goal, and ask questions in plain language.",
  canonical: "https://cerebro.media/",
};

// ---------------------------------------------------------------------------
// 1. HERO SECTION DATA
// ---------------------------------------------------------------------------
export const heroData = {
  // Option 2 (AI-forward, root /)
  eyebrow2: "Cerebro AI, the data engine for paid media",
  h1Option2: "Your AI analyst for every ad platform.",
  leadOption2:
    "Cerebro AI brings in data from any marketing platform or sheet, cleans and standardizes it, flags what's wrong, builds your reports, and answers your questions with the numbers behind them.",

  // Option 1 (Data-forward, /option-1)
  h1Option1: "Bring in any marketing data. Ask it anything.",
  leadOption1:
    "Connect Meta, Google and TikTok, add a connector for any other platform, or upload a sheet. Cerebro's AI cleans and standardizes it, builds your reports, and answers your questions with the numbers behind them.",

  chips: [
    { mark: "M", color: "#1877F2", label: "Meta Ads", logo: "/brand/platforms/meta.png" },
    { mark: "G", color: "#15803D", label: "Google Ads", logo: "/brand/platforms/google.png" },
    { mark: "T", color: "#111827", label: "TikTok Ads", logo: "/brand/platforms/tiktok.png" },
    { mark: "+", color: "#4F46E5", label: "Any platform" },
    { mark: "↑", color: "#4F46E5", label: "CSV, Excel, Sheets" },
  ],

  // Questions replayed in Hero Ask Cerebro
  questions: [
    {
      label: "Why did CPA rise?",
      question: "Why did CPA rise in the last 30 days?",
      steps: [
        "Compared with the 30 days before",
        "Split the change by platform",
        "Checked TikTok campaigns and objectives",
        "Data coverage complete on all platforms",
      ],
      dateLine: "CPA in PKR, last 30 days vs the 30 before",
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
        [
          { v: "All platforms", w: 600 },
          { v: "400.79", a: "right", w: 600 },
          { v: "468.81", a: "right", w: 600 },
          { v: "↑ 17.0%", a: "right", c: "#B91C1C", w: 600 },
        ],
      ],
      narrative:
        "CPA rose 17% to PKR 468.81. TikTok drove the increase: spend grew from PKR 2.6M to 3.1M while conversions fell from 5.9K to 4.8K. Most of the extra spend went to Winter Collection | Launch, an awareness campaign.",
      kpi: ["CPA"],
      mix: ["TikTok Ads"],
    },
    {
      label: "Best audience on Meta?",
      question: "Which audience converts best on Meta?",
      steps: [
        "Pulled Meta results by age and gender",
        "Compared each audience with the Meta average",
        "Data coverage complete",
      ],
      dateLine: "Meta Ads, last 30 days, PKR",
      head: [
        { v: "Audience" },
        { v: "Conv.", a: "right" },
        { v: "Share", a: "right" },
        { v: "CPA", a: "right" },
      ],
      rows: [
        [
          "Women 25–34",
          { v: "1,900", a: "right" },
          { v: "35%", a: "right" },
          { v: "312", a: "right", c: "#15803D", w: 600 },
        ],
        [
          "Women 18–24",
          { v: "1,200", a: "right" },
          { v: "22%", a: "right" },
          { v: "398", a: "right" },
        ],
        [
          "Men 25–34",
          { v: "900", a: "right" },
          { v: "17%", a: "right" },
          { v: "441", a: "right" },
        ],
        [
          "Women 35–44",
          { v: "800", a: "right" },
          { v: "15%", a: "right" },
          { v: "356", a: "right" },
        ],
        [
          "Men 18–24",
          { v: "600", a: "right" },
          { v: "11%", a: "right" },
          { v: "630", a: "right", c: "#B91C1C", w: 600 },
        ],
      ],
      narrative:
        "Women 25–34 bring in 35% of Meta conversions at PKR 312 each, 21% below the Meta average. Men 18–24 cost PKR 630 per conversion, 60% above average.",
      kpi: [],
      mix: ["Meta Ads"],
    },
    {
      label: "How do we cut CPA?",
      question: "What should we change to bring CPA down next month?",
      steps: [
        "Ranked ad sets and ads by CPA",
        "Found budget that could move to cheaper audiences",
        "Estimated the likely impact of each change",
      ],
      dateLine: "Based on the last 30 days, PKR",
      head: [{ v: "Change" }, { v: "Likely impact", a: "right" }],
      rows: [
        [
          "Move PKR 300K from Men 18–24 to Women 25–34 on Meta",
          { v: "+300 to +350 conversions", a: "right", c: "#15803D", w: 600 },
        ],
        [
          "Separate TikTok awareness from sales campaigns",
          { v: "Reports show true sales CPA", a: "right" },
        ],
        [
          "Pause 2 creative variants with CTR below 0.5%",
          { v: "Saves PKR 120K in wasted spend", a: "right" },
        ],
      ],
      narrative:
        "Moving PKR 300K on Meta from Men 18–24 to Women 25–34 would generate an estimated 300 to 350 extra conversions at the same budget. Separating TikTok awareness campaigns prevents them from inflating your blended CPA.",
      kpi: [],
      mix: [],
    },
  ] as HeroQuestion[],

  // Dashboard mock data
  kpis: [
    {
      label: "Total spend",
      value: "PKR 5.8M",
      delta: "↓ 5.23%",
      sub: "vs PKR 6.1M",
      tone: "neutral",
    },
    {
      label: "Impressions",
      value: "39.1M",
      delta: "↑ 5.48%",
      sub: "vs 37.1M",
      tone: "positive",
    },
    {
      label: "Clicks",
      value: "422.1K",
      delta: "↓ 4.12%",
      sub: "vs 440.2K",
      tone: "negative",
    },
    {
      label: "CTR",
      value: "1.08%",
      delta: "↓ 9.02%",
      sub: "vs 1.19%",
      tone: "negative",
    },
    {
      label: "CPM",
      value: "PKR 147.52",
      delta: "↓ 10.16%",
      sub: "vs PKR 164.20",
      tone: "positive",
    },
    {
      label: "CPA",
      value: "PKR 468.81",
      delta: "↑ 16.97%",
      sub: "vs PKR 400.79",
      tone: "negative",
    },
  ] as HeroKpi[],

  // Sparkline data
  curPoints: [
    180, 210, 195, 240, 220, 260, 230, 250, 270, 240, 280, 260, 290, 310, 280,
    290, 320, 300, 330, 310, 340, 320, 350, 330, 360, 340, 350, 330, 360, 340,
  ],
  prevPoints: [
    190, 200, 210, 205, 220, 215, 230, 225, 240, 235, 250, 245, 260, 255, 270,
    265, 280, 275, 290, 285, 300, 295, 310, 305, 320, 315, 330, 325, 340, 335,
  ],

  // Platform mix
  platformMix: [
    {
      name: "Meta Ads",
      spend: "PKR 2.1M",
      spendPct: "37%",
      clicks: "149.6K",
      ctr: "1.26%",
      cpa: "PKR 394.45",
      logo: "/brand/platforms/meta.png",
    },
    {
      name: "TikTok Ads",
      spend: "PKR 3.1M",
      spendPct: "53%",
      clicks: "235.9K",
      ctr: "0.91%",
      cpa: "PKR 650.58",
      logo: "/brand/platforms/tiktok.png",
    },
    {
      name: "Google Ads",
      spend: "PKR 514.2K",
      spendPct: "10%",
      clicks: "36.6K",
      ctr: "3.02%",
      cpa: "PKR 243.22",
      logo: "/brand/platforms/google.png",
    },
  ] as HeroPlatformMix[],

  caption: "Demo data for a sample brand. Answers replayed from Ask Cerebro.",
};

// ---------------------------------------------------------------------------
// 2. AI AT EVERY STEP (Option 2 Section #ai)
// ---------------------------------------------------------------------------
export const aiSteps: AiStep[] = [
  {
    n: "01",
    title: "AI connectors",
    text: "Drafts a connector for any marketing platform from its API docs, for your team to review.",
    example: "Connector drafted: 11 fields mapped, 3 to review",
    d: "M12 22v-5M9 8V2M15 8V2M18 8v5a6 6 0 0 1-12 0V8z",
  },
  {
    n: "02",
    title: "AI sheet mapping",
    text: "Reads CSV, Excel and Google Sheets exports and maps every column to Cerebro's metrics.",
    example: '14 columns mapped. "Impr." matched to Impressions',
    d: "M3 4h18v16H3zM3 10h18M3 15h18M9 4v16",
  },
  {
    n: "03",
    title: "AI standardization",
    text: "Aligns how clicks, views and conversions are counted across platforms, so totals add up.",
    example: "Clicks aligned across Meta, Google and TikTok",
    d: "M4 6h16M4 12h16M4 18h16M8 4v4M16 10v4M11 16v4",
  },
  {
    n: "04",
    title: "AI data checks",
    text: "Flags missing dates, stale syncs and unconverted currency before a report goes out.",
    example: "2 rows missing dates flagged for review",
    d: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4",
  },
  {
    n: "05",
    title: "Ask Cerebro",
    text: "Answers questions in plain language, with the table behind every answer.",
    example: "CPA rose 17%. TikTok drove the increase.",
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  },
  {
    n: "06",
    title: "AI suggestions",
    text: "Suggests specific changes with their likely impact, so you know what to test first.",
    example: "Move PKR 300K to Women 18–34 | Feed: +300 to +350 conversions",
    d: "M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z",
  },
];

// ---------------------------------------------------------------------------
// 3. AI DATA ENGINE (Section #engine)
// ---------------------------------------------------------------------------
export const engineData = {
  h2Option2: "Cerebro AI turns any source into one clean model.",
  leadOption2:
    "Connect a platform, build a connector for any other, or upload a sheet. Cerebro's AI maps, cleans and standardizes it into one model that your dashboards, reports and answers all share.",
  h2Option1: "One AI data engine for every source.",
  leadOption1:
    "Connect a platform, build a connector for any other, or upload a sheet. Cerebro's AI maps, cleans and standardizes it into one model that your dashboards, reports and answers all share.",

  sources: [
    {
      label: "Native connectors",
      d: "M12 22v-5M9 8V2M15 8V2M18 8v5a6 6 0 0 1-12 0V8z",
      steps: [
        ["Map fields", "Platform fields matched to Cerebro's data model"],
        ["Clean", "Duplicates and empty rows removed"],
        [
          "Standardize metrics",
          "Clicks, views and conversions aligned across platforms",
        ],
        [
          "Convert currency",
          "Spend converted to PKR with your exchange rate rule",
        ],
        ["Flag issues", "All accounts up to date"],
      ],
    },
    {
      label: "Custom connector",
      d: "M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z",
      steps: [
        ["Build connector", "AI drafted the connector from the API docs"],
        ["Map fields", "11 fields mapped, 3 for review"],
        ["Standardize metrics", "Spend and clicks aligned to Cerebro's metrics"],
        ["Convert currency", "Spend converted to PKR"],
        ["Flag issues", "No issues found"],
      ],
    },
    {
      label: "Upload a sheet",
      d: "M12 16V4M7 9l5-5 5 5M4 20h16",
      steps: [
        ["Map fields", "14 columns mapped by AI"],
        ["Clean", "6 empty rows removed"],
        ["Standardize metrics", "Column names matched to Cerebro metrics"],
        ["Convert currency", "Already in PKR, no conversion needed"],
        ["Flag issues", "2 rows missing dates flagged for review"],
      ],
    },
  ] as EngineSource[],

  nativeList: [
    {
      mark: "M",
      color: "#1877F2",
      name: "Meta Ads",
      status: "Live",
      pillBg: "#DCFCE7",
      pillFg: "#166534",
      logo: "/brand/platforms/meta.png",
    },
    {
      mark: "G",
      color: "#15803D",
      name: "Google Ads",
      status: "Live",
      pillBg: "#DCFCE7",
      pillFg: "#166534",
      logo: "/brand/platforms/google.png",
    },
    {
      mark: "T",
      color: "#111827",
      name: "TikTok Ads",
      status: "Live",
      pillBg: "#DCFCE7",
      pillFg: "#166534",
      logo: "/brand/platforms/tiktok.png",
    },
    {
      mark: "in",
      color: "#0A66C2",
      name: "LinkedIn Ads",
      status: "Coming soon",
      pillBg: "#F3F4F6",
      pillFg: "#5B6170",
      logo: "/brand/platforms/linkedin.png",
    },
    {
      mark: "DV",
      color: "#2563EB",
      name: "Display & Video 360",
      status: "Coming soon",
      pillBg: "#F3F4F6",
      pillFg: "#5B6170",
      logo: "/brand/platforms/dv360.png",
    },
  ] as EngineNativeItem[],

  sheetMapping: [
    { from: "Amount spent (PKR)", to: "Spend" },
    { from: "Impr.", to: "Impressions" },
    { from: "Link clicks", to: "Clicks" },
    { from: "Results", to: "Conversions" },
  ],

  outputs: [
    {
      label: "Dashboards",
      d: "M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v5H3z",
    },
    {
      label: "Report builder",
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8",
    },
    {
      label: "Hierarchy reports",
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
    },
    {
      label: "Ask Cerebro",
      d: "M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z",
    },
  ] as EngineOutput[],
};

// ---------------------------------------------------------------------------
// 4. ASK CEREBRO SECTION (Section #ask)
// ---------------------------------------------------------------------------
export const askSectionData = {
  h2: "Ask Cerebro, the analyst on top of your data.",
  lead: "Plain-language questions, answers with the numbers behind them, and a clear note when something is missing. Pick a question.",
  caption: "Demo data for a sample brand. Answers replayed from Ask Cerebro.",

  questions: [
    {
      q: "Summarize performance for the last 30 days",
      kind: "Summary across every client",
      dateLine:
        "21 Oct to 19 Nov 2026 vs the 30 days before, all clients, PKR",
      head: [
        { v: "Period" },
        { v: "Spend", a: "right" },
        { v: "Impressions", a: "right" },
        { v: "Clicks", a: "right" },
        { v: "CTR", a: "right" },
      ],
      rows: [
        [
          "Last 30 days",
          { v: "PKR 26.1M", a: "right" },
          { v: "173.3M", a: "right" },
          { v: "2.1M", a: "right" },
          { v: "1.21%", a: "right" },
        ],
        [
          "30 days before",
          { v: "PKR 28.8M", a: "right" },
          { v: "181.7M", a: "right" },
          { v: "2.2M", a: "right" },
          { v: "1.21%", a: "right" },
        ],
      ],
      narrative:
        "Across 6 clients, spend was PKR 26.1M, down 9.2% on the previous 30 days. Conversions were 78,497, down 6.7%, at a CPA of PKR 332 against PKR 342 before.",
      note: "USD 23.6K of spend has no stored exchange rate, so PKR totals are slightly understated.",
    },
    {
      q: "Compare platforms for Quillmere Textiles",
      kind: "Side-by-side comparison",
      dateLine: "Last 30 days, PKR",
      head: [
        { v: "Platform" },
        { v: "Spend", a: "right" },
        { v: "CTR", a: "right" },
        { v: "CPA", a: "right" },
      ],
      rows: [
        [
          "TikTok Ads",
          { v: "PKR 3.1M", a: "right" },
          { v: "0.91%", a: "right" },
          { v: "PKR 650.58", a: "right", c: "#B91C1C", w: 600 },
        ],
        [
          "Meta Ads",
          { v: "PKR 2.1M", a: "right" },
          { v: "1.26%", a: "right" },
          { v: "PKR 394.45", a: "right" },
        ],
        [
          "Google Ads",
          { v: "PKR 514.2K", a: "right" },
          { v: "3.02%", a: "right" },
          { v: "PKR 243.22", a: "right", c: "#15803D", w: 600 },
        ],
      ],
      narrative:
        "Google delivers the lowest CPA at PKR 243.22 with a 3.02% CTR. TikTok is the most expensive per sale at PKR 650.58, but 62% of its spend was allocated to brand awareness.",
    },
    {
      q: "Which campaigns are missing UTM tags?",
      kind: "Data health check",
      dateLine: "Quillmere Textiles, active campaigns",
      head: [
        { v: "Platform" },
        { v: "Campaign" },
        { v: "Issue", a: "right" },
      ],
      rows: [
        [
          "TikTok Ads",
          "Winter Collection | Launch",
          { v: "utm_source missing", a: "right", c: "#B91C1C", w: 600 },
        ],
        [
          "Meta Ads",
          "Meta campaign …0626",
          { v: "utm_campaign generic", a: "right", c: "#B45309", w: 600 },
        ],
      ],
      narrative:
        "2 active campaigns have incomplete tracking parameters. Traffic from these campaigns will show as direct or unassigned in Google Analytics.",
      note: "Click any campaign to view its landing page URL and tracking template.",
    },
    {
      q: "What should we change next month?",
      kind: "AI recommendations",
      dateLine: "Recommendations based on the last 30 days",
      head: [
        { v: "Priority" },
        { v: "Action" },
        { v: "Expected impact", a: "right" },
      ],
      rows: [
        [
          { v: "High", c: "#B91C1C", w: 600 },
          "Reallocate PKR 300K on Meta from Men 18–24 to Women 25–34",
          { v: "+300 to +350 conv.", a: "right", c: "#15803D", w: 600 },
        ],
        [
          { v: "Medium", c: "#B45309", w: 600 },
          "Shift TikTok budget to dedicated awareness goal",
          { v: "Accurate blended CPA", a: "right" },
        ],
        [
          { v: "Low", c: "#5B6170" },
          "Pause 2 creative variants with CTR < 0.5%",
          { v: "Save PKR 120K waste", a: "right" },
        ],
      ],
      narrative:
        "Three actions would improve account efficiency without increasing total budget. Women 25–34 continues to convert 21% below account average on Meta.",
      suggest: [
        "Draft reallocation plan for Meta",
        "Export campaign change checklist",
      ],
    },
  ] as AskQuestionItem[],
};

// ---------------------------------------------------------------------------
// 5. OBJECTIVE-BASED REPORTING
// ---------------------------------------------------------------------------
export const objectiveData = {
  h2Option2: "Cerebro AI judges every campaign by its own goal.",
  leadOption2:
    "An awareness campaign shouldn't be measured on cost per sale. Switch the lens and watch the verdict change.",
  h2Option1: "Judge every campaign by its own goal.",
  leadOption1:
    "An awareness campaign shouldn't be measured on cost per sale. Switch the lens and watch the verdict change.",

  options: [
    {
      tab: "Judge by CPA",
      label: "Judged on cost per sale",
      labelColor: "#B91C1C",
      verdict: "TikTok looks like the most expensive platform on the account.",
      explain:
        "Blended CPA puts awareness spend on the same scale as sales spend, so reach campaigns look wasteful.",
      scale: "CPA in PKR. Lower is better.",
      bars: [
        {
          name: "TikTok Ads",
          value: "PKR 650.58",
          pct: "100%",
          color: "#B91C1C",
          w: 600,
        },
        {
          name: "Meta Ads",
          value: "PKR 394.45",
          pct: "61%",
          color: "#C9CDD6",
          w: 400,
        },
        {
          name: "Google Ads",
          value: "PKR 243.22",
          pct: "37%",
          color: "#C9CDD6",
          w: 400,
        },
      ],
    },
    {
      tab: "Judge by its goal",
      label: "Judged on its goal: awareness",
      labelColor: "#15803D",
      verdict: "TikTok buys reach at the lowest cost of the three.",
      explain:
        "The same spend, measured against what it was set up to do. Cerebro reports each campaign against its own objective.",
      scale: "CPM in PKR. Lower is better.",
      bars: [
        {
          name: "TikTok Ads",
          value: "PKR 119.23",
          pct: "28%",
          color: "#15803D",
          w: 600,
        },
        {
          name: "Meta Ads",
          value: "PKR 177.97",
          pct: "42%",
          color: "#C9CDD6",
          w: 400,
        },
        {
          name: "Google Ads",
          value: "PKR 428.50",
          pct: "100%",
          color: "#C9CDD6",
          w: 400,
        },
      ],
    },
  ] as ObjectiveOption[],
};

// ---------------------------------------------------------------------------
// 6. BUILD SECTION (Section #build)
// ---------------------------------------------------------------------------
export interface WidgetDefinition {
  title: string;
  kind: string;
  type: "kpi" | "trend" | "donut" | "list" | "funnel";
  value?: string;
  delta?: string;
  deltaColor?: string;
  items?: { name: string; value: string }[];
}

export const buildData = {
  h2Option2: "Build views in clicks. Ask Cerebro explains them.",
  leadOption2:
    "Widget-based dashboards you edit yourself, a report builder for any cut of the data, and hierarchy reports from platform to a single ad. Try them.",
  h2Option1: "Build the views your team needs.",
  leadOption1:
    "Widget-based dashboards you edit yourself, a report builder for any cut of the data, and hierarchy reports from platform to a single ad. Try them.",

  widgetLibrary: {
    kpiSpend: {
      title: "Total spend",
      kind: "KPI",
      type: "kpi",
      value: "PKR 5.8M",
      delta: "↓ 5.23% vs last period",
      deltaColor: "#5B6170",
    },
    kpiCpa: {
      title: "CPA",
      kind: "KPI",
      type: "kpi",
      value: "PKR 468.81",
      delta: "↑ 16.97% vs last period",
      deltaColor: "#B91C1C",
    },
    kpiCtr: {
      title: "CTR",
      kind: "KPI",
      type: "kpi",
      value: "1.08%",
      delta: "↓ 9.02% vs last period",
      deltaColor: "#B91C1C",
    },
    trend: {
      title: "Spend trend",
      kind: "Trend",
      type: "trend",
    },
    donut: {
      title: "Spend by objective",
      kind: "Donut",
      type: "donut",
    },
    ranked: {
      title: "Top Meta campaigns by spend",
      kind: "Ranked list",
      type: "list",
      items: [
        { name: "Winter Collection | Launch", value: "PKR 1.1M" },
        { name: "Lawn Collection | Back to School", value: "PKR 824.2K" },
        { name: "Meta campaign …0626", value: "PKR 166K" },
      ],
    },
    platforms: {
      title: "Platforms by CPA",
      kind: "Table",
      type: "list",
      items: [
        { name: "Google Ads", value: "PKR 243.22" },
        { name: "Meta Ads", value: "PKR 394.45" },
        { name: "TikTok Ads", value: "PKR 650.58" },
      ],
    },
    funnel: {
      title: "Funnel",
      kind: "Funnel",
      type: "funnel",
    },
  } as Record<string, WidgetDefinition>,

  allWidgetKeys: [
    "kpiSpend",
    "kpiCpa",
    "kpiCtr",
    "trend",
    "donut",
    "ranked",
    "platforms",
    "funnel",
  ],
  initialWidgets: ["kpiSpend", "kpiCpa", "trend", "donut"],

  funnelItems: [
    { name: "Impressions", value: "39.1M", pct: "100%", color: "#2E2A82" },
    { name: "Clicks", value: "422.1K", pct: "72%", color: "#4F46E5" },
    { name: "Conversions", value: "12.3K", pct: "46%", color: "#6B7FE8" },
  ],

  // Report builder metric and dimension choices
  metricDefs: [
    { key: "spend", label: "Spend" },
    { key: "impr", label: "Impressions" },
    { key: "clicks", label: "Clicks" },
    { key: "ctr", label: "CTR" },
    { key: "cpm", label: "CPM" },
    { key: "cpr", label: "Cost per result" },
  ],

  reportData: {
    platform: [
      {
        name: "TikTok Ads",
        spend: "PKR 3.1M",
        impr: "26M",
        clicks: "235.9K",
        ctr: "0.91%",
        cpm: "PKR 119.23",
        cpr: "PKR 650.58",
      },
      {
        name: "Meta Ads",
        spend: "PKR 2.1M",
        impr: "11.8M",
        clicks: "149.6K",
        ctr: "1.26%",
        cpm: "PKR 177.97",
        cpr: "PKR 394.45",
      },
      {
        name: "Google Ads",
        spend: "PKR 514.2K",
        impr: "1.2M",
        clicks: "36.6K",
        ctr: "3.02%",
        cpm: "PKR 428.50",
        cpr: "PKR 243.22",
      },
    ],
    campaign: [
      {
        name: "Winter Collection | Launch",
        spend: "PKR 1.1M",
        impr: "6.3M",
        clicks: "80.1K",
        ctr: "1.26%",
        cpm: "PKR 174.60",
        cpr: "PKR 377.22",
      },
      {
        name: "Lawn Collection | Back to School",
        spend: "PKR 824.2K",
        impr: "4.6M",
        clicks: "57.5K",
        ctr: "1.25%",
        cpm: "PKR 179.17",
        cpr: "PKR 427.74",
      },
      {
        name: "Meta campaign …0626",
        spend: "PKR 166K",
        impr: "893.2K",
        clicks: "12.1K",
        ctr: "1.35%",
        cpm: "PKR 185.85",
        cpr: "PKR 366.37",
      },
    ],
  },

  // Hierarchy tree
  hierarchyNodes: {
    tiktok: {
      name: "TikTok Ads",
      spend: "PKR 3.1M",
      impr: "26M",
      clicks: "235.9K",
      ctr: "0.91%",
      cpr: "PKR 650.58",
    },
    meta: {
      name: "Meta Ads",
      spend: "PKR 2.1M",
      impr: "11.8M",
      clicks: "149.6K",
      ctr: "1.26%",
      cpr: "PKR 394.45",
      kids: ["winter", "lawn", "c0626"],
      level: "Campaign",
    },
    google: {
      name: "Google Ads",
      spend: "PKR 514.2K",
      impr: "1.2M",
      clicks: "36.6K",
      ctr: "3.02%",
      cpr: "PKR 243.22",
    },
    winter: {
      name: "Winter Collection | Launch | Awareness",
      spend: "PKR 1.1M",
      impr: "6.3M",
      clicks: "80.1K",
      ctr: "1.26%",
      cpr: "PKR 377.22",
      kids: ["parents", "g6404", "khi", "women"],
      level: "Ad set",
    },
    lawn: {
      name: "Lawn Collection | Back to School | Awareness",
      spend: "PKR 824.2K",
      impr: "4.6M",
      clicks: "57.5K",
      ctr: "1.25%",
      cpr: "PKR 427.74",
    },
    c0626: {
      name: "Meta campaign …0626",
      spend: "PKR 166K",
      impr: "893.2K",
      clicks: "12.1K",
      ctr: "1.35%",
      cpr: "PKR 366.37",
    },
    parents: {
      name: "Parents 28–45 | Feed",
      spend: "PKR 304.3K",
      impr: "1.7M",
      clicks: "21.6K",
      ctr: "1.26%",
      cpr: "PKR 377.06",
      kids: ["ad1", "ad2"],
      level: "Ad",
    },
    g6404: {
      name: "Meta ad group …6404",
      spend: "PKR 302.8K",
      impr: "1.7M",
      clicks: "21.5K",
      ctr: "1.27%",
      cpr: "PKR 377.05",
    },
    khi: {
      name: "Karachi + Lahore | Reels",
      spend: "PKR 266K",
      impr: "1.5M",
      clicks: "18.9K",
      ctr: "1.27%",
      cpr: "PKR 377.29",
    },
    women: {
      name: "Women 18–34 | Feed",
      spend: "PKR 253.3K",
      impr: "1.4M",
      clicks: "18K",
      ctr: "1.26%",
      cpr: "PKR 377.01",
    },
    ad1: {
      name: "Product feed v2",
      spend: "PKR 154.6K",
      impr: "868.4K",
      clicks: "11K",
      ctr: "1.27%",
      cpr: "PKR 376.97",
    },
    ad2: {
      name: "Story 9:16 v1",
      spend: "PKR 149.7K",
      impr: "841.2K",
      clicks: "10.6K",
      ctr: "1.27%",
      cpr: "PKR 377.15",
    },
  } as Record<
    string,
    {
      name: string;
      spend: string;
      impr: string;
      clicks: string;
      ctr: string;
      cpr: string;
      kids?: string[];
      level?: string;
    }
  >,
};

// ---------------------------------------------------------------------------
// 7. SOLUTIONS SECTION (Section #solutions)
// ---------------------------------------------------------------------------
export const solutionsData: SolutionItem[] = [
  {
    label: "Agencies",
    title: "Report on every client from one workspace.",
    lead: "One place to run reporting for every brand you manage, with access that keeps each client's data separate.",
    points: [
      "Each client gets its own dashboards, filters and connected accounts.",
      "Client viewer access shows clients their own results and nothing else.",
      "Shared widgets become your agency's reporting standard.",
    ],
    link: "Explore Cerebro for agencies",
    href: "/solutions/agencies",
  },
  {
    label: "Brands",
    title: "One view of paid media for marketing and leadership.",
    lead: "Marketing and leadership look at the same numbers, from every platform and every agency.",
    points: [
      "An executive overview that reads at a glance.",
      "Every campaign judged against its own objective.",
      "Leadership questions answered by Ask Cerebro in plain language.",
    ],
    link: "Explore Cerebro for brands",
    href: "/solutions/brands",
  },
  {
    label: "Banking and finance",
    title: "Paid media reporting with the access control finance expects.",
    lead: "Many products on many platforms in one view, with tight control over who sees what.",
    points: [
      "Roll campaigns up by product line.",
      "Roles, client-level permissions and an activity log.",
      "One dashboard for spend and results across every product.",
    ],
    link: "Explore Cerebro for banking and finance",
    href: "/industries/banking-and-finance",
  },
  {
    label: "Telecom",
    title: "Consolidated reporting for always-on campaigns.",
    lead: "Packages, devices and offers across every platform, in one consistent view.",
    points: [
      "Drill from platform to a single ad in one report.",
      "Roll campaigns up by package or offer.",
      "Ask what changed this week, and why.",
    ],
    link: "Explore Cerebro for telecom",
    href: "/industries/telecom",
  },
  {
    label: "FMCG",
    title: "Compare brand and product campaigns across every platform.",
    lead: "Awareness-heavy portfolios judged on the metrics that fit them.",
    points: [
      "Awareness campaigns judged on reach and CPM.",
      "Each brand on its own, or the whole portfolio together.",
      "Reach and frequency across Meta, Google and TikTok.",
    ],
    link: "Explore Cerebro for FMCG",
    href: "/industries/fmcg",
  },
  {
    label: "E-commerce",
    title: "Follow ad spend through to conversions and value.",
    lead: "Know which platforms, audiences and ads actually sell, including sources you upload as sheets.",
    points: [
      "CPA and conversion value side by side for every platform.",
      "Audience breakdowns by age and gender.",
      "Suggested fixes with their likely impact.",
    ],
    link: "Explore Cerebro for e-commerce",
    href: "/industries/ecommerce",
  },
];

export const teamData: TeamMember[] = [
  {
    initial: "A",
    name: "Ayesha Khan",
    role: "Operations admin",
    clients: "All clients",
  },
  {
    initial: "B",
    name: "Bilal Ahmed",
    role: "Operations analyst",
    clients: "All clients",
  },
  {
    initial: "H",
    name: "Hina Raza",
    role: "Media planner",
    clients: "All clients",
  },
  {
    initial: "S",
    name: "Sara Malik",
    role: "Client viewer",
    clients: "Northwind Foods",
  },
  {
    initial: "M",
    name: "Mehreen Iqbal",
    role: "Client viewer",
    clients: "Saffron Bank, Margalla Motors",
  },
];

// ---------------------------------------------------------------------------
// 8. OPTION 1: COMPARISON TABLE ("Less time collecting numbers...")
// ---------------------------------------------------------------------------
export const compareData = {
  h2: "Less time collecting numbers. More time deciding.",
  lead: "The reporting work your team does by hand today, handled by Cerebro.",
  items: [
    {
      task: "Collecting",
      without:
        "Exports from every platform, one at a time, pasted into a sheet.",
      with: "Connectors and sheet uploads land in one dataset automatically.",
    },
    {
      task: "Judging",
      without: "Awareness and sales campaigns judged on the same CPA.",
      with: "Each campaign judged against its own objective.",
    },
    {
      task: "Explaining",
      without: "Someone digs through tables to find why a number moved.",
      with: "Ask Cerebro explains it, with the numbers behind it.",
    },
    {
      task: "Reporting",
      without: "The same report rebuilt every month for every client.",
      with: "Widgets and reports built once and reused across clients.",
    },
    {
      task: "Sharing",
      without: "Clients get a PDF, or access to everything.",
      with: "Clients see their own dashboard and nothing else.",
    },
  ] as CompareItem[],
};

// ---------------------------------------------------------------------------
// 9. OPTION 1: TRUST CARDS ("Built to be trusted with client data.")
// ---------------------------------------------------------------------------
export const trustData = {
  h2: "Built to be trusted with client data.",
  linkText: "Read about security",
  linkHref: "/security",
  items: [
    {
      title: "Role-based access",
      text: "Six roles, from operations admin to client viewer.",
      d: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z",
    },
    {
      title: "Client-level permissions",
      text: "People only see the clients they are assigned to.",
      d: "M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4",
    },
    {
      title: "Activity log",
      text: "Exports, invitations and role changes are recorded.",
      d: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
    },
    {
      title: "Data issues flagged",
      text: "Every view shows how current its data is, and AI flags rows that need a look.",
      d: "M12 7v5l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z",
    },
  ] as TrustItem[],
};

// ---------------------------------------------------------------------------
// 10. INTEGRATIONS SECTION
// ---------------------------------------------------------------------------
export const integrationsData = {
  h2: "Every source lands in the same model.",
  lead: "Three ways in, one consistent dataset for dashboards, reports and Ask Cerebro.",
  customSteps: [
    { n: "1", text: "Describe the platform or share its API docs" },
    { n: "2", text: "AI drafts the connector and maps the fields" },
    { n: "3", text: "Review the mappings and go live" },
  ],
};
