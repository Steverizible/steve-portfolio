"use client";

import Image from "next/image";
import Button from "@/components/Button";
import LogoTicker from "@/components/LogoTicker";
import { sectionImages } from "@/lib/images";
import { moreAboutSteve } from "@/lib/site-data";

export default function About() {
  return (
    <section className="relative border-b border-border bg-background" id="about">
      {/* Scroll stage: huge heading passes behind sticky pill */}
      <div className="relative w-full overflow-hidden">
        <div className="relative min-h-[95vh] md:min-h-[115vh] lg:min-h-[125vh]">
          {/* Heading layer — behind the pill (z-10) */}
          <div className="relative z-10 flex justify-center px-6 pt-16 pb-[38vh] md:px-10 md:pt-24 md:pb-[42vh] lg:px-14">
            <h2
              className="text-center font-bold uppercase leading-[0.88] tracking-tight text-foreground"
              aria-label={moreAboutSteve.title}
            >
              <span className="block text-[clamp(3.25rem,17vw,11.5rem)]">More</span>
              <span className="block text-[clamp(3.25rem,17vw,11.5rem)]">About</span>
              <span className="block text-[clamp(3.25rem,17vw,11.5rem)]">Steve</span>
            </h2>
          </div>

          {/* Pill layer — foreground mask (z-30) */}
          <div
            className="pointer-events-none sticky top-[26vh] z-30 -mt-[34vh] flex justify-center pb-[28vh] md:top-[30vh] md:-mt-[38vh] md:pb-[32vh] lg:top-[32vh]"
          >
            <div
              className="relative h-[240px] w-[120px] overflow-hidden rounded-[999px] border border-border bg-card shadow-sm md:h-[320px] md:w-[160px] lg:h-[380px] lg:w-[190px]"
            >
              <Image
                src={sectionImages.about}
                alt="Steve Watts"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 120px, 190px"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Body copy — stable, unaffected by scroll-behind effect */}
      <div className="relative z-40 w-full bg-background px-6 pb-16 md:px-10 md:pb-20 lg:px-14 lg:pb-24">
        <p className="mx-auto max-w-3xl text-center text-lg font-bold uppercase leading-snug tracking-tight md:text-2xl lg:text-3xl">
          {moreAboutSteve.headline}
        </p>

        <div className="mx-auto mt-8 max-w-2xl space-y-4 text-center text-base leading-relaxed text-muted md:text-lg">
          {moreAboutSteve.body.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href={moreAboutSteve.resumeCta.href} variant="outline">
            {moreAboutSteve.resumeCta.label}
          </Button>
          <Button href={moreAboutSteve.readMoreCta.href} variant="solid">
            {moreAboutSteve.readMoreCta.label}
          </Button>
        </div>
      </div>

      <LogoTicker />
    </section>
  );
}
