import EvidenceCard from "@/components/EvidenceCard";
import type {
  EvidenceAsset,
  EvidenceGallerySection,
} from "@/lib/portfolio-evidence";

type ProofGalleryProps = {
  section?: EvidenceGallerySection;
  items?: readonly EvidenceAsset[];
  eyebrow?: string;
  heading?: string;
  introduction?: string;
  privacyNote?: string;
  methodologyNote?: string;
  className?: string;
};

export default function ProofGallery({
  section,
  items,
  eyebrow,
  heading,
  introduction,
  privacyNote,
  methodologyNote,
  className = "",
}: ProofGalleryProps) {
  const galleryItems = items ?? section?.items ?? [];
  const resolvedEyebrow = eyebrow ?? section?.eyebrow;
  const resolvedHeading = heading ?? section?.heading;
  const resolvedIntro = introduction ?? section?.introduction;
  const resolvedPrivacy = privacyNote ?? section?.privacyFooter;
  const resolvedMethodology = methodologyNote ?? section?.methodologyFooter;

  if (galleryItems.length === 0) return null;

  return (
    <div className={className}>
      {(resolvedEyebrow || resolvedHeading || resolvedIntro) && (
        <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
          <div>
            {resolvedEyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                {resolvedEyebrow}
              </p>
            )}
            {resolvedHeading && (
              <h2 className="mt-3 text-2xl font-bold uppercase tracking-tight md:text-3xl lg:text-4xl">
                {resolvedHeading}
              </h2>
            )}
          </div>
          {resolvedIntro && (
            <p className="text-base leading-relaxed text-muted md:text-lg lg:pt-6">
              {resolvedIntro}
            </p>
          )}
        </div>
      )}

      <ul className={`grid gap-4 md:grid-cols-2 ${resolvedHeading ? "mt-10" : ""}`}>
        {galleryItems.map((asset, index) => (
          <li
            key={asset.id}
            className={asset.span === "wide" ? "md:col-span-2" : undefined}
          >
            <EvidenceCard asset={asset} priority={index < 2} />
          </li>
        ))}
      </ul>

      {(resolvedPrivacy || resolvedMethodology) && (
        <div className="mt-8 space-y-3 rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed text-muted md:p-6">
          {resolvedPrivacy && <p>{resolvedPrivacy}</p>}
          {resolvedMethodology && <p>{resolvedMethodology}</p>}
        </div>
      )}
    </div>
  );
}
