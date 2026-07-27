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
  /** Scale when far from center (smaller). */
  minScale?: number;
  /** Peak scale when centered in the viewport (bigger). */
  maxScale?: number;
};

/**
 * Scroll-linked zoom: smaller → bigger as it enters center, then bigger → smaller as it leaves.
 * Respects prefers-reduced-motion.
 */
export default function ZoomMedia({
  children,
  className = "",
  mediaClassName = "",
  minScale = 0.92,
  maxScale = 1.12,
}: ZoomMediaProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(minScale);
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
      // 0 when element center is at bottom of viewport, 1 at top
      const centerY = rect.top + rect.height / 2;
      const progress = clamp((vh - centerY) / vh, 0, 1);
      // Smaller → bigger → smaller (peak at mid-viewport)
      const wave = Math.sin(progress * Math.PI);
      setScale(minScale + (maxScale - minScale) * wave);
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
  }, [minScale, maxScale, reduceMotion]);

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
