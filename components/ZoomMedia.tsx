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
  /** Resting fill scale (frame stays put; image never shrinks away). */
  minScale?: number;
  /** Peak scale when centered — image comes forward / expands in place. */
  maxScale?: number;
};

/**
 * Scroll-linked push-in zoom: the frame stays still; only the image expands
 * forward as it crosses the viewport center, then eases back.
 * Respects prefers-reduced-motion.
 */
export default function ZoomMedia({
  children,
  className = "",
  mediaClassName = "",
  minScale = 1,
  maxScale = 1.18,
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
      const centerY = rect.top + rect.height / 2;
      const progress = clamp((vh - centerY) / vh, 0, 1);
      // Peak expand when centered — no translate, only scale
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
    transform: `scale3d(${reduceMotion ? 1 : scale}, ${reduceMotion ? 1 : scale}, 1)`,
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
