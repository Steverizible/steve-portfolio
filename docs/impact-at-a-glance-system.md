# Impact at a Glance

Reusable summary system for flagship project, system, and methodology cards.

## Purpose

Help a recruiter, hiring manager, client, or collaborator understand why a featured project matters **before** opening the full case study.

Impact at a Glance summarizes the most important outcome or scope. Evidence galleries and case-study methodology notes remain the place for full proof.

## Supported impact types

| Type | Use for |
|------|---------|
| `commercial` | Verified revenue, traffic, AOV, attributed lifecycle revenue |
| `product` | Scope of what was built (not user/revenue claims) |
| `operational` | Platforms, workflows, closed loops, approval structure |
| `leadership` | Budget managed, cross-functional ownership, founder scope |
| `methodology` | Operating models and process frameworks |

Never present product, operational, leadership, or methodology scope indicators as financial performance metrics.

## Data structure

Defined in `lib/impact.ts`:

```ts
ImpactItem {
  value: string
  label: string
  note?: string
  type: commercial | product | operational | leadership | methodology
  prominence?: primary | secondary
}

ImpactAtGlance {
  eyebrow?: string          // default: "Impact at a Glance"
  items: ImpactItem[]
  guardrail?: string        // short card-safe note
}
```

Attach via:

- `Project.impactAtAGlance` in `lib/site-data.ts`
- `SystemCaseStudy.impactAtAGlance` in `lib/systems-data.ts`
- `aiBuildMethodPreview.impactAtAGlance` in `lib/ai-operating-model.ts`

Legacy `cardMetrics` remains typed for compatibility but new work should use `impactAtAGlance` only.

## Metrics vs scope indicators

- **Metrics** require verified commercial results and explicit labels (`+63%` → Net Sales YoY).
- **Scope indicators** describe what was built or how work operates (`Built From Zero`, `4 Core Platforms`).
- Every value must include a short label. Never show a bare number.

## Verification requirements

Before publishing a commercial item:

1. Confirm the figure exists in approved portfolio or résumé source material.
2. Pair it with the correct label and period context.
3. Keep the full methodology in the case study; use a short `guardrail` on the card.
4. Do not claim AI caused commercial results unless that causal claim is separately verified.

## Adding a new project

1. Add or update the project in `lib/site-data.ts`.
2. Attach `impactAtAGlance` with one primary item and up to three supporting items.
3. Choose the correct `type`.
4. Keep `cardDescription` concise so the card does not become excessively tall.
5. Add `evidenceLabel: "Case Study + Evidence"` only when a proof gallery exists.
6. Run `npm run lint` and `npm run build`.

## Methodology notes

- Card `guardrail`: one short sentence.
- Case study: full comparison period, attribution caveats, and privacy notes.
- Do not duplicate the entire case-study methodology on the card.

## Mobile guidance

- Primary item stacks full width.
- Supporting items stack on small screens; two columns from `sm` upward.
- Long values such as `$0 → $250K/Month` must wrap (`break-words`).
- Archive (`selected`) cards show a compact primary line only.

## Component variants

`components/ImpactAtAGlance.tsx`

| Variant | Use |
|---------|-----|
| `card` | Featured Work / SystemCard dark footers |
| `section` | Homepage methodology preview panel |
| `compact` | Selected Works archive primary indicator |

`tone`: `dark` for inverted card footers, `light` for light section panels.

## Claim guardrails

Do not invent productivity percentages, hours saved, Totely revenue/users/downloads, Campaign Intelligence performance guarantees, ROAS, profit, or unverified automation counts.

## Slyde follow-up

Slyde uses this model with approved investment, leadership, and product-scope items on the homepage.

Conditional collaboration growth (+30% / +$500K attributed revenue) stays inside the case study with TEMPORARY evidence until redacted supporting records are published. Do not promote that claim on the homepage without evidence.
