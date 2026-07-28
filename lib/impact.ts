/**
 * Shared “Impact at a Glance” model for featured project and system cards.
 *
 * Commercial items are verified performance results.
 * Product / operational / leadership / methodology items are scope indicators—
 * never present them as financial metrics.
 *
 * Slyde: review and attach verified impact data during its dedicated case-study
 * build. Do not invent speculative Slyde figures here.
 */

export type ImpactType =
  | "commercial"
  | "product"
  | "operational"
  | "leadership"
  | "methodology";

export type ImpactItem = {
  value: string;
  label: string;
  note?: string;
  type: ImpactType;
  prominence?: "primary" | "secondary";
};

export type ImpactAtGlance = {
  eyebrow?: string;
  items: readonly ImpactItem[];
  /** Short card-safe note. Keep full methodology in the case study. */
  guardrail?: string;
};

export const DEFAULT_IMPACT_EYEBROW = "Impact at a Glance";

export function getPrimaryImpactItem(
  impact: ImpactAtGlance | undefined
): ImpactItem | undefined {
  if (!impact?.items.length) return undefined;
  return (
    impact.items.find((item) => item.prominence === "primary") ??
    impact.items[0]
  );
}

export function partitionImpactItems(impact: ImpactAtGlance): {
  primary: ImpactItem;
  secondary: ImpactItem[];
  additional?: ImpactItem;
} {
  const primary =
    impact.items.find((item) => item.prominence === "primary") ??
    impact.items[0];
  const rest = impact.items.filter((item) => item !== primary);
  return {
    primary,
    secondary: rest.slice(0, 2),
    additional: rest[2],
  };
}
