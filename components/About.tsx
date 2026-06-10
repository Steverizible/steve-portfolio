"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";
import LogoTicker from "@/components/LogoTicker";
import { sectionImages } from "@/lib/images";
import { moreAboutSteve } from "@/lib/site-data";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export default function About() {
  const stageRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [enterProgress, setEnterProgress] = useState(0);
  const [choreoProgress, setChoreoProgress] = useState(0);
  const [bodyVisible, setBodyVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const updateScroll = () => {
      const rect = stage.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const enter = clamp(
        (viewportHeight * 0.88 - rect.top) / (viewportHeight * 0.45),
        0,
        1
      );

      const scrollRange = stage.offsetHeight - viewportHeight * 0.55;
      const scrolled = clamp(viewportHeight * 0.28 - rect.top, 0, scrollRange);
      const choreo = scrollRange > 0 ? scrolled / scrollRange : 0;

      setEnterProgress(enter);
      setChoreoProgress(choreo);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBodyVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "-5% 0px" }
    );

    observer.observe(body);
    return () => observer.disconnect();
  }, []);

  const headingEnterY = reduceMotion ? 0 : (1 - enterProgress) * -44;
  const headingChoreoY = reduceMotion ? 0 : choreoProgress * -110;
  const headingY = headingEnterY + headingChoreoY;
  const headingOpacity = reduceMotion ? 1 : clamp(enterProgress * 1.15, 0, 1);
  const pillY = reduceMotion ? 0 : choreoProgress * -56;

  return (
    <section className="relative border-b border-border bg-background" id="about">
      <div ref={stageRef} className="relative w-full overflow-hidden">
        <div className="relative min-h-[105vh] md:min-h-[125vh] lg:min-h-[135vh]">
          {/* Heading — behind pill (z-10) */}
          <div
            className="pointer-events-none absolute inset-x-0 top-[10vh] z-10 flex justify-center px-6 md:top-[12vh] lg:px-14"
            style={{
              transform: `translate3d(0, ${headingY}px, 0)`,
              opacity: headingOpacity,
              transition: "opacity 0.15s linear",
            }}
          >
            <h2
              className="text-center font-bold uppercase leading-[0.92] tracking-tight text-foreground"
              aria-label={moreAboutSteve.title}
            >
              <span className="block text-[clamp(2.25rem,7.5vw,5.25rem)]">More About</span>
              <span className="block text-[clamp(2.25rem,7.5vw,5.25rem)]">Steve</span>
            </h2>
          </div>

          {/* Pill — foreground (z-30), moves up subtly while sticky */}
          <div
            className="pointer-events-none sticky top-[30vh] z-30 flex justify-center pb-[22vh] md:top-[32vh] md:pb-[26vh]"
            style={{
              transform: `translate3d(0, ${pillY}px, 0)`,
              transition: "transform 0.12s linear",
            }}
          >
            <div
              className="relative h-[min(48vh,440px)] w-[min(34vw,220px)] overflow-hidden rounded-[120px] border border-border bg-card shadow-sm md:h-[min(56vh,520px)] md:w-[min(28vw,280px)] md:rounded-[140px] lg:w-[300px]"
            >
              <Image
                src={sectionImages.about}
                alt="Steve Watts"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 220px, 300px"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Body copy — stable, separate layer */}
      <div
        ref={bodyRef}
        className={`relative z-40 w-full bg-background px-6 pb-16 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-10 md:pb-20 lg:px-14 lg:pb-24 motion-reduce:transition-none motion-reduce:transform-none ${
          bodyVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
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
