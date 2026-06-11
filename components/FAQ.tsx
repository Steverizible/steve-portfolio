import RevealHeading from "@/components/RevealHeading";
import { faq } from "@/lib/site-data";

export default function FAQ() {
  return (
    <section className="border-b border-border bg-background">
      <div className="w-full px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="sticky-section-heading bg-background text-center">
          <div
            className="mx-auto h-2.5 w-2.5 rounded-full bg-foreground"
            aria-hidden="true"
          />
          <RevealHeading
            className="mt-8 text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-5xl lg:text-6xl"
          >
            <span className="block">Frequently</span>
            <span className="block">Asked Questions</span>
          </RevealHeading>
        </div>

        <ul className="mt-12 space-y-3 md:mt-16 md:space-y-4">
          {faq.topics.map((topic) => (
            <li key={topic.id}>
              <details className="group rounded-xl border border-border bg-card">
                <summary
                  className="flex cursor-pointer list-none items-center justify-between gap-6 px-5 py-5 text-left md:px-6 md:py-6 [&::-webkit-details-marker]:hidden"
                >
                  <span className="text-sm font-medium uppercase tracking-tight md:text-base">
                    {topic.label}
                  </span>
                  <span
                    className="shrink-0 text-lg font-light leading-none text-muted transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted md:px-6 md:pb-6 md:text-base">
                  {topic.answer}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
