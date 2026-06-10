import Link from "next/link";
import type { ReactNode } from "react";

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
  const classes = `btn-premium ${variant === "solid" ? "btn-solid" : "btn-outline"} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
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
