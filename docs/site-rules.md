# Cerebro DNano Site Rules

Follow these rules for every page and component across the site. The design files in `handoff/design` are the source of truth.

1. **Source of Truth**: The design files in `handoff/design` are the source of truth. Match them exactly. No redesigns, no new sections, no copy changes.
2. **Interactive States**: All interactive states come from `handoff/design/UIStates.dc.html`.
3. **Design Tokens**: Colors, fonts, radius, shadows and spacing come only from `handoff/tokens/tokens.css`.
4. **Platform Scope**: Live integrations are Meta Ads, Google Ads and TikTok Ads. LinkedIn Ads and DV360 appear only as "Coming soon" on the integrations page and integration cards, never in page titles, descriptions, schema or the hero.
5. **No Invented Proof**: No invented numbers, logos, testimonials, ratings or customer counts. Client logos, quotes and results stay as placeholders until approved in writing.
6. **Ask Cerebro Scope**: Ask Cerebro answers questions about the customer's connected and uploaded data. Keep every "Demo data" caption from the designs.
7. **Placeholders**: Placeholders in [brackets] show in development and are hidden in production until filled.
8. **Copy Discipline**: No em dashes in any copy. Sentence case headings, short sentences.
9. **Single Source of Truth**: Business name, address, phone, email and hours come only from `lib/site.ts`.
10. **Accessibility**: WCAG 2.2 AA, visible focus states, keyboard support for every menu and control, reduced motion respected.
11. **Performance**: Lighthouse 95+ on every page. Page JavaScript under 130KB gzipped.
