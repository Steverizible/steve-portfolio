"use client";

import { useMenu } from "@/lib/menu-context";

/** In-flow four-dot control — scrolls with the page, rotates to a cross on hover. */
export default function MenuTrigger() {
  const { isOpen, openMenu } = useMenu();

  return (
    <button
      type="button"
      onClick={openMenu}
      className="menu-trigger flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-foreground transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
      aria-label="Open menu"
      aria-expanded={isOpen}
    >
      <span className="menu-dots" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="menu-dot" />
        ))}
      </span>
    </button>
  );
}
