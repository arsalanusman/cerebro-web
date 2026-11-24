# CHANGELOG

## [Prompt 1] - Setup, Tokens, Brand, Header and Footer (2026-11-24)

### Setup & Assets
- Installed complete V2 design handoff into `handoff/` from `D:\Flipping\New Design handoff\V2 Design\cerebro-new-design-handoff`.
- Copied official Cerebro brand SVG assets (`cerebro-mark.svg`, `cerebro-mark-white.svg`, `cerebro-wordmark.svg`, `cerebro-wordmark-white.svg`) into `public/brand/`.
- Audited and added all 8 official platform logos to `public/brand/platforms/`:
  - `meta.png` (Meta Ads - replaces "M" on blue)
  - `google.png` (Google Ads - replaces "G" on green)
  - `tiktok.png` (TikTok Ads - replaces "T" on black)
  - `linkedin.png` (LinkedIn - replaces "in" on grey, coming soon at 45% opacity)
  - `dv360.png` (Display & Video 360 - replaces "DV" on grey, coming soon at 45% opacity)
  - `sheets.svg` / `google-sheets.svg` (Google Sheets - replaces "S" on green)
  - `looker.svg` / `looker-studio.svg` (Looker Studio - replaces "LS" on blue)
  - `excel.svg` / `microsoft-excel.svg` (Microsoft Excel - replaces "XLS" on green)

### Tokens & Tailwind
- Synchronized `styles/tokens.css` from `handoff/tokens/tokens.css`.
- Updated `tailwind.config.ts` to map all design tokens: colors (`brand`, `navy`, `deep-navy`, `lavender`, `surface`, `ink`, `text`, `muted`, `subtle`, `border`, `positive`, `negative`, `warning`, `neutral-bg`), radiuses (`control`, `card`, `panel`, `tile`, `tile-lg`, `pill`), and shadows (`card`, `menu`, `float`).

### Site Configuration
- Updated `lib/site.ts`:
  - Name: "Cerebro DNano"
  - Url: `https://cerebro.media`
  - Email: `hello@cerebro.media`
  - Phone: `+92 342 2732873` (`tel:+923422732873`)
  - Address: "The Forum, Block 9 Clifton, Karachi 75600, Pakistan" with unit `[TBC: floor and unit]`
  - Hours: "Mon - Fri: 9:00 AM - 6:00 PM PKT" (clean formatting, zero em dashes)
  - Added `isPlaceholderHidden` production helper for bracket text.

### Header & Footer
- Built `components/SiteHeader.tsx` faithfully matching `handoff/design/SiteHeader.dc.html`:
  - Authentic Cerebro mark & wordmark SVGs.
  - "AI first" menu item preserved per user request.
  - "Ask Cerebro" pill button with double-sparkle icon.
  - Mega menus for Platform, Solutions, and Resources with two-column links and promo feature cards.
  - Direct links for Integrations, Pricing, and Contact.
  - "Book a demo" pill button.
  - Mobile header (64px) and drawer menu below 1024px with `<details>` accordions matching `MobHome.dc.html`.
- Built `components/SiteFooter.tsx` faithfully matching `handoff/design/SiteFooter.dc.html`:
  - Trust section with 4 security points and link to `/security`.
  - Conditional CTA section with radial glow, "Ask your own campaigns a question", and demo/sales buttons.
  - 4-column footer directory, brand address, hours, and legal sub-footer links.
