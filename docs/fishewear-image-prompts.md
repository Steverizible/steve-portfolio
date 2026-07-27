# FisheWear — Replacement Image Briefs

The FisheWear case study currently ships with temporary, tasteful SVG placeholders:

- Homepage project card: `public/images/projects/fishewear-growth-system.svg`
- Case-study hero: `public/images/work/fishewear/hero.svg`

These can be replaced with real photography/collage later **without changing the page
structure**. Keep the same file paths (or update `lib/images.ts` and
`lib/fishewear-case-study.ts` respectively) and the same approximate aspect ratios.

Guardrails for all replacements:

- Use real, approved FisheWear product photography as the source of truth.
- Do **not** invent product patterns, garments, logos, text, or dashboard numbers.
- Do **not** fabricate Shopify or Klaviyo interfaces or revenue figures.
- Blur any private customer, order, email, or confidential internal data.

---

## Prompt 1 — Featured Project Image

Replaces: `public/images/projects/fishewear-growth-system.svg`
Recommended size: **1600 × 1000 pixels**

> Create a premium editorial case-study image for a women's outdoor and fishing apparel
> brand. Show a modern e-commerce growth workspace with a laptop displaying softly blurred
> analytics interfaces, a mobile phone displaying an email layout, authentic outdoor
> equipment nearby, and a subtle river or Alaska-inspired environment in the background.
> Clean natural lighting, sophisticated creative-director aesthetic, premium but
> approachable, realistic photography, horizontal composition. Use supplied FisheWear
> product photography as the source of truth. Do not invent product patterns, garments,
> logos, text, or dashboard numbers.

---

## Prompt 2 — Case-Study Hero

Replaces: `public/images/work/fishewear/hero.svg`
Recommended size: **2000 × 1200 pixels**

> Create a high-end editorial collage representing the connection between outdoor brand
> storytelling and digital growth. Combine an authentic women's fishing lifestyle
> photograph, restrained abstract customer-data pathways, e-commerce interface fragments,
> lifecycle communication, and subtle workflow connections. The image should feel
> sophisticated, strategic, human, and contemporary rather than futuristic. No fabricated
> financial numbers, no fake brand logos, no invented product prints.

---

## Prompt 3 — Proof Collage (build manually, do NOT generate with AI)

Optional future addition to the case study.
Recommended size: **2000 × 1400 pixels**

> Do not generate this image with AI. Build it later using real screenshots from Shopify,
> Klaviyo, campaign emails, audience segments, content workflows, and landing pages. Blur
> private customer information, order information, email addresses, and confidential
> internal data. Keep key labels and approved performance evidence visible.
