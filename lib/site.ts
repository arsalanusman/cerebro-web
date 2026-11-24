export const SITE = {
  name: "Cerebro DNano",
  shortName: "Cerebro",
  url: "https://cerebro.media",
  email: "hello@cerebro.media",
  phoneDisplay: "+92 342 2732873",
  phoneHref: "tel:+923422732873",
  address: {
    unit: "[TBC: office and floor number]",
    street: "The Forum, Block 9 Clifton",
    city: "Karachi",
    postalCode: "75600",
    country: "Pakistan",
    countryCode: "PK",
  },
  hoursDisplay: "Mon – Fri: 9:00 AM – 6:00 PM PKT",
  hoursSchema: [{ days: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "18:00" }],
  timezone: "Asia/Karachi",
  geo: { lat: "[TBC]", lng: "[TBC]" },
  integrationsLive: ["Meta Ads", "Google Ads", "TikTok Ads"],
} as const;

export type SiteConfig = typeof SITE;
