import Image from "next/image";
import Link from "next/link";

export type EvidenceProofType =
  | "Performance"
  | "Product"
  | "Workflow"
  | "Creative"
  | "Technical"
  | "Research";

export type EvidenceSourceStatus =
  | "Real"
  | "Redacted"
  | "Illustrative"
  | "Temporary";

type EvidenceCardProps = {
  label: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  proofType: EvidenceProofType;
  sourceStatus: EvidenceSourceStatus;
  href?: string;
  className?: string;
};

const STATUS_CLASS: Record<EvidenceSourceStatus, string> = {
  Real: "border-foreground/40 text-foreground",
  Redacted: "border-border text-muted",
  Illustrative: "border-dashed border-border text-muted",
  Temporary: "border-dashed border-border/70 text-muted",
};

export default function EvidenceCard({
  label,
  title,
  description,
  imageSrc,
  imageAlt,
  proofType,
  sourceStatus,
  href,
  className = "",
}: EvidenceCardProps) {
  const content = (
    <>
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#ddd]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center text-sm text-muted">
            {proofType} evidence slot
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            {label}
          </span>
          <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-muted">
            {proofType}
          </span>
          <span
            className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide ${STATUS_CLASS[sourceStatus]}`}
          >
            {sourceStatus}
          </span>
        </div>
        <h3 className="mt-4 text-lg font-bold uppercase tracking-tight">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </>
  );

  const classes = `flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={`${classes} transition-shadow duration-300 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground`}
      >
        {content}
      </Link>
    );
  }

  return <article className={classes}>{content}</article>;
}
