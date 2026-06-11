import StickySectionHeading from "@/components/StickySectionHeading";
import { experience } from "@/lib/site-data";

export default function Experience() {
  return (
    <section className="border-b border-border bg-white">
      <div className="w-full px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-32">
          <StickySectionHeading bgClassName="bg-white">
            {experience.title}
          </StickySectionHeading>

          <ul>
            {experience.items.map((item) => (
              <li key={item.id} className="border-t border-border py-8">
                <p className="text-base font-bold uppercase tracking-tight md:text-lg">
                  {item.company}
                </p>

                <div className="mt-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <p className="text-sm font-bold uppercase tracking-tight md:text-base">
                    {item.role}
                  </p>
                  <p className="shrink-0 text-sm font-bold uppercase tracking-tight md:text-base">
                    {item.period}
                  </p>
                </div>

                {item.description && (
                  <p className="mt-4 text-sm leading-relaxed text-foreground md:text-base">
                    {item.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
