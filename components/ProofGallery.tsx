import EvidenceCard, {
  type EvidenceProofType,
  type EvidenceSourceStatus,
} from "@/components/EvidenceCard";

export type ProofGalleryItem = {
  label: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  proofType: EvidenceProofType;
  sourceStatus: EvidenceSourceStatus;
  href?: string;
};

type ProofGalleryProps = {
  items: readonly ProofGalleryItem[];
  privacyNote?: string;
  replacementNote?: string;
  className?: string;
};

export default function ProofGallery({
  items,
  privacyNote,
  replacementNote,
  className = "",
}: ProofGalleryProps) {
  return (
    <div className={className}>
      <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <li key={`${item.title}-${item.label}`}>
            <EvidenceCard {...item} />
          </li>
        ))}
      </ul>
      {(privacyNote || replacementNote) && (
        <div className="mt-6 space-y-2 text-sm leading-relaxed text-muted">
          {privacyNote && <p>{privacyNote}</p>}
          {replacementNote && <p>{replacementNote}</p>}
        </div>
      )}
    </div>
  );
}
