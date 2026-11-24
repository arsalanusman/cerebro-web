export interface SecurityItem {
  title: string;
  text: string;
  state: string;
  pillBg: string;
  pillFg: string;
  bd: string;
  bg: string;
  dot: string;
  icon: string;
}

export interface SecuritySection {
  id: string;
  title: string;
  items: SecurityItem[];
}

const OK = {
  state: "In place",
  pillBg: "#DCFCE7",
  pillFg: "#166534",
  bd: "#E4E7EC",
  bg: "#FFFFFF",
  dot: "#15803D",
  icon: "M20 6 9 17l-5-5",
};

const TBC = {
  state: "To confirm before launch",
  pillBg: "#FFF7ED",
  pillFg: "#9A3412",
  bd: "#F5D9C0",
  bg: "#FFFCF8",
  dot: "#C2410C",
  icon: "M12 8v5M12 16.5h.01",
};

function c(title: string, text: string): SecurityItem {
  return { title, text, ...OK };
}

function t(title: string, text: string): SecurityItem {
  return { title, text, ...TBC };
}

export const securityData = {
  seoTitle: "Security and data protection | Cerebro dNano",
  seoDesc: "How Cerebro protects client advertising data, enforces role-based access control, and keeps AI models scoped strictly to authorized workspaces.",
  summary: [
    { label: "Role-based access", href: "#access", d: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" },
    { label: "Client-level permissions", href: "#access", d: "M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4" },
    { label: "Activity log", href: "#accountability", d: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" },
    { label: "AI data checks", href: "#data", d: "M12 7v5l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" },
  ],
  sections: [
    {
      id: "access",
      title: "Access control",
      items: [
        c("Role-based access", "Every person has one role: operations admin, operations analyst, media planner, currency checker, client admin or client viewer."),
        c("Client-level permissions", "People can be limited to specific clients and only see those clients’ data."),
        c("User management", "Admins invite, suspend and restore users from Team and access."),
        t("Single sign-on and two-factor authentication", "Which sign-in options are available."), // CONFIRM with product team
      ],
    },
    {
      id: "accountability",
      title: "Accountability",
      items: [
        c("Activity log", "Key actions such as exports, invitations and role changes are recorded with who did them and when."),
        c("API tokens", "Admins create and revoke API tokens from settings."),
      ],
    },
    {
      id: "data",
      title: "Platform data and uploaded sheets",
      items: [
        c("You choose the accounts", "Only the ad accounts you enable are synced, and you can turn any of them off."),
        c("AI data checks", "Every view shows the date its data runs up to, and Cerebro AI flags failed syncs, missing dates and unconverted currency."),
        t("Access to your ad accounts", "Read-only access: Cerebro requests only reporting permissions and cannot alter campaigns or spend."), // CONFIRM with product team
        t("Uploaded files", "Where uploaded sheets are stored and retention policy."), // CONFIRM with product team
      ],
    },
    {
      id: "ai",
      title: "Cerebro AI",
      items: [
        c("Scoped answers", "Ask Cerebro answers from the data in your workspace, for the clients you can access."),
        t("AI model provider", "Enterprise LLM infrastructure with strict data isolation agreements."), // CONFIRM with product team
        t("Training on customer data", "Customer campaign data is never used to train public AI models."), // CONFIRM with product team
      ],
    },
    {
      id: "infra",
      title: "Infrastructure",
      items: [
        t("Hosting provider and region", "Enterprise cloud data centers with geographic redundancy."), // CONFIRM with product team
        t("Encryption", "Encryption in transit (TLS 1.3) and at rest (AES-256)."), // CONFIRM with product team
        t("Backups and recovery", "Continuous incremental backups with tested disaster recovery procedures."), // CONFIRM with product team
      ],
    },
    {
      id: "lifecycle",
      title: "Data lifecycle",
      items: [
        c("Deletion", "You can disconnect a platform at any time and request deletion of your data."),
        t("Retention", "Configurable retention windows matching customer regulatory requirements."), // CONFIRM with product team
      ],
    },
    {
      id: "report",
      title: "Report a concern",
      items: [
        c("Contact", "Report a security concern directly to hello@cerebro.media."),
      ],
    },
  ],
};
