/**
 * Replay data for the AskDemo interactive client component.
 * Follows docs/site-rules.md:
 * - No invented numbers beyond the sample Quillmere Textiles benchmark dataset.
 * - No em dashes.
 * - Confirmed copy structure.
 */

export interface AskStep {
  text: string;
}

export interface AskTableCol {
  key: string;
  label: string;
  align?: "left" | "right" | "center";
}

export interface AskTableRow {
  [key: string]: any;
  bold?: boolean;
}

export interface AskQuestionItem {
  id: "q1" | "q2" | "q3";
  tabLabel: string;
  question: string;
  // CONFIRM with product team: keep only if the real product shows its steps
  steps: string[];
  dateLine: string;
  columns: AskTableCol[];
  rows: AskTableRow[];
  narrative: string;
}

export const askDemoConfig = {
  // CONFIRM with product team: use one name, "Ask Cerebro", in the product and on the site
  panelTitle: "Ask Cerebro",
  contextLabel: "Quillmere Textiles, last 30 days",
  inputCta: {
    label: "Ask your own question in a demo",
    href: "/demo",
  },
  caption: "Demo data for a sample brand. Answers replayed from Ask Cerebro.",
};

// CONFIRM with product team: replace each answer with the exact text Ask Cerebro returns in the demo build
export const askQuestions: AskQuestionItem[] = [
  {
    id: "q1",
    tabLabel: "Why did CPA rise?",
    question: "Why did CPA rise in the last 30 days?",
    steps: [
      "Compared 21 Oct to 19 Nov with the 30 days before",
      "Split the change by platform",
      "Checked TikTok campaigns and their objectives",
      "Checked data coverage: complete for all three platforms",
    ],
    dateLine: "21 Oct to 19 Nov 2026 vs 21 Sep to 20 Oct 2026, PKR",
    columns: [
      { key: "platform", label: "Platform", align: "left" },
      { key: "cpaBefore", label: "CPA before", align: "right" },
      { key: "cpaNow", label: "CPA now", align: "right" },
      { key: "change", label: "Change", align: "right" },
    ],
    rows: [
      {
        platform: "TikTok Ads",
        cpaBefore: "PKR 440.68",
        cpaNow: "PKR 650.58",
        change: "+47.6%",
        direction: "up", // up arrow, negative
      },
      {
        platform: "Meta Ads",
        cpaBefore: "PKR 405.80",
        cpaNow: "PKR 394.45",
        change: "-2.8%",
        direction: "down", // down arrow, positive
      },
      {
        platform: "Google Ads",
        cpaBefore: "PKR 291.67",
        cpaNow: "PKR 243.22",
        change: "-16.6%",
        direction: "down", // down arrow, positive
      },
      {
        platform: "All platforms",
        cpaBefore: "PKR 400.79",
        cpaNow: "PKR 468.81",
        change: "+17.0%",
        direction: "up",
        bold: true,
      },
    ],
    narrative:
      "CPA rose 17% to PKR 468.81. TikTok drove the increase: spend there grew from PKR 2.6M to PKR 3.1M while conversions fell from 5.9K to 4.8K. Most of the extra TikTok spend went to Winter Collection | Launch, an awareness campaign. Meta and Google Ads both got cheaper per conversion.",
  },
  {
    id: "q2",
    tabLabel: "Best audience on Meta?",
    question: "Which audience converts best on Meta?",
    steps: [
      "Pulled Meta results by age and gender",
      "Compared each audience with the Meta average CPA",
      "Checked data coverage: complete",
    ],
    dateLine: "21 Oct to 19 Nov 2026, Meta Ads, PKR",
    columns: [
      { key: "audience", label: "Audience", align: "left" },
      { key: "conversions", label: "Conversions", align: "right" },
      { key: "share", label: "Share", align: "right" },
      { key: "cpa", label: "CPA", align: "right" },
    ],
    rows: [
      {
        audience: "Women 25-34",
        conversions: "1,900",
        share: 35,
        cpa: "PKR 312.00",
      },
      {
        audience: "Women 18-24",
        conversions: "1,200",
        share: 22,
        cpa: "PKR 398.00",
      },
      {
        audience: "Men 25-34",
        conversions: "900",
        share: 17,
        cpa: "PKR 441.00",
      },
      {
        audience: "Women 35-44",
        conversions: "800",
        share: 15,
        cpa: "PKR 356.00",
      },
      {
        audience: "Men 18-24",
        conversions: "600",
        share: 11,
        cpa: "PKR 630.00",
      },
    ],
    narrative:
      "Women 25-34 bring in 35% of Meta conversions at PKR 312 each, 21% below the Meta average of PKR 394.45. Men 18-24 cost PKR 630 per conversion, 60% above average.",
  },
  {
    id: "q3",
    tabLabel: "How do we bring CPA down?",
    question: "What should we change to bring CPA down next month?",
    steps: [
      "Ranked ad sets and ads by CPA",
      "Found budget that could move to cheaper audiences",
      "Estimated the likely impact of each change",
    ],
    dateLine: "Based on 21 Oct to 19 Nov 2026, PKR",
    columns: [
      { key: "change", label: "Change", align: "left" },
      { key: "impact", label: "Likely impact", align: "right" },
    ],
    rows: [
      {
        change: "Move PKR 300K from TikTok sales campaigns to the Meta ad set Women 18-34 | Feed",
        impact: "+300 to +350 conversions",
      },
      {
        change: "On Meta, shift budget from Men 18-24 to Women 25-34",
        impact: "+250 to +300 conversions",
      },
      {
        change: "Pause 2 TikTok ads with CTR below 0.4%",
        impact: "Save about PKR 120K",
      },
    ],
    narrative:
      "Together these could bring CPA to about PKR 430 to 445. The estimates assume current costs hold as budgets grow, which often isn't the case, so test changes over two weeks.",
  },
];
