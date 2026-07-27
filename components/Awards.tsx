import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import StickySectionHeading from "@/components/StickySectionHeading";
import { awardImages } from "@/lib/images";
import { awardsMedia } from "@/lib/site-data";

export default function Awards() {
  return (
    <section className="border-b border-border bg-white">
      <div className="w-full px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-32">
          <StickySectionHeading bgClassName="bg-white">
            {awardsMedia.title}
          </StickySectionHeading>

          <ul className="divide-y divide-border border-t border-border">
            {awardsMedia.items.map((item, index) => {
              const imageSrc = awardImages[item.id];
              return (
                <RevealOnScroll key={item.id} as="li" delayMs={index * 70} className="flex gap-6 py-8 first:pt-8">
                  {imageSrc && (
                    <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-lg border border-border bg-card md:h-28 md:w-40">
                      <Image
                        src={imageSrc}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="160px"
                      />
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-base font-bold tracking-tight md:text-lg">
                          {item.title}
                        </h3>
                        {item.subtitle && (
                          <p className="mt-1 text-sm text-muted">{item.subtitle}</p>
                        )}
                      </div>
                      {item.year && (
                        <span className="text-sm font-medium text-muted">{item.year}</span>
                      )}
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                      {item.description}
                    </p>
                    {item.linkLabel && item.href && (
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-xs font-semibold uppercase tracking-wide underline underline-offset-4 transition-opacity hover:opacity-60"
                      >
                        {item.linkLabel}
                      </Link>
                    )}
                  </div>
                </RevealOnScroll>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
