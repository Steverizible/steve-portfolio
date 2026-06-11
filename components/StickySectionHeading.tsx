"use client";

import type { ReactNode } from "react";
import RevealHeading from "@/components/RevealHeading";

type StickySectionHeadingProps = {
  children: ReactNode;
  className?: string;
  bgClassName?: string;
};

const defaultHeadingClass =
  "text-3xl font-bold uppercase tracking-tight md:text-5xl lg:text-6xl";

export default function StickySectionHeading({
  children,
  className = defaultHeadingClass,
  bgClassName = "bg-background",
}: StickySectionHeadingProps) {
  return (
    <div className={`sticky-section-heading ${bgClassName}`}>
      <RevealHeading className={className}>{children}</RevealHeading>
    </div>
  );
}
