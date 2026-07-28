# Portfolio Evidence Intake Guide

Use this guide when replacing TEMPORARY evidence slots with verified assets.

Central data file: `lib/portfolio-evidence.ts`  
Asset folders:

- `public/images/evidence/fishewear/`
- `public/images/evidence/totely/`
- `public/images/evidence/campaign-system/`
- `public/images/evidence/ai-method/`
- `public/images/evidence/veldskoen/`
- `public/images/evidence/placeholders/`

---

## 1. Screenshot capture instructions

1. Capture from the real product, admin, or report UI.
2. Prefer a clean viewport with relevant panels visible.
3. Export a local image file — do not hotlink private tools.
4. Crop to the evidence area; remove unnecessary desktop clutter when helpful.
5. Confirm the capture matches the claim in `lib/portfolio-evidence.ts`.

## 2. Redaction rules

Remove or blur **before** committing:

- Customer names, emails, phone numbers, shipping addresses
- Order numbers and unapproved individual order values
- Account IDs, store IDs, internal URLs
- Private Airtable / Figma / Shopify / Klaviyo links
- API keys, access tokens, environment variables, authentication details
- Private repository information
- Internal comments not intended for publication
- Unapproved financial details and vendor costs
- Employee or contractor personal information

The portfolio code does **not** perform security redaction.

## 3. File naming

Use lowercase kebab-case with status hints:

- `shopify-yoy-redacted.webp`
- `klaviyo-flow-performance-redacted.webp`
- `search-experience.webp`
- `figma-email-wireframe.webp`

## 4. Recommended dimensions

| Asset type | Size |
|------------|------|
| Wide reports / workflows | 2000 × 1200 |
| Evidence cards | 1600 × 1000 |
| Application screens | Native mobile ratio (e.g. 1290 × 2796) or cropped 1600 × 1000 |
| Proof collages | 2000 × 1400 |

## 5. Compression guidelines

- Prefer WebP for photos/reports
- PNG for UI with sharp text when needed
- SVG for illustrative diagrams
- Avoid oversized uncompressed originals in git
- Target clear readability on mobile without multi‑MB files

## 6. Alt-text requirements

Alt text should describe what is visible and the evidence status, without repeating private data.

Good:

`Redacted Klaviyo flow-performance report showing welcome and abandoned-cart automation contribution.`

Avoid:

`Screenshot` or pasted customer/account identifiers.

## 7. Evidence-status definitions

| Status | Meaning |
|--------|---------|
| **REAL** | Genuine asset with no private information |
| **REDACTED** | Genuine asset with confidential details removed |
| **ILLUSTRATIVE** | Explains a concept; not a real app/report screenshot |
| **PROTOTYPE** | Genuine early/demo state, not necessarily production |
| **TEMPORARY** | Intentional placeholder awaiting a verified asset |

Status must be visible in the UI — never only in alt text or source comments.

## 8. How to replace a temporary asset

1. Add the redacted/real file to the preferred path listed on the evidence item.
2. In `lib/portfolio-evidence.ts`, update that item:
   - `status` → `real`, `redacted`, or `prototype`
   - `imageSrc` → public path
   - tighten `description` / `caption` so they no longer say “Verified screenshot required”
   - keep `privacyNote` / `methodologyNote` accurate
3. Run lint/build and visually check the gallery.

## 9. How to update the central evidence data

All long-form evidence copy lives in `lib/portfolio-evidence.ts`.

Do not duplicate evidence arrays inside case-study JSX.

Galleries consume:

- `fishewearEvidenceGallery`
- `totelyEvidenceGallery`
- `campaignEvidenceGallery`
- `aiMethodEvidenceGallery`

## 10. Final review checklist

- [ ] Status matches reality
- [ ] No private data in image, alt text, captions, or commits
- [ ] No new unapproved metrics
- [ ] Prototype/illustrative assets are not labeled real
- [ ] Temporary slots remain clearly temporary until replaced
- [ ] Mobile gallery stacks cleanly
- [ ] `npm run lint` and `npm run build` pass
