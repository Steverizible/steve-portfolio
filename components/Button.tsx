"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";
import { handleNavHref, setPendingHash } from "@/lib/scroll";

type ButtonVariant = "solid" | "outline";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({
  children,
  href,
  variant = "solid",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const router = useRouter();
  const classes = `btn-premium ${variant === "solid" ? "btn-solid" : "btn-outline"} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          onClick={onClick}
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    }

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      if (handleNavHref(href)) {
        event.preventDefault();
        onClick?.();
        return;
      }

      // Cross-route hash: stash target, navigate home, HashScroll finishes.
      if (href.startsWith("/#")) {
        event.preventDefault();
        onClick?.();
        setPendingHash(href.slice(1));
        router.push("/");
        return;
      }

      onClick?.();
    };

    return (
      <Link href={href} className={classes} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
