/**
 * Data for Solutions and Industry pages.
 * Source: handoff/design/Solution.dc.html and Home2.dc.html
 */

export interface SolutionPageData {
  slug: string;
  category: "Solutions" | "Industries";
  eyebrow: string;
  title: string;
  lead: string;
  seoTitle: string;
  seoDesc: string;
  canonical: string;
  clientsPreview: {
    title: string;
    org: string;
    items: {
      name: string;
      initials: string;
      color: string;
      access: string;
      status?: string;
    }[];
  };
  painsTitle: string;
  pains: {
    title: string;
    text: string;
  }[];
  featuresTitle: string;
  features: {
    title: string;
    text: string;
    kind: "sources" | "team" | "widgets" | "ai";
    aiEyebrow?: string;
    aiQuestion?: string;
    aiAnswer?: string;
  }[];
  questionsTitle: string;
  questions: string[];
  quote: {
    text: string;
    author: string;
  };
  faqTitle: string;
  faq: {
    q: string;
    a: string;
  }[];
}

export const solutionsData: Record<string, SolutionPageData> = {
  agencies: {
    slug: "agencies",
    category: "Solutions",
    eyebrow: "For marketing agencies",
    title: "Report on every client from one workspace.",
    lead: "Bring in every client’s platforms and sheets, let Cerebro AI clean and standardize them, and give each client a view of their own results and nothing else.",
    seoTitle: "Cerebro for Advertising Agencies | Cerebro DNano",
    seoDesc: "Automate reporting across every client account. Standardize multi-channel advertising performance from Meta, Google, and TikTok.",
    canonical: "https://cerebro.media/solutions/agencies",
    clientsPreview: {
      title: "Clients",
      org: "Sample Agency",
      items: [
        { name: "Quillmere Textiles", initials: "QT", color: "#4F46E5", access: "Agency team" },
        { name: "Saffron Bank", initials: "SB", color: "#B45309", access: "Client viewer: Mehreen Iqbal" },
        { name: "Northwind Foods", initials: "NF", color: "#15803D", access: "Client viewer: Sara Malik" },
        { name: "Margalla Motors", initials: "MM", color: "#2E2A82", access: "Client viewer: Mehreen Iqbal" },
        { name: "Kohistan Water", initials: "KW", color: "#0E7490", access: "Agency team" },
      ],
    },
    painsTitle: "Agency reporting breaks in the same three places.",
    pains: [
      {
        title: "Every client is set up differently",
        text: "Different platforms, accounts, naming and currencies make every report a one-off.",
      },
      {
        title: "Reports rebuilt every month",
        text: "Analysts spend reporting week exporting, pasting and checking numbers by hand.",
      },
      {
        title: "Access is all or nothing",
        text: "Clients want to see their own results without seeing anyone else’s.",
      },
    ],
    featuresTitle: "How Cerebro runs agency reporting.",
    features: [
      {
        title: "Bring in every client’s data, any way",
        text: "Native connectors for Meta, Google and TikTok, AI-built connectors for any other platform, and sheet uploads for everything else. All of it lands in one clean model per client.",
        kind: "sources",
      },
      {
        title: "Access by role and by client",
        text: "Six roles, from operations admin to client viewer. Limit anyone to the clients they work on, and give clients a view of their own results.",
        kind: "team",
      },
      {
        title: "Your agency’s reporting standard",
        text: "Build a widget once, save it as a shared widget, and drop it into any client’s dashboard. Every client report looks and reads the same way.",
        kind: "widgets",
      },
      {
        title: "An analyst for every client",
        text: "Ask Cerebro summarizes performance across all your clients, or digs into one, in plain language with the numbers behind it.",
        kind: "ai",
        aiEyebrow: "Cerebro AI",
        aiQuestion: "Summarize performance for the last 30 days",
        aiAnswer:
          "Across 6 clients, spend was PKR 26.1M, down 9.2% on the previous 30 days. Conversions were 78,497, down 6.7%, at a CPA of PKR 332 against PKR 342 before.",
      },
    ],
    questionsTitle: "Questions agency teams ask Cerebro.",
    questions: [
      "Summarize performance for the last 30 days",
      "Why did CPA rise for this client?",
      "Compare platforms for this client",
      "Which ad sets cost more than average?",
      "Check data dates",
    ],
    quote: {
      text: "[Agency client quote, approved in writing by the person quoted.]",
      author: "[Name], [Role], [Agency]",
    },
    faqTitle: "Agency questions",
    faq: [
      {
        q: "Can each client see only their own data?",
        a: "Yes. Client viewer and client admin roles only see the clients they are assigned to.",
      },
      {
        q: "Can we add a platform that has no native connector?",
        a: "Yes. Build a connector with AI help, ask our team to build it, or upload exports as CSV, Excel or Google Sheets.",
      },
      {
        q: "Can we report in PKR for accounts billed in USD?",
        a: "Yes. Spend is converted with clear exchange rate rules, and anything that could not be converted is flagged.",
      },
      {
        q: "Can we brand client dashboards with our own logo?",
        a: "Client workspaces support personalized client headings and shared widget standards across all brand dashboards.",
      },
    ],
  },

  brands: {
    slug: "brands",
    category: "Solutions",
    eyebrow: "For in-house marketing teams",
    title: "One view of paid media for marketing and leadership.",
    lead: "Marketing and leadership look at the same numbers, from every platform and every agency. Judge every campaign by its goal, and ask questions in plain language.",
    seoTitle: "Cerebro for Brands & Marketing Teams | Cerebro DNano",
    seoDesc: "Unify in-house and agency ad reporting. Single source of truth for paid media spend and performance.",
    canonical: "https://cerebro.media/solutions/brands",
    clientsPreview: {
      title: "Brand Portfolios",
      org: "Enterprise Marketing",
      items: [
        { name: "Flagship Retail", initials: "FR", color: "#4F46E5", access: "Full Portfolio" },
        { name: "Direct to Consumer", initials: "DC", color: "#0E7490", access: "E-comm Division" },
        { name: "Brand Awareness Q4", initials: "BA", color: "#15803D", access: "Executive Team" },
        { name: "Seasonal Promo", initials: "SP", color: "#B45309", access: "Agency Partner" },
      ],
    },
    painsTitle: "In-house reporting challenges.",
    pains: [
      {
        title: "Disconnected channels and agencies",
        text: "Different agencies and platform managers share reports in different formats on different dates.",
      },
      {
        title: "Misjudged campaigns",
        text: "Awareness initiatives penalized by blended CPA, while conversion campaigns lack clear attribution.",
      },
      {
        title: "Ad-hoc executive questions",
        text: "Leadership requests take days of manual spreadsheet assembly before getting an answer.",
      },
    ],
    featuresTitle: "How Cerebro powers brand reporting.",
    features: [
      {
        title: "Unify agency and in-house data",
        text: "Connect internal ad accounts alongside agency partners into one consolidated brand workspace.",
        kind: "sources",
      },
      {
        title: "Role-based team permissions",
        text: "Keep executive views simple while giving brand managers deep ad set and creative drill-downs.",
        kind: "team",
      },
      {
        title: "Standardized objective metrics",
        text: "Evaluate reach campaigns on CPM and conversion campaigns on true cost per acquisition.",
        kind: "widgets",
      },
      {
        title: "Plain-language executive insights",
        text: "Ask Cerebro provides instantaneous executive answers backed by the underlying data tables.",
        kind: "ai",
        aiEyebrow: "Cerebro AI",
        aiQuestion: "Which campaign drove the highest ROI this month?",
        aiAnswer:
          "Winter Collection delivered 4.2x ROAS across Meta and Google, accounting for 62% of total online conversions.",
      },
    ],
    questionsTitle: "Questions brand leaders ask Cerebro.",
    questions: [
      "What is our blended CPA across all channels?",
      "How is our agency budget pacing this month?",
      "Which platform gave us the best incremental reach?",
      "Where are we seeing ad fatigue?",
    ],
    quote: {
      text: "[Brand leadership quote, approved in writing by the person quoted.]",
      author: "[Name], [Head of Marketing], [Brand]",
    },
    faqTitle: "Brand reporting questions",
    faq: [
      {
        q: "Can our agencies connect their accounts without giving full access?",
        a: "Yes. Connectors use read-only API scopes for performance reporting.",
      },
      {
        q: "How frequently does campaign data refresh?",
        a: "Data syncs automatically on a daily schedule, with on-demand refresh available at any time.",
      },
    ],
  },

  "banking-and-finance": {
    slug: "banking-and-finance",
    category: "Industries",
    eyebrow: "Banking & Financial Services",
    title: "Paid media reporting with the access control finance expects.",
    lead: "Many financial products on many platforms in one unified view, with granular control over who sees what and complete audit visibility.",
    seoTitle: "Ad Analytics for Banking and Finance | Cerebro DNano",
    seoDesc: "Compliant paid media reporting for financial institutions. Role-based isolation, auditable data handling.",
    canonical: "https://cerebro.media/industries/banking-and-finance",
    clientsPreview: {
      title: "Product Lines",
      org: "Saffron Bank & Partners",
      items: [
        { name: "Consumer Credit", initials: "CC", color: "#B45309", access: "Product Team" },
        { name: "Auto Loans", initials: "AL", color: "#1E3A8A", access: "Lending Dept" },
        { name: "Digital Accounts", initials: "DA", color: "#15803D", access: "Acquisition Division" },
        { name: "Wealth Management", initials: "WM", color: "#4F46E5", access: "Private Banking" },
      ],
    },
    painsTitle: "Financial media reporting bottlenecks.",
    pains: [
      {
        title: "Strict data isolation requirements",
        text: "Product teams and external agencies must not see unassigned campaign financial data.",
      },
      {
        title: "Audit and compliance oversight",
        text: "Regulatory scrutiny requires clear logging of who accessed and exported advertising spend reports.",
      },
      {
        title: "Disparate conversion funnels",
        text: "Application starts, branch visits, and completed approvals tracked across fragmented systems.",
      },
    ],
    featuresTitle: "How Cerebro supports financial media.",
    features: [
      {
        title: "Enterprise role separation",
        text: "Six distinct roles with client-level and product-level isolation to ensure strict confidentiality.",
        kind: "team",
      },
      {
        title: "Multi-product rollup views",
        text: "Consolidate spend across cards, loans, and digital onboarding into a unified executive dashboard.",
        kind: "widgets",
      },
      {
        title: "Auditable data pipeline",
        text: "Every export, role change, and data sync is timestamped and recorded in system activity logs.",
        kind: "sources",
      },
      {
        title: "Verified analytical calculations",
        text: "Ask Cerebro explains cost per approved application with complete mathematical transparency.",
        kind: "ai",
        aiEyebrow: "Cerebro AI",
        aiQuestion: "Compare cost per account open across digital channels",
        aiAnswer:
          "Google Search delivered digital accounts at PKR 420 CPA, 28% cheaper than social display channels.",
      },
    ],
    questionsTitle: "Questions financial teams ask Cerebro.",
    questions: [
      "What is our acquisition cost per funded account?",
      "How did Google Ads cost per lead trend this quarter?",
      "Which campaigns have incomplete tracking tags?",
    ],
    quote: {
      text: "[Finance executive quote, approved in writing by the person quoted.]",
      author: "[Name], [Head of Digital Marketing], [Financial Institution]",
    },
    faqTitle: "Compliance and security questions",
    faq: [
      {
        q: "Does Cerebro store personally identifiable customer data?",
        a: "No. Cerebro only ingests aggregated ad campaign performance metrics, never individual customer PII.",
      },
      {
        q: "Can we export an activity log for internal audit?",
        a: "Yes. All administrative actions and report downloads are logged and exportable.",
      },
    ],
  },

  telecom: {
    slug: "telecom",
    category: "Industries",
    eyebrow: "Telecommunications",
    title: "Consolidated reporting for always-on campaigns.",
    lead: "Packages, devices, data bundles, and postpaid offers across Meta, Google, and TikTok in one consistent, real-time hierarchy view.",
    seoTitle: "Paid Media Analytics for Telecom | Cerebro DNano",
    seoDesc: "Multi-channel advertising consolidation for telecom operators. Track high-velocity packages and device promos.",
    canonical: "https://cerebro.media/industries/telecom",
    clientsPreview: {
      title: "Offer Portfolios",
      org: "National Telecom",
      items: [
        { name: "5G Postpaid", initials: "5G", color: "#1D4ED8", access: "Postpaid Ops" },
        { name: "Prepaid Data Bundles", initials: "PD", color: "#4F46E5", access: "Retail Marketing" },
        { name: "Handset Bundles", initials: "HB", color: "#B45309", access: "Device Partnerships" },
        { name: "Digital App Installs", initials: "DA", color: "#15803D", access: "Growth Division" },
      ],
    },
    painsTitle: "Telecom media velocity challenges.",
    pains: [
      {
        title: "High campaign volume",
        text: "Hundreds of active localized ad sets and creative variants running simultaneously across platforms.",
      },
      {
        title: "Frequent pricing updates",
        text: "Rapid tariff changes require quick performance verification before ad spend is wasted.",
      },
      {
        title: "Multi-platform frequency overlap",
        text: "Difficulty measuring deduplicated reach and frequency across social and video channels.",
      },
    ],
    featuresTitle: "How Cerebro streamlines telecom analytics.",
    features: [
      {
        title: "Hierarchy drill-down in clicks",
        text: "Navigate instantly from top-level channel spend down to campaigns, ad sets, and individual ad creative.",
        kind: "widgets",
      },
      {
        title: "Automated daily ingestion",
        text: "Eliminate manual spreadsheet collation with scheduled multi-channel API syncs.",
        kind: "sources",
      },
      {
        title: "Custom connector flexibility",
        text: "Integrate programmatic networks and local publishers alongside Meta, Google, and TikTok.",
        kind: "team",
      },
      {
        title: "Instant anomaly detection",
        text: "Ask Cerebro flags sudden CPA spikes or dropped conversion tracking within seconds.",
        kind: "ai",
        aiEyebrow: "Cerebro AI",
        aiQuestion: "Which prepaid data bundle had the lowest CPC this week?",
        aiAnswer:
          "Weekly Mega Pass drove 142K clicks on TikTok at PKR 1.45 CPC, outperforming other bundle variants by 34%.",
      },
    ],
    questionsTitle: "Questions telecom teams ask Cerebro.",
    questions: [
      "Why did app install cost increase this weekend?",
      "Which package creative had the highest video completion rate?",
      "How is our regional campaign budget pacing?",
    ],
    quote: {
      text: "[Telecom marketing director quote, approved in writing by the person quoted.]",
      author: "[Name], [Director of Media], [Telecom Operator]",
    },
    faqTitle: "Telecom reporting questions",
    faq: [
      {
        q: "Can Cerebro handle large numbers of ad sets?",
        a: "Yes. The data model is optimized for high-volume accounts with thousands of concurrent ad elements.",
      },
    ],
  },

  fmcg: {
    slug: "fmcg",
    category: "Industries",
    eyebrow: "Fast-Moving Consumer Goods",
    title: "Compare brand and product campaigns across every platform.",
    lead: "Awareness-heavy FMCG portfolios judged on the metrics that actually fit them: CPM, video completion, reach, and retail store visits.",
    seoTitle: "FMCG Brand Portfolio Ad Analytics | Cerebro DNano",
    seoDesc: "Measure brand awareness and retail lift across multi-brand FMCG portfolios on Meta, TikTok, and Google.",
    canonical: "https://cerebro.media/industries/fmcg",
    clientsPreview: {
      title: "Brand Categories",
      org: "Consumer Goods Group",
      items: [
        { name: "Personal Care", initials: "PC", color: "#0E7490", access: "Brand Team" },
        { name: "Beverages & Teas", initials: "BT", color: "#15803D", access: "Category Lead" },
        { name: "Packaged Foods", initials: "PF", color: "#B45309", access: "Media Planner" },
        { name: "Household Cleaners", initials: "HC", color: "#4F46E5", access: "Brand Team" },
      ],
    },
    painsTitle: "FMCG advertising measurement hurdles.",
    pains: [
      {
        title: "Sales CPA misapplied to reach campaigns",
        text: "Evaluating top-of-funnel brand films on e-commerce sales conversion formulas skews budget allocation.",
      },
      {
        title: "Portfolio fragmentation",
        text: "Multiple brand managers and creative shops reporting in siloed documents with conflicting KPIs.",
      },
      {
        title: "Off-platform sales gap",
        text: "Retail sales happen in supermarkets, requiring clear distinction between media delivery and digital claims.",
      },
    ],
    featuresTitle: "How Cerebro supports FMCG brands.",
    features: [
      {
        title: "Objective-aligned reporting",
        text: "Measure awareness campaigns on reach, CPM, and full video views instead of inaccurate blended sales CPA.",
        kind: "widgets",
      },
      {
        title: "Portfolio category rollup",
        text: "View media investment across your entire brand umbrella or filter by individual product line.",
        kind: "team",
      },
      {
        title: "Unified video asset metrics",
        text: "Standardize 2-second, 6-second, and 100% video completion rates across TikTok, YouTube, and Meta Reels.",
        kind: "sources",
      },
      {
        title: "Portfolio reach explanations",
        text: "Ask Cerebro breaks down audience overlap and frequency efficiency across channels.",
        kind: "ai",
        aiEyebrow: "Cerebro AI",
        aiQuestion: "Which video asset achieved the lowest cost per completed view?",
        aiAnswer:
          "The 15-second recipe teaser delivered 820K completed views on TikTok at PKR 0.42 CPV.",
      },
    ],
    questionsTitle: "Questions FMCG brand managers ask Cerebro.",
    questions: [
      "What was our net reach across Meta and TikTok for the launch?",
      "Which product line achieved the lowest CPM this quarter?",
      "How did video retention differ between 15s and 30s cuts?",
    ],
    quote: {
      text: "[FMCG brand lead quote, approved in writing by the person quoted.]",
      author: "[Name], [Brand Director], [FMCG Enterprise]",
    },
    faqTitle: "FMCG measurement questions",
    faq: [
      {
        q: "Can we upload supermarket retail sales data?",
        a: "Yes. Sheet uploads allow you to match offline sales spreadsheets alongside digital ad spend.",
      },
    ],
  },

  ecommerce: {
    slug: "ecommerce",
    category: "Industries",
    eyebrow: "E-commerce & D2C",
    title: "Follow ad spend through to conversions and value.",
    lead: "Know which platforms, audiences, and creative variations actually generate profitable orders, with blended ROAS and true acquisition costs.",
    seoTitle: "E-commerce & D2C Ad Analytics | Cerebro DNano",
    seoDesc: "Unified performance reporting from impressions to checkout. Compare Meta, Google, and TikTok conversion value.",
    canonical: "https://cerebro.media/industries/ecommerce",
    clientsPreview: {
      title: "Storefront Metrics",
      org: "D2C Brands",
      items: [
        { name: "Apparel Store", initials: "AS", color: "#4F46E5", access: "Growth Team" },
        { name: "Footwear Line", initials: "FL", color: "#B45309", access: "Paid Media" },
        { name: "Beauty & Skin", initials: "BS", color: "#15803D", access: "Founder View" },
        { name: "Accessories", initials: "AC", color: "#0E7490", access: "Growth Team" },
      ],
    },
    painsTitle: "E-commerce attribution struggles.",
    pains: [
      {
        title: "Platform over-reporting",
        text: "Meta, Google, and TikTok each claim credit for the same transaction, inflating perceived performance.",
      },
      {
        title: "Hidden blended cost rises",
        text: "Overall ad spend climbs while incremental orders stagnate, obscuring real customer acquisition costs.",
      },
      {
        title: "Manual UTM maintenance",
        text: "Untagged campaigns and broken tracking URLs create direct and unassigned traffic black holes.",
      },
    ],
    featuresTitle: "How Cerebro scales e-commerce brands.",
    features: [
      {
        title: "Blended and platform metrics side by side",
        text: "Compare platform-reported ROAS directly against store revenue and overall spend reality.",
        kind: "widgets",
      },
      {
        title: "Audience demographic profitability",
        text: "Identify high-converting age and gender segments and reallocate budget from unprofitable demographics.",
        kind: "team",
      },
      {
        title: "Automated tracking health audits",
        text: "Detect missing UTM parameters before spending tens of thousands of rupees on unmeasured ads.",
        kind: "sources",
      },
      {
        title: "AI profit recommendations",
        text: "Ask Cerebro recommends specific budget shifts from low-return ad sets to top-performing audiences.",
        kind: "ai",
        aiEyebrow: "Cerebro AI",
        aiQuestion: "How do we cut CPA without reducing orders next month?",
        aiAnswer:
          "Reallocate PKR 300K from Men 18–24 to Women 25–34 on Meta, generating an estimated 300 to 350 incremental orders.",
      },
    ],
    questionsTitle: "Questions e-commerce founders ask Cerebro.",
    questions: [
      "What is our true blended ROAS this week?",
      "Which creative format drives the highest average order value?",
      "Which campaigns have missing or broken UTM tags?",
    ],
    quote: {
      text: "[E-commerce founder quote, approved in writing by the person quoted.]",
      author: "[Name], [Founder & CEO], [D2C Brand]",
    },
    faqTitle: "E-commerce reporting questions",
    faq: [
      {
        q: "Can we connect Shopify or custom order sheets?",
        a: "Yes. In addition to ad network APIs, you can upload order and revenue exports via CSV or Google Sheets.",
      },
    ],
  },
};
