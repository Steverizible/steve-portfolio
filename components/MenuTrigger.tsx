"use client";

import { useMenu } from "@/lib/menu-context";

export default function MenuTrigger() {
  const { isOpen, toggleMenu } = useMenu();

  return (
    <button
      type="button"
      onClick={toggleMenu}
      className={`menu-trigger flex h-8 w-8 items-center justify-center ${isOpen ? "is-active" : ""}`}
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
