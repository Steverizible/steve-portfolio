"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Button from "@/components/Button";
import { useMenu } from "@/lib/menu-context";
import { handleNavHref, setPendingHash } from "@/lib/scroll";
import { useLocalTime } from "@/lib/use-local-time";
import { navigation, siteMeta } from "@/lib/site-data";

export function NavOverlay() {
  const { isOpen, closeMenu } = useMenu();
  const time = useLocalTime();
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    closeMenu();

    window.setTimeout(() => {
      if (handleNavHref(href)) return;

      if (href.startsWith("/#")) {
        setPendingHash(href.slice(1));
        router.push("/");
        return;
      }

      if (href.startsWith("/")) {
        router.push(href);
      }
    }, 320);
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
          <span className="text-foreground">{time || "—"}</span>
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
        {navigation.overlayLinks.map((link, index) => (
          <button
            key={link.href}
            type="button"
            onClick={() => handleNavClick(link.href)}
            className={`nav-overlay-link text-4xl font-bold uppercase tracking-tight transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:opacity-50 md:text-6xl lg:text-7xl ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: isOpen ? `${120 + index * 60}ms` : "0ms" }}
          >
            {link.label}
          </button>
        ))}
      </nav>

      <div className="flex w-full items-center justify-between border-t border-border px-6 py-4 text-xs text-muted md:px-10 lg:px-14">
        <span>{siteMeta.rightsReserved}</span>
        <Link
          href="#top"
          onClick={(event) => {
            event.preventDefault();
            closeMenu();
            window.setTimeout(() => handleNavHref("#top"), 320);
          }}
          className="uppercase transition-opacity hover:opacity-60"
        >
          {siteMeta.name}
        </Link>
      </div>
    </div>
  );
}
