# Antigravity kickoff prompt

Paste this into Antigravity first, before the build prompts in HANDOFF.md section 10. It explains the package, the rules and the platform logos, and asks Antigravity to confirm it understood before writing any code.

```text
You are building the marketing website for Cerebro DNano (https://cerebro.media) from an approved, complete design. The full design handoff is in the folder handoff/ in this project. This is a new design: every page has already been designed and approved. Your job is to build it exactly, not to design it.

WHAT IS IN handoff/
- handoff/HANDOFF.md: the guide. Route map, rules, components, mobile rules, interactions, open items and nine build prompts. Read it fully before anything else.
- handoff/design/: 32 page designs plus the shared header and footer, one .dc.html file per route. These files are the spec.
- handoff/design/_mobile/: 7 mobile designs at 390px. Every page below 768px follows one of these templates (mapping in handoff/reference/site-hierarchy.md).
- handoff/design/_reference/: the style library (3 sheets) and the components and states sheet. Every hover, focus, pressed and disabled state comes from here.
- handoff/brand/: the Cerebro logo mark and wordmark as SVG, dark and white versions.
- handoff/tokens/: colors, fonts, radius, shadows, focus rings, layout and motion. The only source of style values.
- handoff/reference/page-builder/: the Python source that generated every design. Each function is one component; use it as the component inventory.

GOLDEN RULES
1. Build exactly what the design files show: same sections, order, copy, sizes, colors, spacing, radius and shadows. Inline style values in the .dc.html files are the exact values. Do not redesign, simplify, add sections, rename things or "improve" anything.
2. Read the .dc.html format as explained in HANDOFF.md section 3 (sc-for is a map, sc-if is a condition, dc-import is a shared component, renderVals() holds the data and handlers).
3. Use only the tokens in handoff/tokens/tokens.css. Never invent a color, font size or radius.
4. Every page keeps its own hero illustration. The neural grid art with the Cerebro logo appears only on the homepage and the 404. Never reuse one page's hero on another page.
5. Below 768px, follow the mobile templates exactly. The header switches to the mobile menu below 1024px.
6. Copy is final. Text in brackets such as [TBC], [CONFIRM], [LEGAL], [Name] or [Planned] shows only in development; in production, hide the block that contains it. Never ship bracket text.
7. Keep every "Demo data" caption. There is no free trial: every call to action is "Book a demo".
8. No em dashes anywhere in the copy.

PLATFORM LOGOS
This project already has the official platform logos in its asset library. Use them. The designs show platforms as colored letter marks, which are placeholders only:
- "M" on blue = Meta (Meta Ads)
- "G" on green = Google Ads
- "T" on black = TikTok (TikTok Ads)
- "in" on grey, faded = LinkedIn (coming soon)
- "DV" on grey, faded = Display & Video 360 (coming soon)
- "S" on green = Google Sheets
- "LS" on blue = Looker Studio
- "XLS" on green = Microsoft Excel
- "CSV" and "PDF" = generic file icons, not brand logos
- "+", "✦", "↑", "Rs" and "{}" stay as icons (custom connector, AI, upload, sales data, webhooks)
Rules: put the official logo exactly where the mark is, centered, at the mark's size, inside the same white tile, circle or pill. Never draw, trace, recolor or stretch a logo; follow each platform's brand guidelines. Coming-soon logos (LinkedIn, DV360) are grayscale at 45% opacity. Give each logo alt text with the platform name, or aria-hidden when the name is printed next to it. Full mapping and the list of places they appear: HANDOFF.md section 3, "Platform logos".

HOW WE WILL WORK
- We build in the order of the nine prompts in HANDOFF.md section 10. I will paste them one at a time.
- After each prompt, show screenshots at 1440px and 390px next to the matching design files, then stop and wait for my approval.
- If anything in a design is unclear or seems to conflict, ask me. Do not guess and do not fill gaps with your own design.
- Never edit anything inside handoff/. Keep a CHANGELOG.md in the project root listing each step, what you built and any question I answered.

BEFORE WRITING ANY CODE, reply with:
1. A short summary of the package in your own words.
2. The full list of routes you will build, each with its design file and mobile template.
3. The platform logo files you found in this project, and which letter mark each one replaces. Tell me if any of the eight logos above is missing.
4. Any questions.
Do not start building until I answer and send Prompt 1.
```
