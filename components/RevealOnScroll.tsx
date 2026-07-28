"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms for sequenced reveals. */
  delayMs?: number;
  as?: "div" | "li" | "article" | "section";
  id?: string;
};

export default function RevealOnScroll({
  children,
  className = "",
  delayMs = 0,
  as = "div",
  id,
}: RevealOnScrollProps) {
  const Tag = as as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // threshold: 0 (not 0.1) so sections taller than ~10x the viewport still
    // reveal. With a percentage threshold, an element taller than
    // viewportHeight / threshold can never reach the ratio, leaving it stuck at
    // opacity:0 — the root cause of the large blank area on mobile.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const style = {
    "--reveal-delay": `${delayMs}ms`,
  } as CSSProperties;

  return (
    <Tag
      ref={ref}
      id={id}
      style={style}
      className={`reveal-on-scroll ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
