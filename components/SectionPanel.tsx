import type { ReactNode } from "react";

type SectionPanelProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionPanel({ children, className = "" }: SectionPanelProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-card p-6 md:p-10 lg:p-12 xl:p-14 ${className}`}
    >
      {children}
    </div>
  );
}
