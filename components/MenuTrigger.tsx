"use client";

import { useMenu } from "@/lib/menu-context";

export default function MenuTrigger() {
  const { isOpen, toggleMenu } = useMenu();

  return (
    <button
      type="button"
      onClick={toggleMenu}
      className={`menu-trigger flex h-10 w-10 items-center justify-center rounded-full transition-[background-color,color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen ? "is-active scale-95 opacity-0" : "bg-transparent text-foreground"
      }`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      tabIndex={isOpen ? -1 : 0}
    >
      <span className="menu-dots" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="menu-dot" />
        ))}
      </span>
    </button>
  );
}
