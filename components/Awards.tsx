import Image from "next/image";
import SectionPanel from "@/components/SectionPanel";
import StickySectionHeading from "@/components/StickySectionHeading";
import { awardImages } from "@/lib/images";
import { awardsMedia } from "@/lib/site-data";

export default function Awards() {
  return (
    <section className="border-b border-border bg-background">
      <div className="w-full px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <SectionPanel>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-32">
            <StickySectionHeading bgClassName="bg-card">
              {awardsMedia.title}
            </StickySectionHeading>

            <ul className="space-y-4 md:space-y-5">
              {awardsMedia.items.map((item) => {
                const imageSrc = awardImages[item.id];

                return (
                  <li
                    key={item.id}
                    className="flex gap-4 rounded-xl bg-white p-5 md:gap-5 md:p-6"
                  >
                    {imageSrc && (
                      <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-lg border border-border bg-card md:h-28 md:w-36">
                        <Image
                          src={imageSrc}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="144px"
                        />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="text-base font-bold uppercase tracking-tight md:text-lg">
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
                      <p className="mt-4 text-sm leading-relaxed text-foreground md:text-base">
                        {item.description}
                      </p>
                      {item.linkLabel && (
                        <button
                          type="button"
                          className="mt-4 text-xs font-semibold uppercase tracking-wide underline underline-offset-4"
                        >
                          {item.linkLabel}
                        </button>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </SectionPanel>
      </div>
    </section>
  );
}
