import Image from "next/image";

type RedactedScreenshotProps = {
  imageSrc: string;
  alt: string;
  caption: string;
  redactionNote?: string;
  toolLabel?: string;
  proofDescription?: string;
  className?: string;
};

export default function RedactedScreenshot({
  imageSrc,
  alt,
  caption,
  redactionNote = "Private account details, customer data, credentials, and internal identifiers have been removed.",
  toolLabel,
  proofDescription,
  className = "",
}: RedactedScreenshotProps) {
  return (
    <figure
      className={`overflow-hidden rounded-2xl border border-border bg-card ${className}`}
    >
      <div className="relative aspect-[16/10] w-full bg-[#ddd]">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </div>
      <figcaption className="space-y-2 p-5 md:p-6">
        <div className="flex flex-wrap items-center gap-2">
          {toolLabel && (
            <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-muted">
              {toolLabel}
            </span>
          )}
          <span className="rounded-full border border-dashed border-border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-muted">
            Redacted
          </span>
        </div>
        <p className="text-sm font-semibold text-foreground md:text-base">
          {caption}
        </p>
        {proofDescription && (
          <p className="text-sm leading-relaxed text-muted">{proofDescription}</p>
        )}
        <p className="text-xs leading-relaxed text-muted">{redactionNote}</p>
      </figcaption>
    </figure>
  );
}