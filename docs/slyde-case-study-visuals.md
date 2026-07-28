# Slyde Handboards Founder Case Study — Visual Replacement Plan

Canonical route: `/work/slyde-handboards` (existing slug upgraded in place; no redirect)

## Current assets in repository

| Path | Use |
|------|-----|
| `public/images/projects/slyde-handboards.jpg` | Featured card + case-study hero |
| `public/images/work/slyde/research.gif` | Prototype evidence (prototype status) |
| `public/images/work/slyde/design.jpg` | Product evolution evidence (real) |
| `public/images/work/slyde/development.gif` | Manufacturing evidence (real; prefer redacted still later) |
| `public/images/work/slyde/concept.gif` | Brand/creative evidence (real) |
| `public/images/work/slyde/founder-journey.svg` | Temporary journey diagram |
| `public/images/work/slyde/hero.svg` | Optional temporary hero alternative |

---

## HIGH PRIORITY

### 1. Hero product and riding image
- Section: Hero
- Preferred source: Owned product + water photography
- Dimensions: 2000 × 1250
- Proves: Physical product and ocean context
- Status: Real
- Blur: Unrelated brands, private individuals without permission
- Destination: Keep `public/images/projects/slyde-handboards.jpg` or replace with higher-res WebP and update `lib/slyde-case-study.ts` / `lib/images.ts`

### 2. Early prototypes
- Destination: `public/images/evidence/slyde/early-prototypes.webp`
- Status: Real or Prototype
- Dimensions: 1600 × 1000
- Blur: Proprietary manufacturing notes if sensitive

### 3. Product evolution
- Destination: `public/images/evidence/slyde/product-evolution.webp`
- Status: Real
- Dimensions: 1600 × 1000

### 4. Shopify experience
- Destination: `public/images/evidence/slyde/shopify-experience.webp`
- Status: Real
- Dimensions: 2000 × 1200
- Notes: Local historical screenshot only; no hotlink; remove admin/customer data

### 5. Investment evidence
- Destination: `public/images/evidence/slyde/investment-evidence-redacted.webp`
- Status: Redacted
- Dimensions: 2000 × 1200
- Blur/remove: Deal terms, ownership, signatures, bank info, addresses, private contacts
- Proves: $500K outside investment (not revenue)

### 6. Brand creative system
- Destination: `public/images/evidence/slyde/brand-creative-system.webp`
- Status: Real
- Dimensions: 1600 × 1000

### 7. Customer education
- Destination: `public/images/evidence/slyde/customer-education.webp`
- Status: Real
- Dimensions: 1600 × 1000

---

## HIGH BUT SENSITIVE

### 8. Collaboration growth and revenue
- Destination: `public/images/evidence/slyde/collaboration-growth-redacted.webp`
- Status: Redacted (TEMPORARY until provided)
- Dimensions: 2000 × 1200
- Blur: Partner-private terms, unapproved partner names
- Proves: Conditional +30% collaborations / +$500K attributed revenue
- Homepage: Do not promote until evidenced

---

## MEDIUM PRIORITY

### 9. Manufacturing
- Destination: `public/images/evidence/slyde/manufacturing-redacted.webp`
- Status: Real or Redacted
- Blur: Supplier identities, pricing, PO data, proprietary process detail

### 10. Team and partners
- Destination: `public/images/evidence/slyde/team-and-partners.webp`
- Status: Real
- Permission: Required for identifiable people

### 11. Partnerships
- Destination: `public/images/evidence/slyde/partnerships.webp`
- Status: Real or Redacted

### 12. Community
- Destination: `public/images/evidence/slyde/community.webp`
- Status: Real — no stock imagery

### 13. Packaging / demonstrations
- Can fold into brand creative or education assets

---

## LOW PRIORITY

- Historical planning documents
- Operational diagrams (replace `founder-journey.svg`)
- Press collage (only if verified Slyde coverage)
- Event archive

---

## After replacing assets

1. Update `imageSrc` / status in `lib/portfolio-evidence.ts`
2. Keep investment and collaboration claims clearly separated
3. Run `npm run lint` and `npm run build`
