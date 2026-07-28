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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
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
