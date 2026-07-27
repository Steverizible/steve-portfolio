"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type RefObject } from "react";
import Button from "@/components/Button";
import LogoTicker from "@/components/LogoTicker";
import { sectionImages } from "@/lib/images";
import { clamp, easeOutCubic, phase } from "@/lib/motion";
import { moreAboutSteve } from "@/lib/site-data";

const SCROLL_TRACK = "h-[190vh] md:h-[220vh] lg:h-[240vh]";

const PILL_CLASS =
  "relative overflow-hidden rounded-[140px] border border-border bg-card md:rounded-[160px]";

const PILL_SIZE_CLASS =
  "h-[min(64vh,560px)] w-[min(40vw,260px)] md:h-[min(68vh,620px)] md:w-[min(32vw,300px)] lg:w-[320px]";

const HEADING_LINE_CLASS =
  "block text-[clamp(2.25rem,7vw,5.25rem)]";

export default function About() {
  const stageRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [bodyVisible, setBodyVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(800);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const updateViewport = () => setViewportHeight(window.innerHeight);
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || reduceMotion) return;

    let frame = 0;

    const updateScroll = () => {
      const rect = stage.getBoundingClientRect();
      const scrollable = stage.offsetHeight - window.innerHeight;
      const scrolled = clamp(-rect.top, 0, scrollable);
      const progress = scrollable > 0 ? scrolled / scrollable : 0;
      setScrollProgress(progress);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateScroll();
      });
    };

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [reduceMotion]);

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
      { threshold: 0.12, rootMargin: "0px" }
    );

    observer.observe(body);
    return () => observer.disconnect();
  }, []);

  const p = scrollProgress;

  // Step A — heading enters from above (0 → ~28%)
  const headingEnter = easeOutCubic(phase(p, 0, 0.28));
  // Step B/C — heading drifts down + shrinks behind rising pill
  const headingExit = easeOutCubic(phase(p, 0.26, 0.86));
  // Pill rises into center
  const pillRise = easeOutCubic(phase(p, 0.18, 0.86));
  // Pill zooms in on entry, then zooms out as scroll continues
  const pillZoomOut = easeOutCubic(phase(p, 0.2, 0.92));
  // Fully hide type once covered — no leftover sides showing through
  const headingBehindFade = easeOutCubic(phase(p, 0.42, 0.78));

  const headingY = reduceMotion
    ? 0
    : (1 - headingEnter) * -72 + headingExit * (viewportHeight * 0.18);
  const headingScale = reduceMotion ? 1 : 1 - headingExit * 0.62;
  const headingOpacity = reduceMotion
    ? 1
    : headingEnter * (1 - headingBehindFade);

  const pillStartOffset = viewportHeight * 0.48;
  const pillY = reduceMotion ? 0 : pillStartOffset * (1 - pillRise);
  // Enter zoomed in (~1.22), settle zoomed out (~0.92)
  const pillScale = reduceMotion ? 1 : 1.22 - pillZoomOut * 0.3;

  if (reduceMotion) {
    return (
      <section className="relative border-b border-border bg-background" id="about">
        <div className="w-full px-6 py-16 text-center md:px-10 md:py-24 lg:px-14">
          <SectionHeading />
          <div className={`mx-auto mt-10 ${PILL_CLASS} ${PILL_SIZE_CLASS}`}>
            <Image
              src={sectionImages.about}
              alt="Steve Watts"
              fill
              className="object-cover object-top"
              sizes="320px"
              priority
            />
          </div>
        </div>

        <BodyContent bodyRef={bodyRef} bodyVisible={true} />
        <LogoTicker />
      </section>
    );
  }

  return (
    <section className="relative border-b border-border bg-background" id="about">
      <div ref={stageRef} className={`relative z-10 w-full ${SCROLL_TRACK}`}>
        <div className="sticky top-0 isolate h-svh w-full overflow-hidden bg-background">
          {/* Heading — shrinks + fades completely behind the pill */}
          <div
            className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center px-6 will-change-transform lg:px-14"
            style={{
              transform: `translate3d(0, ${headingY}px, 0) scale(${headingScale})`,
              opacity: headingOpacity,
            }}
          >
            <SectionHeading />
          </div>

          {/* Pill — rises and zooms out over the title */}
          <div
            className="pointer-events-none absolute inset-0 z-[3] flex items-center justify-center will-change-transform"
            style={{
              transform: `translate3d(0, ${pillY}px, 0) scale(${pillScale})`,
            }}
          >
            <div className={`${PILL_CLASS} ${PILL_SIZE_CLASS}`}>
              <Image
                src={sectionImages.about}
                alt="Steve Watts"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 260px, 320px"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <BodyContent bodyRef={bodyRef} bodyVisible={bodyVisible} />
      <LogoTicker />
    </section>
  );
}

function SectionHeading() {
  return (
    <h2
      className="text-center font-bold uppercase leading-[0.9] tracking-tight text-foreground"
      aria-label={moreAboutSteve.title}
    >
      {moreAboutSteve.titleLines.map((line) => (
        <span key={line} className={HEADING_LINE_CLASS}>
          {line}
        </span>
      ))}
    </h2>
  );
}

function BodyContent({
  bodyRef,
  bodyVisible,
}: {
  bodyRef: RefObject<HTMLDivElement | null>;
  bodyVisible: boolean;
}) {
  return (
    <div
      ref={bodyRef}
      className={`relative z-0 w-full bg-background px-6 pb-16 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-10 md:pb-20 lg:px-14 lg:pb-24 motion-reduce:transition-none motion-reduce:transform-none ${
        bodyVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
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
      </div>
    </div>
  );
}
