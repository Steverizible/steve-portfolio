# Totely Image Replacement Briefs

Temporary SVG placeholders currently live at:

- `/public/images/projects/totely-ai-storage.svg`
- `/public/images/work/totely/hero.svg`
- `/public/images/work/totely/product-system.svg`

Replace them with real photography and product evidence when available. Do not invent metrics, testimonials, logos, or unapproved UI details.

---

## PROMPT 1 — FEATURED PROJECT CARD

Create a premium editorial product image for Totely, an AI-assisted home-storage system. Show a clean, realistic garage with organized black-and-yellow storage totes, each using a simple numbered circular label. Include a hand holding a phone that displays a clean storage-search interface. The scene should feel practical, modern, and achievable rather than futuristic. Natural light, high-end product photography, strong visual hierarchy, horizontal composition. Do not invent extra logos, product claims, search results, or label designs beyond the supplied Totely source material.

Recommended size: **1600 × 1000 pixels**

Destination: `public/images/projects/totely-ai-storage.jpg` (or `.webp`), then update `lib/images.ts`.

---

## PROMPT 2 — CASE-STUDY HERO

Create a wide editorial image showing the complete Totely product concept: a person organizing a garage, clearly numbered storage totes, a phone used to photograph the tote contents, and a subtle visual connection to later search and retrieval. Emphasize the bridge between physical organization and digital memory. Premium product-design case-study aesthetic, realistic photography, clean garage, natural light, human and approachable, not science fiction.

Recommended size: **2000 × 1200 pixels**

Destination: `public/images/work/totely/hero.jpg` (or `.webp`), then update `lib/totely-case-study.ts` hero image path.

---

## PROMPT 3 — PHYSICAL AND DIGITAL SYSTEM

Create a clean product-storytelling composition showing four stages: number the tote, photograph the contents, record the location, and search later. Use realistic product photography combined with restrained interface overlays. Every tote number must remain consistent across the sequence. Do not use fake metrics or invented feature claims.

Recommended size: **2000 × 1200 pixels**

Destination: `public/images/work/totely/product-system.jpg` (or `.webp`), then update `lib/totely-case-study.ts` ecosystem image path.

---

## PROMPT 4 — REAL PROOF COLLAGE

**Do not generate this image using AI.**

Build it later using:

- Real Totely website screenshots
- Real application screens
- Real numbered-label photography
- Real mobile layouts
- Real user-flow diagrams
- Real GitHub or development evidence
- Early sketches and positioning work

Remove or blur:

- Personal account details
- Private emails
- API keys
- Authentication details
- Customer information
- Private repository information

Recommended size: **2000 × 1400 pixels**

Suggested destination when ready: `public/images/work/totely/proof-collage.jpg`
