"use client";

import Image from "next/image";
import { useEffect } from "react";
import Button from "@/components/Button";
import type { ExpertiseItem } from "@/lib/site-data";

type ExpertiseModalProps = {
  item: ExpertiseItem | null;
  onClose: () => void;
};

export default function ExpertiseModal({ item, onClose }: ExpertiseModalProps) {
  useEffect(() => {
    if (!item) {
      document.body.style.overflow = "";
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="expertise-modal-overlay fixed inset-0 z-[200] overflow-y-auto overflow-x-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="expertise-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
        aria-label="Close modal"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 md:p-6">
        <div className="expertise-modal-panel relative w-full max-w-[920px] overflow-hidden rounded-2xl border border-border bg-background shadow-2xl">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-lg leading-none transition-opacity hover:opacity-60 md:right-5 md:top-5"
            aria-label="Close"
          >
            ×
          </button>

          <div className="grid min-w-0 md:grid-cols-[1fr_1fr]">
            {/* Text */}
            <div className="min-w-0 px-6 pb-8 pt-12 md:px-8 md:py-10">
              <h2
                id="expertise-modal-title"
                className="text-xl font-bold uppercase tracking-tight md:text-2xl"
              >
                {item.modalTitle}
              </h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-muted md:text-base">
                {item.modalSubtitle}
              </p>
              <div className="my-6 h-px w-full bg-border" />
              <p className="text-sm leading-relaxed text-muted md:text-base">
                {item.modalBody}
              </p>
              <div className="mt-8">
                <Button href={item.ctaHref} variant="outline" className="!px-8">
                  {item.ctaLabel}
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="min-w-0 border-t border-border p-4 md:border-l md:border-t-0 md:p-6">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-card md:aspect-auto md:h-full md:min-h-[360px]">
                <Image
                  src={item.modalImage}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 460px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
