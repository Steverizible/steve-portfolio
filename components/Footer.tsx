"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MouseEvent } from "react";
import { handleNavHref, setPendingHash } from "@/lib/scroll";
import { contact, siteMeta } from "@/lib/site-data";

export default function Footer() {
  const router = useRouter();

  const onNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (handleNavHref(href)) {
      event.preventDefault();
      return;
    }

    if (href.startsWith("/#")) {
      event.preventDefault();
      setPendingHash(href.slice(1));
      router.push("/");
    }
  };

  return (
    <footer className="bg-background">
      <div className="w-full px-6 pt-10 md:px-10 md:pt-16 lg:px-14">
        <div className="overflow-hidden">
          <p
            className="text-[clamp(3.5rem,18vw,12rem)] font-bold uppercase leading-[0.85] tracking-tight text-foreground"
            aria-hidden="true"
          >
            {siteMeta.name}
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border py-6 text-xs font-medium uppercase tracking-wide text-muted sm:flex-row">
          <p>{siteMeta.copyright}</p>

          <Link
            href="#top"
            onClick={(event) => onNavClick(event, "#top")}
            className="transition-opacity hover:opacity-60"
          >
            {contact.backToTopLabel}
          </Link>
        </div>
      </div>
    </footer>
  );
}
