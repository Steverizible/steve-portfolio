import type { EvidenceAsset } from "@/lib/portfolio-evidence";
import { evidenceCategoryLabel } from "@/lib/portfolio-evidence";

type EvidencePlaceholderProps = {
  asset: Pick<
    EvidenceAsset,
    "title" | "category" | "requiredAssetNote" | "whatItProves" | "preferredPath"
  >;
  className?: string;
};

export default function EvidencePlaceholder({
  asset,
  className = "",
}: EvidencePlaceholderProps) {
  return (
    <div
      className={`flex h-full min-h-[220px] flex-col justify-between bg-[#ececec] p-5 md:p-6 ${className}`}
      role="img"
      aria-label={`Temporary placeholder for ${asset.title}`}
    >
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
          Temporary · {evidenceCategoryLabel[asset.category]}
        </p>
        <p className="mt-3 text-base font-bold uppercase tracking-tight text-foreground">
          Verified screenshot required
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {asset.requiredAssetNote ??
            `A verified ${evidenceCategoryLabel[asset.category].toLowerCase()} asset belongs here.`}
        </p>
      </div>
      <div className="mt-6 border-t border-border/70 pt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">
          What this will prove
        </p>
        <p className="mt-2 text-sm leading-relaxed text-foreground">
          {asset.whatItProves}
        </p>
        {asset.preferredPath && (
          <p className="mt-3 break-all text-[11px] leading-relaxed text-muted">
            Destination: {asset.preferredPath}
          </p>
        )}
      </div>
    </div>
  );
}
