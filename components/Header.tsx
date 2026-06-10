"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import { useMenu } from "@/lib/menu-context";
import { navigation, siteMeta } from "@/lib/site-data";

function formatLocalTime() {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

function scrollToSection(href: string) {
  if (href === "#top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (href.startsWith("#")) {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}

export function NavOverlay() {
  const { isOpen, closeMenu } = useMenu();
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(formatLocalTime());
    const interval = setInterval(() => setTime(formatLocalTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    closeMenu();

    if (href.startsWith("/#")) {
      const sectionId = href.slice(2);
      if (window.location.pathname !== "/") {
        window.location.href = href;
        return;
      }
      window.setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 320);
      return;
    }

    window.setTimeout(() => scrollToSection(href), 320);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col bg-background transition-[transform,opacity] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      }`}
      aria-hidden={!isOpen}
    >
      <div className="flex w-full items-center justify-between px-6 py-4 md:px-10 lg:px-14">
        <p className="text-xs font-medium uppercase tracking-wide text-muted">
          {navigation.localPrefix}
          <span className="text-foreground">{time}</span>
        </p>
        <button
          type="button"
          onClick={closeMenu}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-opacity hover:opacity-60"
          aria-label="Close menu"
        >
          <span className="text-lg leading-none">×</span>
        </button>
        <Button href={navigation.contactCta.href} variant="solid" className="!px-5 !py-2.5">
          Contact
        </Button>
      </div>

      <nav
        className="flex flex-1 flex-col items-center justify-center gap-3 md:gap-4"
        aria-label="Main navigation"
      >
        {navigation.overlayLinks.map((link) => (
          <button
            key={link.href}
            type="button"
            onClick={() => handleNavClick(link.href)}
            className="text-4xl font-bold uppercase tracking-tight transition-opacity hover:opacity-50 md:text-6xl lg:text-7xl"
          >
            {link.label}
          </button>
        ))}
      </nav>

      <div className="flex w-full items-center justify-between border-t border-border px-6 py-4 text-xs text-muted md:px-10 lg:px-14">
        <span>{siteMeta.rightsReserved}</span>
        <Link href="#top" onClick={closeMenu} className="uppercase transition-opacity hover:opacity-60">
          {siteMeta.name}
        </Link>
      </div>
    </div>
  );
}
