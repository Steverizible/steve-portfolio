"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { handleNavHref, setPendingHash } from "@/lib/scroll";
import { useRouter } from "next/navigation";
import { contact, siteMeta } from "@/lib/site-data";

export default function Footer() {
  const router = useRouter();
  const markRef = useRef<HTMLParagraphElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = markRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const onNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (handleNavHref(href)) {
      event.preventDefault();
      return;
    }

    if (href.startsWith("/#")) {
      event.preventDefault();
      setPendingHash(href.slice(1));
      router.push("/");
    }
  };

  return (
    <footer className="bg-white">
      <div className="w-full overflow-hidden pt-8 md:pt-12">
        <p
          ref={markRef}
          className={`footer-wordmark w-full text-center font-bold uppercase leading-[0.82] tracking-tight ${
            visible ? "is-visible" : ""
          }`}
          aria-hidden="true"
        >
          {siteMeta.name}
        </p>
      </div>

      <div className="flex w-full flex-col items-center justify-between gap-4 px-6 py-6 text-xs font-medium uppercase tracking-wide text-muted sm:flex-row md:px-10 lg:px-14">
        <p>{siteMeta.copyright}</p>

        <Link
          href="#top"
          onClick={(event) => onNavClick(event, "#top")}
          className="transition-opacity hover:opacity-60"
        >
          {contact.backToTopLabel}
        </Link>
      </div>
    </footer>
  );
}
