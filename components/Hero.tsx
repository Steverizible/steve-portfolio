"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NavOverlay } from "@/components/Header";
import { hero, navigation } from "@/lib/site-data";

function formatLocalTime() {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

function DotGridIcon() {
  return (
    <span className="grid grid-cols-2 gap-[3px]" aria-hidden="true">
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className="h-[3px] w-[3px] rounded-full bg-foreground" />
      ))}
    </span>
  );
}

export default function Hero() {
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
      <section className="relative flex min-h-screen w-full flex-col bg-hero-background">
        {/* Top row */}
        <div className="grid w-full grid-cols-3 items-center px-6 pt-6 md:px-10 md:pt-8 lg:px-14">
          <p className="text-[11px] font-medium uppercase tracking-wide text-foreground md:text-xs">
            {navigation.localPrefix}
            {time || "—"}
          </p>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex h-8 w-8 items-center justify-center"
              aria-label="Open menu"
            >
              <DotGridIcon />
            </button>
          </div>

          <div className="flex justify-end">
            <Link
              href={navigation.contactCta.href}
              className="rounded-full bg-foreground px-5 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-background md:text-xs"
            >
              Contact now
            </Link>
          </div>
        </div>

        {/* Center */}
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-10 md:px-10 lg:px-14">
          <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wide text-muted md:text-xs">
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-accent-green"
              aria-hidden="true"
            />
            {navigation.availabilityLabel}
          </p>

          <h1
            className="mt-6 text-center text-[clamp(3.5rem,14vw,10.5rem)] font-bold uppercase leading-[0.92] tracking-tight text-foreground"
          >
            {hero.headline}
          </h1>

          <p
            className="mt-2 text-center text-[clamp(1.25rem,4.5vw,3.75rem)] font-bold uppercase leading-tight tracking-tight text-muted md:mt-4"
          >
            {hero.tagline}
          </p>
        </div>

        {/* Bottom row */}
        <div className="flex w-full items-end justify-between px-6 pb-6 md:px-10 md:pb-8 lg:px-14">
          <p className="text-[11px] font-medium uppercase tracking-wide text-foreground md:text-xs">
            {hero.locationLabel.replace(",", "")}
          </p>
          <p className="text-[11px] font-medium uppercase tracking-wide text-foreground md:text-xs">
            {hero.roles[0]} + {hero.roles[1]}
          </p>
        </div>
      </section>

      <NavOverlay
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        time={time}
      />
    </>
  );
}
