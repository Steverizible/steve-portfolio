"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealHeadingProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export default function RevealHeading({
  as: Component = "h2",
  className = "",
  children,
}: RevealHeadingProps) {
  const ref = useRef<HTMLElement>(null);
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
      { threshold: 0.12, rootMargin: "-8% 0px -5% 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      className={`reveal-heading ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}
