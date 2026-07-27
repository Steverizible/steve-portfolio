"use client";

import Button from "@/components/Button";
import { useLocalTime } from "@/lib/use-local-time";
import { navigation, siteMeta } from "@/lib/site-data";

/** Framer-style top bar for inner pages (projects, case studies, contact). */
export default function PageChrome() {
  const time = useLocalTime();

  return (
    <header className="w-full border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="grid w-full grid-cols-3 items-center px-6 py-4 md:px-10 lg:px-14">
        <p className="text-[11px] font-medium uppercase tracking-wide text-muted md:text-xs">
          {navigation.localPrefix}
          <span className="text-[color:var(--time)] text-foreground">{time || "—"}</span>
        </p>

        <div className="flex justify-center" aria-hidden="true">
          <div className="h-10 w-10" />
        </div>

        <div className="flex items-center justify-end gap-4">
          <span className="hidden text-xs font-semibold uppercase tracking-wide sm:inline">
            {siteMeta.name}
          </span>
          <Button
            href={navigation.contactCta.href}
            variant="solid"
            className="!px-5 !py-2.5 !text-[11px] font-[family-name:var(--font-inter-tight)] uppercase"
          >
            {navigation.contactCta.label}
          </Button>
        </div>
      </div>
    </header>
  );
}
