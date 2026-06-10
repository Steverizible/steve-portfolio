"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation, siteMeta } from "@/lib/site-data";

function formatLocalTime() {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(formatLocalTime());
    const interval = setInterval(() => setTime(formatLocalTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-10">
          <p className="text-xs font-medium tracking-wide text-muted uppercase">
            {navigation.localPrefix}
            <span className="text-foreground">{time || "—"}</span>
          </p>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-card"
            aria-label="Open menu"
          >
            <span className="flex flex-col gap-1">
              <span className="block h-0.5 w-4 bg-foreground" />
              <span className="block h-0.5 w-4 bg-foreground" />
            </span>
          </button>

          <Link
            href={navigation.contactCta.href}
            className="rounded-full bg-foreground px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-background transition-opacity hover:opacity-90"
          >
            {navigation.contactCta.label}
          </Link>
        </div>

        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 border-t border-border px-6 py-3 md:px-10">
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            {navigation.availabilityLabel}
          </p>
          <nav className="hidden items-center gap-6 sm:flex" aria-label="Primary">
            {navigation.headerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wide transition-opacity hover:opacity-60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-background">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">
            <p className="text-xs font-medium tracking-wide text-muted uppercase">
              {navigation.localPrefix}
              <span className="text-foreground">{time}</span>
            </p>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border"
              aria-label="Close menu"
            >
              <span className="text-lg leading-none">×</span>
            </button>
            <Link
              href={navigation.contactCta.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-foreground px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-background"
            >
              Contact
            </Link>
          </div>

          <nav
            className="flex flex-1 flex-col items-center justify-center gap-2"
            aria-label="Overlay"
          >
            {navigation.overlayLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center gap-2 text-4xl font-bold uppercase tracking-tight transition-opacity hover:opacity-60 md:text-6xl"
              >
                {link.badge && (
                  <span className="text-sm font-medium text-muted">{link.badge}</span>
                )}
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mx-auto flex w-full max-w-7xl items-center justify-between border-t border-border px-6 py-4 text-xs text-muted md:px-10">
            <span>{siteMeta.rightsReserved}</span>
            <span className="uppercase">{siteMeta.name}</span>
          </div>
        </div>
      )}
    </>
  );
}
