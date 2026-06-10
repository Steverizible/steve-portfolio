"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";
import LogoTicker from "@/components/LogoTicker";
import { sectionImages } from "@/lib/images";
import { moreAboutSteve } from "@/lib/site-data";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight * 0.15;
      const end = viewportHeight * 0.75;
      const progress = (start - rect.top) / (end - start);
      setScrollProgress(Math.min(1, Math.max(0, progress)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const textOpacity = Math.max(0, 1 - scrollProgress * 1.4);
  const textTranslate = scrollProgress * 48;

  return (
    <section ref={sectionRef} className="relative border-b border-border" id="about">
      <div className="w-full px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          {moreAboutSteve.title}
        </h2>

        <div className="relative mt-10 min-h-[70vh] md:min-h-[85vh]">
          {/* Sticky pill image — stays prominent while text scrolls */}
          <div className="pointer-events-none sticky top-[12vh] z-30 flex justify-center md:top-[16vh]">
            <div
              className="relative h-[280px] w-[140px] overflow-hidden rounded-[999px] border border-border bg-card shadow-sm md:h-[360px] md:w-[180px]"
            >
              <Image
                src={sectionImages.about}
                alt="Steve Watts"
                fill
                className="object-cover"
                sizes="180px"
                priority
              />
            </div>
          </div>

          {/* Text passes behind the pill via lower z-index + fade */}
          <div
            className="relative z-10 -mt-[180px] pt-[220px] md:-mt-[220px] md:pt-[280px] transition-[opacity,transform] duration-300 ease-out"
            style={{
              opacity: textOpacity,
              transform: `translateY(${textTranslate}px)`,
            }}
          >
            <p className="mx-auto max-w-3xl text-center text-lg font-bold uppercase leading-snug tracking-tight md:text-2xl lg:text-3xl">
              {moreAboutSteve.headline}
            </p>

            <div className="mx-auto mt-8 max-w-2xl space-y-4 text-center text-base leading-relaxed text-muted">
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
        </div>
      </div>

      <LogoTicker />
    </section>
  );
}
