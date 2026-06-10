import Image from "next/image";
import { awardImages } from "@/lib/images";
import { awardsMedia } from "@/lib/site-data";

export default function Awards() {
  return (
    <section className="border-b border-border bg-white">
      <div className="w-full px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[200px_1fr] lg:gap-16">
          <h2 className="text-4xl font-bold uppercase tracking-tight md:text-5xl">
            {awardsMedia.title}
          </h2>

          <ul className="divide-y divide-border border-t border-border">
            {awardsMedia.items.map((item) => {
              const imageSrc = awardImages[item.id];
              return (
                <li key={item.id} className="flex gap-6 py-8 first:pt-8">
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
                    <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
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
      </div>
    </section>
  );
}
