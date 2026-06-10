import { faq } from "@/lib/site-data";

export default function FAQ() {
  return (
    <section className="border-b border-border">
      <div className="w-full px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <h2 className="text-center text-3xl font-bold uppercase tracking-tight md:text-4xl">
          {faq.title}
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {faq.topics.map((topic) => (
            <span
              key={topic.id}
              className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
            >
              {topic.label}
            </span>
          ))}
        </div>

        <div className="mt-12 divide-y divide-border border-y border-border lg:px-24">
          {faq.items.map((item) => (
            <details key={item.id} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-medium md:py-6">
                <span className="text-sm md:text-base">{item.question}</span>
                <span className="shrink-0 text-muted transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-muted md:pb-6 md:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
