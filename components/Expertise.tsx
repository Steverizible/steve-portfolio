import { expertise } from "@/lib/site-data";

export default function Expertise() {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <h2 className="text-4xl font-bold uppercase tracking-tight md:text-5xl">
          {expertise.title}
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.items.map((item) => (
            <article
              key={item.number}
              className="flex flex-col rounded-xl border border-border bg-card p-6 md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-sm font-medium text-muted">
                  ({item.number})
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-xs text-background">
                  →
                </span>
              </div>
              <h3 className="mt-8 text-lg font-bold uppercase tracking-tight md:text-xl">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
