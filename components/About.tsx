import Image from "next/image";
import Link from "next/link";
import { sectionImages } from "@/lib/images";
import { moreAboutSteve } from "@/lib/site-data";

export default function About() {
  return (
    <section className="border-b border-border" id="about">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          {moreAboutSteve.title}
        </h2>

        <div className="mt-10 flex flex-col items-center">
          <div className="relative h-48 w-48 overflow-hidden rounded-full border border-border md:h-56 md:w-56">
            <Image
              src={sectionImages.about}
              alt="Steve Watts"
              fill
              className="object-cover"
              sizes="224px"
            />
          </div>

          <p className="mt-10 max-w-3xl text-center text-lg font-bold uppercase leading-snug tracking-tight md:text-2xl lg:text-3xl">
            {moreAboutSteve.headline}
          </p>

          <div className="mt-8 max-w-2xl space-y-4 text-center text-base leading-relaxed text-muted">
            {moreAboutSteve.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={moreAboutSteve.resumeCta.href}
              className="rounded-full border-2 border-foreground px-6 py-3 text-xs font-semibold uppercase tracking-wide transition-colors hover:bg-foreground hover:text-background"
            >
              {moreAboutSteve.resumeCta.label}
            </Link>
            <Link
              href={moreAboutSteve.readMoreCta.href}
              className="rounded-full bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-wide text-background transition-opacity hover:opacity-90"
            >
              {moreAboutSteve.readMoreCta.label}
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-6 border-t border-border pt-10 md:gap-10">
            {moreAboutSteve.mediaLogos.map((logo) => (
              <span
                key={logo}
                className="text-xs font-semibold uppercase tracking-widest text-muted/60"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
