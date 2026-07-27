"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { clamp } from "@/lib/motion";

type ZoomMediaProps = {
  children: ReactNode;
  className?: string;
  /** Extra classes on the inner scaled layer. */
  mediaClassName?: string;
  /** Start scale when the media first enters (zoomed in). */
  enterScale?: number;
  /** End scale as the media leaves / settles (zoomed out). */
  exitScale?: number;
};

/**
 * Scroll-linked zoom: media enters slightly zoomed in, then eases out as you scroll.
 * Respects prefers-reduced-motion.
 */
export default function ZoomMedia({
  children,
  className = "",
  mediaClassName = "",
  enterScale = 1.14,
  exitScale = 1,
}: ZoomMediaProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(enterScale);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduceMotion) {
      setScale(1);
      return;
    }

    let frame = 0;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 0 when fully below viewport, 1 when fully above
      const start = vh;
      const end = -rect.height;
      const progress = clamp((start - rect.top) / (start - end), 0, 1);
      // Ease: mostly zoom out through the first half of travel
      const t = 1 - Math.pow(1 - progress, 1.6);
      setScale(enterScale + (exitScale - enterScale) * t);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [enterScale, exitScale, reduceMotion]);

  const style = {
    transform: `scale(${reduceMotion ? 1 : scale})`,
  } as CSSProperties;

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        className={`h-full w-full origin-center will-change-transform ${mediaClassName}`}
        style={style}
      >
        {children}
      </div>
    </div>
  );
}
