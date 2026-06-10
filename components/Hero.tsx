import Link from "next/link";
import { hero } from "@/lib/site-data";

export default function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[clamp(3rem,12vw,9rem)] font-bold uppercase leading-[0.9] tracking-tight">
            {hero.headline}
          </h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.35em] text-muted md:text-base">
            {hero.tagline}
          </p>
          <div className="mt-10 w-full max-w-3xl border-t border-border pt-6">
            <div className="flex flex-col items-center justify-between gap-4 text-xs font-medium uppercase tracking-wide text-muted sm:flex-row">
              <p>{hero.locationLabel}</p>
              <p>
                {hero.roles[0]}
                <span className="mx-2 text-border">+</span>
                {hero.roles[1]}
              </p>
            </div>
          </div>
          <Link
            href={hero.cta.href}
            className="mt-10 hidden rounded-full border-2 border-foreground px-8 py-3 text-xs font-semibold uppercase tracking-wide transition-colors hover:bg-foreground hover:text-background sm:inline-block"
          >
            {hero.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
