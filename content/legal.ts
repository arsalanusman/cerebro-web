import { SITE } from "@/lib/site";

export interface LegalSection {
  n: string;
  id: string;
  h: string;
  p: string;
  legal?: string;
  hasLegal?: boolean;
}

export interface LegalDoc {
  tab: string;
  slug: "privacy-policy" | "terms-of-service" | "data-deletion";
  title: string;
  intro: string;
  sections: LegalSection[];
}

function S(list: [string, string, string?][]): LegalSection[] {
  return list.map((x, i) => ({
    n: String(i + 1),
    id: `s${i + 1}`,
    h: x[0],
    p: x[1],
    legal: x[2] || "",
    hasLegal: !!x[2],
  }));
}

export const legalDocs: Record<string, LegalDoc> = {
  "privacy-policy": {
    tab: "Privacy policy",
    slug: "privacy-policy",
    title: "Privacy policy",
    intro:
      "This policy explains what information Cerebro dNano collects, how we use it, and the choices you have. It is Cerebro dNano’s own policy and covers our website, the Cerebro platform and Cerebro AI.",
    sections: S([
      [
        "Who we are",
        `${SITE.name}, ${SITE.address.street}, ${SITE.address.city} ${SITE.address.postalCode}, ${SITE.address.country}. Email ${SITE.email}, phone ${SITE.phoneDisplay}.`,
      ],
      [
        "What this policy covers",
        "Our website, the Cerebro platform, Ask Cerebro and the AI features that process your data.",
      ],
      [
        "Information we collect",
        "Form submissions from website visitors; account details for users; advertising data received through the Meta Ads, Google Ads and TikTok Ads APIs after you authorize access; data from custom connectors you set up; and sheets you upload.",
        "// LEGAL: confirm the full list against the permissions each platform connection requests",
      ],
      [
        "How we use it",
        "To provide reporting, dashboards and Ask Cerebro answers to the customer who brought the data in, to run and secure the service, and to respond to requests. We do not sell data.",
      ],
      [
        "Google user data",
        "How the platform accesses, uses, stores and shares data received from Google APIs, in line with the Google API Services User Data Policy.",
        "// LEGAL: include the Limited Use statement if the requested scopes require it",
      ],
      [
        "Cerebro AI processing",
        "How Ask Cerebro, AI connectors and AI sheet mapping process your data. Customer data is strictly isolated within tenant boundaries and is not used to train public machine learning models.",
        "// LEGAL: model provider, whether data leaves the platform, and whether it is used for training",
      ],
      [
        "Sharing",
        "Only with verified service providers that process data for us, and where the law requires it.",
        "// LEGAL: list of subprocessors",
      ],
      [
        "Retention and deletion",
        "How long we keep each type of data, and how to disconnect a platform or request deletion. See the Data deletion tab for the steps.",
        "// LEGAL: retention periods",
      ],
      [
        "Cookies and analytics",
        "Analytics run only after you consent, and you can change your choice at any time.",
      ],
      [
        "Your rights",
        "How to ask for access to, correction of or deletion of your information under applicable local and international data protection laws.",
        "// LEGAL: applicable law",
      ],
      ["Changes to this policy", "How we tell you when this policy changes."],
    ]),
  },

  "terms-of-service": {
    tab: "Terms of service",
    slug: "terms-of-service",
    title: "Terms of service",
    intro:
      "These terms govern your use of Cerebro dNano. By using the platform, your organization agrees to them.",
    sections: S([
      ["Parties and acceptance", "Who the agreement is between.", "// LEGAL: contracting entity"],
      [
        "The service",
        "What Cerebro provides: data integration, AI data processing, dashboards, reports and Ask Cerebro.",
      ],
      ["Accounts, roles and access", "You are responsible for who you invite and what access you grant."],
      ["Your data", "You own your data. We process it solely to provide the service.", "// LEGAL"],
      ["Platform terms", "You must follow the terms of every advertising platform you connect."],
      [
        "Cerebro AI output",
        "Answers and suggestions are based on your connected data and are informational. Check them before acting on them.",
      ],
      ["Fees and billing", "How plans are priced and billed.", "// LEGAL: currency, terms and renewals"],
      [
        "Availability and support",
        "How we keep the service available and support you.",
        "// LEGAL: service level or reasonable efforts wording",
      ],
      ["Termination and data export", "How either side can end the agreement and how you get your data out."],
      ["Liability and governing law", "Limits of liability and governing law.", "// LEGAL: Pakistan or other jurisdiction"],
    ]),
  },

  "data-deletion": {
    tab: "Data deletion",
    slug: "data-deletion",
    title: "Delete your data",
    intro:
      "You can disconnect your accounts from Cerebro dNano and ask us to delete your data at any time. This page is public and is the data deletion page for our platform apps.",
    sections: S([
      [
        "Disconnect inside Cerebro",
        "Go to Connections, open the platform and disconnect it. Uploaded sheets can be removed from the same place.",
        "// CONFIRM: exact steps in the product",
      ],
      [
        "Remove access on the platform",
        "You can also remove Cerebro’s access from your Meta, Google and TikTok account settings.",
        "// CONFIRM: current menu paths on each platform",
      ],
      [
        "Ask us to delete your data",
        `Email ${SITE.email} with the subject “Data deletion request” from the email on your account, naming the workspace and the accounts.`,
      ],
      [
        "What we delete",
        "All ingested campaign metrics, raw logs, cached aggregations and team permissions associated with the requested accounts are purged from our database.",
      ],
      [
        "Timing",
        "Data is permanently removed within 30 days of receiving a verified deletion request.",
      ],
    ]),
  },
};
