export const SITE = {
  name: "Cerebro DNano",
  shortName: "Cerebro",
  url: "https://cerebro.media",
  email: "hello@cerebro.media",
  phoneDisplay: "+92 342 2732873",
  phoneHref: "tel:+923422732873",
  address: {
    unit: "[TBC: floor and unit]",
    street: "The Forum, Block 9 Clifton",
    city: "Karachi",
    postalCode: "75600",
    country: "Pakistan",
    countryCode: "PK",
    full: "The Forum, Block 9 Clifton, Karachi 75600, Pakistan",
  },
  hoursDisplay: "Mon - Fri: 9:00 AM - 6:00 PM PKT",
  hoursSchema: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  timezone: "Asia/Karachi",
  geo: {
    lat: "[TBC]",
    lng: "[TBC]",
  },
  integrationsLive: ["Meta Ads", "Google Ads", "TikTok Ads"],
} as const;

export type SiteConfig = typeof SITE;

/**
 * Returns true if bracketed placeholders like [TBC], [CONFIRM], [LEGAL] should be hidden.
 * In production, all bracket text blocks are hidden.
 */
export function isPlaceholderHidden(text?: string): boolean {
  if (process.env.NODE_ENV !== "production") return false;
  if (!text) return false;
  return /\[(TBC|CONFIRM|LEGAL|Name|Planned|Office and floor number|floor and unit)[^\]]*\]/i.test(text);
}
