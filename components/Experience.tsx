import Image from "next/image";
import { sectionImages } from "@/lib/images";
import { experience } from "@/lib/site-data";

export default function Experience() {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[200px_1fr] lg:gap-16">
          <h2 className="text-4xl font-bold uppercase tracking-tight md:text-5xl">
            {experience.title}
          </h2>

          <ul className="divide-y divide-border border-t border-border">
            {experience.items.map((item) => (
              <li key={item.id} className="py-8 first:pt-8">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-lg font-bold uppercase tracking-tight">
                      {item.company}
                    </h3>
                    <p className="mt-1 text-sm font-medium uppercase text-muted">
                      {item.role}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-muted shrink-0">{item.period}</p>
                </div>
                {item.description && (
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                    {item.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 overflow-hidden rounded-xl border border-border">
          <div className="relative aspect-[21/9] w-full min-h-[200px] bg-card">
            <Image
              src={sectionImages.experience}
              alt="Experience"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
