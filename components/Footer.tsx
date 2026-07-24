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

          <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer">
            {contact.footerNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) => onNavClick(event, link.href)}
                className="transition-opacity hover:opacity-60"
              >
                {link.label}
              </Link>
            ))}
          </nav>

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
