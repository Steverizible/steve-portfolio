"use client";

import { useMenu } from "@/lib/menu-context";

/** Fixed top-center menu control — same spot open/closed, morphs square dots → cross. */
export default function MenuTrigger() {
  const { isOpen, toggleMenu } = useMenu();

  return (
    <button
      type="button"
      onClick={toggleMenu}
      className={`menu-trigger fixed left-1/2 top-4 z-[110] flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full transition-[background-color,color,transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:top-5 ${
        isOpen
          ? "is-active bg-foreground text-background shadow-md"
          : "bg-transparent text-foreground"
      }`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
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
