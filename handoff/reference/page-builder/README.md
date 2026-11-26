# Page builder (reference)

These Python files generated every page design on the canvas. They are not part of the website build.

Use them as the component inventory. Each function is one reusable section, illustration or UI moment, and its output is the exact markup and values to reproduce as a React component.

- lib.py: sections, art tiles, UI moments, forms, long-form layout, page shell
- heroes.py: the 14 page-specific hero illustrations
- pages.py: platform pages; pages_b.py: solution and industry pages; pages_c.py: company pages; pages_d.py: blog, docs, FAQ, customers, legal, 404
- m.py: mobile layouts at 390px

Run (optional): python3 pages.py PlatAsk writes one design file. Output paths point at the canvas folder and need changing to run elsewhere.
