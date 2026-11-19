# Cerebro DNano Site Rules

Create docs/site-rules.md with these rules. Every later task starts by reading it.

1. **Live integrations are Meta Ads, Google Ads and TikTok Ads only.** Never present DV360, LinkedIn Ads, Snapchat Ads or any other ad platform as an integration, data source or planned feature anywhere, including legal pages, schema and alt text. Social share and profile links are fine.
2. **No invented numbers or proof:** no percentages, time savings, ROI, user counts, ratings, testimonials or client logos unless they exist in content/proof.ts with approved: true.
3. **No competitor names.** No claims of being first, only or unique.
4. **Ask Cerebro answers questions about the user's connected ad data.** Never claim it answers any question about anything. Never present Cerebro as a chatbot.
5. **Story order:** data foundation, objective-based reporting, dashboards, reports, then Ask Cerebro on top.
6. **Plain language, sentence case headings, short sentences, explain any technical term.** No em dashes, no exclamation marks, no filler words such as unlock, supercharge, seamless, revolutionize, game-changer, leverage.
7. **Product screenshots come only from public/product/.** Never draw fake product UI in code or generated images.
8. **Exception to rule 7:** AskDemo may replay Ask Cerebro answers in code. It must match the real product's layout and behavior, use only answers captured from the demo build, and carry the caption "Demo data for a sample brand. Answers replayed from Ask Cerebro."
9. **Coded diagrams (ConvergeVisual, VerdictCompare) are explanations, not product UI.** They use demo data, are labeled as demo data, and their numbers add up.
10. **Business name, address, phone, email and hours come only from lib/site.ts.**
11. **Accessibility:** WCAG 2.2 AA, visible focus states, semantic landmarks, one H1 per page, alt text that describes what each screenshot shows.
12. **Performance:** Lighthouse 95+ for Performance, Accessibility, Best Practices and SEO on every page. Largest Contentful Paint under 1.5s on desktop and under 2.5s on mobile. CLS under 0.05.
