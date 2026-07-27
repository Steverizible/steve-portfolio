"use client";

import Link from "next/link";
import Button from "@/components/Button";
import MenuTrigger from "@/components/MenuTrigger";
import { useLocalTime } from "@/lib/use-local-time";
import { hero, navigation } from "@/lib/site-data";

export default function Hero() {
  const time = useLocalTime();

  return (
    <section
      className="relative flex min-h-svh w-full flex-col"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <div className="grid w-full grid-cols-3 items-center px-6 pt-6 md:px-10 md:pt-8 lg:px-14">
        <p className="text-[11px] font-medium uppercase tracking-wide text-foreground md:text-xs">
          {navigation.localPrefix}
          <span className="text-[color:var(--time)]">{time || "—"}</span>
        </p>

        <div className="flex justify-center">
          <MenuTrigger />
        </div>

        <div className="flex justify-end">
          <Button
            href={navigation.contactCta.href}
            variant="solid"
            className="!px-5 !py-2.5 !text-[11px] font-[family-name:var(--font-inter-tight)] uppercase md:!text-xs"
          >
            {navigation.contactCta.label}
          </Button>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-6 py-10 md:px-10 lg:px-14">
        <p className="hero-fade-in flex items-center gap-2 text-[11px] font-medium uppercase tracking-wide text-muted md:text-xs">
          <span
            className="h-2 w-2 shrink-0 rounded-full bg-accent-green"
            aria-hidden="true"
          />
          {navigation.availabilityLabel}
        </p>

        <h1 className="hero-fade-in hero-fade-in-delay-1 mt-6 text-center text-[clamp(3.5rem,14vw,10.5rem)] font-bold uppercase leading-[0.92] tracking-tight text-foreground">
          {hero.headline}
        </h1>

        <p className="hero-fade-in hero-fade-in-delay-2 mt-2 text-center text-[clamp(1.25rem,4.5vw,3.75rem)] font-bold uppercase leading-tight tracking-tight text-muted md:mt-4">
          {hero.tagline}
        </p>
      </div>

      <div className="hero-fade-in hero-fade-in-delay-3 flex w-full flex-col items-center gap-1.5 px-6 pb-6 text-center sm:flex-row sm:items-end sm:justify-between sm:gap-4 sm:text-left md:px-10 md:pb-8 lg:px-14">
        <p className="text-[11px] font-medium uppercase tracking-wide text-foreground md:text-xs">
          {hero.locationLabel}
        </p>
        <p className="text-[11px] font-medium uppercase tracking-wide text-foreground md:text-xs">
          <Link href={hero.roleHref} className="transition-opacity hover:opacity-60">
            {hero.roles[0]}
          </Link>
          {" + "}
          {hero.roles[1]}
        </p>
      </div>
    </section>
  );
}
