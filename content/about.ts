import { SITE } from "@/lib/site";

export const aboutData = {
  seoTitle: "About Cerebro DNano | Karachi, Pakistan",
  seoDesc: "We build the AI data engine for paid media. Based in Karachi, Pakistan, helping marketing teams and agencies see what is working.",
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
  photos: [
    "The Forum exterior in Clifton",
    "Product engineering floor",
    "Customer onboarding room",
    "Analytics team workspace",
  ],
};
