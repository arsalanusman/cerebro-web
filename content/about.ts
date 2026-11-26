import { SITE } from "@/lib/site";

export interface RoadmapMilestone {
  period: string;
  year: string;
  title: string;
  badge: "Delivered" | "Current" | "Upcoming";
  description: string;
  deliverables: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  department: string;
  bio: string;
  initials: string;
  photo?: string;
  linkedinHref?: string;
  twitterHref?: string;
  stack?: string[];
}

export const aboutData = {
  seoTitle: "About Cerebro dNano | Team, Mission & Roadmap",
  seoDesc:
    "We build the AI data engine for paid media. Learn about our leadership, our tech engineering team, and the horizontal product roadmap from Karachi, Pakistan.",

  // Story & Mission
  mission: {
    badge: "OUR MISSION",
    title: "Bringing clarity, consistency, and intelligence to paid media.",
    lead: "Cerebro dNano transforms fragmented ad reporting into an automated, auditable single source of truth.",
  },

  // Horizontal Timeline / Product Roadmap: "How We Got Here"
  roadmap: [
    {
      period: "Q1 2023",
      year: "2023",
      title: "Founding & Core Problem",
      badge: "Delivered",
      description:
        "Frustrated by dozens of manual hours spent pulling ad platform spreadsheets, our founders set out to build an automated data consolidation pipeline.",
      deliverables: [
        "Inception of Cerebro unified data schema",
        "Initial prototype for enterprise agency clients",
        "Raw data ingestion pipeline design",
      ],
    },
    {
      period: "Q3 2023",
      year: "2023",
      title: "Direct API Ingestion Engine",
      badge: "Delivered",
      description:
        "Built robust, rate-limited direct API connectors for Meta Ads and Google Ads with automated daily synchronization and currency normalization.",
      deliverables: [
        "Meta Ads & Google Ads API connectors",
        "Automated daily sync with self-healing retries",
        "PKR / multi-currency exchange rate normalization",
      ],
    },
    {
      period: "Q1 2024",
      year: "2024",
      title: "TikTok Connector & Objective Model",
      badge: "Delivered",
      description:
        "Expanded coverage to TikTok Ads and introduced objective-based reporting, preventing brand awareness campaigns from being penalized by conversion metrics.",
      deliverables: [
        "TikTok Marketing API integration",
        "Platform objective vs. client objective mapping",
        "Executive overview dashboard widgets",
      ],
    },
    {
      period: "Q3 2024",
      year: "2024",
      title: "Cerebro AI Analyst Launch",
      badge: "Delivered",
      description:
        "Released Ask Cerebro: an AI analyst directly wired to the consolidated database, computing exact metric answers with full audit steps.",
      deliverables: [
        "Deterministic SQL/query synthesis from plain language",
        "Audit step transparency for every computed answer",
        "Instant CSV export & contextual drill-downs",
      ],
    },
    {
      period: "Q4 2024",
      year: "2024",
      title: "Custom Builder & Role-Based Access",
      badge: "Current",
      description:
        "Launched drag-and-drop Report Builder, client isolation partitions for agencies, and automated weekly digest delivery.",
      deliverables: [
        "Multi-metric custom report builder",
        "Strict client-level role permissions (Viewer/Admin)",
        "Automated scheduled client email reporting",
      ],
    },
    {
      period: "2025+",
      year: "2025",
      title: "Autonomous Optimization & Forecasting",
      badge: "Upcoming",
      description:
        "Next-generation cross-platform budget rebalancing recommendations, anomaly alerts, and predictive ROAS forecasting.",
      deliverables: [
        "Predictive fatigue and audience saturation alerts",
        "AI-guided cross-network budget reallocation",
        "Custom enterprise API & warehouse syncing",
      ],
    },
  ] as RoadmapMilestone[],

  // Team: Our Leaders
  leaders: [
    {
      name: "Zaayer Merchant",
      role: "Vice Chairman",
      department: "Executive Leadership",
      bio: "Over 7 years across brand strategy, media planning, and operations, with experience at Starcom Chicago, Z2C Limited, and Northwestern University. Co-founded BEGIN with a focus on human-first growth.",
      initials: "ZM",
      linkedinHref: "https://www.linkedin.com/company/cerebro-media",
    },
    {
      name: "Fatima Hyder",
      role: "Chief Strategy Officer & Co-Founder",
      department: "Strategy & Co-Founding",
      bio: "Over 15 years in media strategy and agency leadership across Pakistan and Canada, including senior roles at Z2C Limited, Brainchild Communications, and Mindshare.",
      initials: "FH",
      linkedinHref: "https://www.linkedin.com/company/cerebro-media",
    },
    {
      name: "Arshad Ali",
      role: "CEO, bSecure",
      department: "Executive Advisory",
      bio: "Over 8 years leading product, digital, and fintech innovation, with senior roles at Silkbank, Bank of Punjab, and Khushhali Microfinance Bank. Currently driving secure digital commerce as CEO of bSecure.",
      initials: "AA",
      linkedinHref: "https://www.linkedin.com/company/cerebro-media",
    },
  ] as TeamMember[],

  // Team: Our Tech Team
  techTeam: [
    {
      name: "Muhammad Ali Shah",
      role: "Senior Project Manager",
      department: "Project Management",
      bio: "Managing projects and cross-functional teams, overseeing project planning and execution, ensuring timely delivery, risk management, and maintaining effective resource allocation.",
      initials: "MS",
      stack: [
        "Project Planning & Execution",
        "Team Leadership",
        "Risk Management",
        "Time & Resource Management",
        "Communication Management",
      ],
    },
    {
      name: "Muhammad Imran",
      role: "Lead Product Designer UX/CX",
      department: "Product & UX/CX Design",
      bio: "Designing and leading end-to-end digital product experiences, translating business requirements into intuitive user journeys, scalable design systems, and high-performing web and mobile products. Experienced in product strategy, UX research, stakeholder collaboration, and hands-on design leadership with 8+ years of experience.",
      initials: "MI",
      stack: [
        "Figma",
        "Design Systems",
        "Product Strategy",
        "UX Research",
        "UI/UX Design",
        "Prototyping",
        "Journey Mapping",
        "Usability Testing",
      ],
    },
    {
      name: "Muhammad Irfan",
      role: "Data Analytics & Automation Lead",
      department: "Data Engineering & Automation",
      bio: "10 years in data engineering, ETL automation, and analytics: building end-to-end pipelines across Google Ads, Meta, TikTok, and DV360 into SQL Server, with deep expertise in Python, Power BI, and AWS.",
      initials: "MI",
      stack: [
        "Python",
        "AWS",
        "Google Ads API",
        "Meta Graph API",
        "SQL Server",
        "Power BI",
        "ETL Automation",
      ],
    },
    {
      name: "Muhammad Hassan",
      role: "Manager, Data & Analytics Software Development",
      department: "Software Engineering",
      bio: "Builder of data-driven SaaS products: currently engineering Cerebro at Brainchild Communications, with prior experience spanning enterprise ETL pipelines, Qlik Sense dashboards, and robust database systems.",
      initials: "MH",
      stack: [
        "SaaS Architecture",
        "ETL Pipelines",
        "Database Systems",
        "Qlik Sense",
        "Data Modeling",
      ],
    },
    {
      name: "Nashit",
      role: "Manager, Data & Analytics Software Development",
      department: "Software Engineering",
      bio: "Builder of data-driven SaaS products: currently engineering Cerebro at Brainchild Communications, with prior experience spanning enterprise ETL pipelines, Qlik Sense dashboards, and robust database systems.",
      initials: "NA",
      stack: [
        "SaaS Architecture",
        "ETL Pipelines",
        "Database Systems",
        "Data Modeling",
        "Qlik Sense",
      ],
    },
  ] as TeamMember[],

  // Who Cerebro is For
  who: [
    {
      title: "Digital agencies",
      text: "Report on many clients and platforms from one workspace.",
      href: "/solutions/agencies",
    },
    {
      title: "Banking and finance",
      text: "Track advertising across product lines with tight access control.",
      href: "/industries/banking-and-finance",
    },
    {
      title: "Telecom",
      text: "Consolidate large, always-on campaigns across platforms.",
      href: "/industries/telecom",
    },
    {
      title: "FMCG",
      text: "Compare brand and product campaigns judged on the right goal.",
      href: "/industries/fmcg",
    },
    {
      title: "E-commerce",
      text: "Follow spend through to conversions and conversion value.",
      href: "/industries/ecommerce",
    },
  ],

  // Working Principles
  principles: [
    {
      title: "One model, one standard.",
      text: "Every source, connected or uploaded, should be read the same way, so comparisons are fair.",
    },
    {
      title: "AI that shows its work.",
      text: "Every number and every AI answer should show what it is based on, and say when something is missing.",
    },
    {
      title: "Client data stays protected.",
      text: "People should only see the data they need for their work.",
    },
  ],

  // Official Facts
  facts: [
    { k: "Legal name", v: SITE.name, line: "transparent" },
    { k: "Type", v: "Software company", line: "#EEF0F3" },
    {
      k: "Headquarters",
      v: `${SITE.address.street}\n${SITE.address.city} ${SITE.address.postalCode}, ${SITE.address.country}`,
      line: "#EEF0F3",
    },
    { k: "Contact", v: `${SITE.phoneDisplay}\n${SITE.email}`, line: "#EEF0F3" },
    { k: "Hours", v: SITE.hoursDisplay, line: "#EEF0F3" },
  ],

  // Office Photos
  photos: [
    {
      title: "The Forum exterior in Clifton",
      subtitle: "Karachi, Pakistan",
      src: "/brand/office/office_exterior.jpg",
    },
    {
      title: "Product engineering floor",
      subtitle: "Headquarters Clifton Block 9",
      src: "/brand/office/office_interior.jpg",
    },
    {
      title: "Team workspace & strategy",
      subtitle: "Analytics & AI Operations",
      src: "/brand/office/team_workspace.jpg",
    },
    {
      title: "Customer onboarding room",
      subtitle: "Client Delivery & Training",
      src: "/brand/office/office_interior.jpg",
    },
  ],
};
