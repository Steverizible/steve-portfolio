"use client";

import Link from "next/link";
import { navigation, siteMeta } from "@/lib/site-data";

type NavOverlayProps = {
  open: boolean;
  onClose: () => void;
  time: string;
};

export function NavOverlay({ open, onClose, time }: NavOverlayProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-background">
      <div className="flex w-full items-center justify-between px-6 py-4 md:px-10 lg:px-14">
        <p className="text-xs font-medium uppercase tracking-wide text-muted">
          {navigation.localPrefix}
          <span className="text-foreground">{time}</span>
        </p>
        <button
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border"
          aria-label="Close menu"
        >
          <span className="text-lg leading-none">×</span>
        </button>
        <Link
          href={navigation.contactCta.href}
          onClick={onClose}
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
            onClick={onClose}
            className="group flex items-center gap-2 text-4xl font-bold uppercase tracking-tight transition-opacity hover:opacity-60 md:text-6xl"
          >
            {link.badge && (
              <span className="text-sm font-medium text-muted">{link.badge}</span>
            )}
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex w-full items-center justify-between border-t border-border px-6 py-4 text-xs text-muted md:px-10 lg:px-14">
        <span>{siteMeta.rightsReserved}</span>
        <span className="uppercase">{siteMeta.name}</span>
      </div>
    </div>
  );
}
