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
  seoTitle: "About Cerebro DNano | Team, Mission & Roadmap",
  seoDesc:
    "We build the AI data engine for paid media. Learn about our leadership, our tech engineering team, and the horizontal product roadmap from Karachi, Pakistan.",

  // Story & Mission
  mission: {
    badge: "OUR MISSION",
    title: "Bringing clarity, consistency, and intelligence to paid media.",
    lead: "Cerebro DNano transforms fragmented ad reporting into an automated, auditable single source of truth.",
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
      name: "[Leader Name: Founder & CEO]",
      role: "Chief Executive Officer & Co-Founder",
      department: "Executive Leadership",
      bio: "Over 12 years of leadership in digital performance media, agency operations, and SaaS product engineering across South Asia and MENA.",
      initials: "LD",
      linkedinHref: "https://www.linkedin.com/company/cerebro-media",
    },
    {
      name: "[Leader Name: Chief Technology Officer]",
      role: "Chief Technology Officer & Co-Founder",
      department: "Engineering & Architecture",
      bio: "Architecting high-throughput data pipelines, distributed data stores, and AI query engines for large-scale enterprise analytics.",
      initials: "CT",
      linkedinHref: "https://www.linkedin.com/company/cerebro-media",
    },
    {
      name: "[Leader Name: Head of Product]",
      role: "Head of Product & Solutions",
      department: "Product Strategy",
      bio: "Former media director and analytics lead dedicated to turning complex multi-channel advertising telemetry into intuitive marketer workflows.",
      initials: "HP",
      linkedinHref: "https://www.linkedin.com/company/cerebro-media",
    },
    {
      name: "[Leader Name: Head of Growth & Client Success]",
      role: "Head of Client Solutions",
      department: "Growth & Client Success",
      bio: "Spearheading onboarding and enterprise operations for our largest telecom, banking, and FMCG brand partnerships.",
      initials: "GS",
      linkedinHref: "https://www.linkedin.com/company/cerebro-media",
    },
  ] as TeamMember[],

  // Team: Our Tech Team
  techTeam: [
    {
      name: "[Tech Team: Lead Data Engineer]",
      role: "Staff Data Platform Engineer",
      department: "Data Pipelines & Connectors",
      bio: "Specializing in high-frequency ad API rate-limiting, distributed batch transformations, and multi-tenant schema partitioning.",
      initials: "DE",
      stack: ["Python", "FastAPI", "DuckDB", "Meta Graph API"],
    },
    {
      name: "[Tech Team: Senior AI / ML Engineer]",
      role: "Senior AI & NLP Engineer",
      department: "Ask Cerebro Query Engine",
      bio: "Building deterministic semantic query parsing, context-aware prompt caching, and zero-hallucination metric calculations.",
      initials: "AI",
      stack: ["PyTorch", "LangChain", "Vector DB", "OpenAI / Claude API"],
    },
    {
      name: "[Tech Team: Senior Frontend Architect]",
      role: "Lead Frontend Engineer",
      department: "Web Application & Visuals",
      bio: "Focused on high-performance interactive data visualizations, real-time dashboards, and accessible tabular interfaces.",
      initials: "FE",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Canvas / SVG"],
    },
    {
      name: "[Tech Team: Backend & Security Engineer]",
      role: "Senior Backend & Infra Engineer",
      department: "Cloud & Security Infrastructure",
      bio: "Ensuring SOC-2 style audit trails, AES-256 encrypted credential vaults, and regional database redundancy.",
      initials: "SE",
      stack: ["PostgreSQL", "Docker", "Redis", "Cloudflare"],
    },
    {
      name: "[Tech Team: Analytics QA Specialist]",
      role: "Data Integrity & QA Specialist",
      department: "Metric Reconciliation",
      bio: "Continuous reconciliation of live platform reports against API responses across Google, Meta, and TikTok ad accounts.",
      initials: "QA",
      stack: ["Automated Testing", "SQL", "BigQuery", "Statistical Modeling"],
    },
    {
      name: "[Tech Team: Full-Stack Engineer]",
      role: "Full-Stack Software Engineer",
      department: "Custom Report Builder",
      bio: "Building drag-and-drop report customization, PDF/CSV generation engines, and scheduled delivery workers.",
      initials: "FS",
      stack: ["TypeScript", "Node.js", "React", "Serverless"],
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
