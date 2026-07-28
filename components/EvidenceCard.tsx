import Image from "next/image";
import Link from "next/link";
import EvidencePlaceholder from "@/components/EvidencePlaceholder";
import EvidenceStatusBadge from "@/components/EvidenceStatusBadge";
import ZoomMedia from "@/components/ZoomMedia";
import {
  evidenceCategoryLabel,
  type EvidenceAsset,
} from "@/lib/portfolio-evidence";

type EvidenceCardProps = {
  asset: EvidenceAsset;
  className?: string;
  priority?: boolean;
};

export default function EvidenceCard({
  asset,
  className = "",
  priority = false,
}: EvidenceCardProps) {
  const showPlaceholderOverlay = asset.status === "temporary";
  const imageSrc = asset.imageSrc;
  const isWide = asset.span === "wide";

  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card ${
        isWide ? "md:col-span-2" : ""
      } ${className}`}
    >
      <ZoomMedia
        className={`relative w-full overflow-hidden bg-[#ddd] ${
          isWide ? "aspect-[21/10] md:aspect-[2/1]" : "aspect-[16/10]"
        }`}
      >
        <div className="relative h-full w-full">
          {showPlaceholderOverlay ? (
            <EvidencePlaceholder asset={asset} className="absolute inset-0" />
          ) : imageSrc ? (
            <Image
              src={imageSrc}
              alt={asset.alt ?? asset.title}
              fill
              className="object-cover"
              sizes={
                isWide
                  ? "100vw"
                  : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              }
              priority={priority}
              loading={priority ? undefined : "lazy"}
            />
          ) : (
            <EvidencePlaceholder asset={asset} className="absolute inset-0" />
          )}
        </div>
      </ZoomMedia>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <EvidenceStatusBadge status={asset.status} />
          {asset.toolLabel && (
            <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-muted">
              {asset.toolLabel}
            </span>
          )}
          <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-muted">
            {evidenceCategoryLabel[asset.category]}
          </span>
        </div>

        <h3 className="mt-4 text-lg font-bold uppercase tracking-tight md:text-xl">
          {asset.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
          {asset.description}
        </p>

        {asset.caption && (
          <p className="mt-3 text-xs leading-relaxed text-muted">{asset.caption}</p>
        )}

        <div className="mt-5 rounded-xl border border-border bg-background p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            What this proves
          </p>
          <p className="mt-2 text-sm leading-relaxed text-foreground">
            {asset.whatItProves}
          </p>
        </div>

        {asset.methodologyNote && (
          <p className="mt-4 text-xs leading-relaxed text-muted">
            {asset.methodologyNote}
          </p>
        )}

        {asset.privacyNote && (
          <p className="mt-3 text-xs leading-relaxed text-muted">
            Privacy note: {asset.privacyNote}
          </p>
        )}

        {asset.sourceDate && (
          <p className="mt-3 text-xs uppercase tracking-wide text-muted">
            Source period: {asset.sourceDate}
          </p>
        )}

        {asset.externalUrl && (
          <p className="mt-4">
            <Link
              href={asset.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold uppercase tracking-wide text-foreground underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              View live source
              <span aria-hidden="true" className="ml-1">
                ↗
              </span>
              <span className="sr-only"> (opens in a new tab)</span>
            </Link>
          </p>
        )}
      </div>
    </article>
  );
}

/** Backward-compatible props shape used by older callers. */
export type EvidenceProofType =
  | "Performance"
  | "Product"
  | "Workflow"
  | "Creative"
  | "Technical"
  | "Research"
  | "Implementation";

export type EvidenceSourceStatus =
  | "Real"
  | "Redacted"
  | "Illustrative"
  | "Prototype"
  | "Temporary";
