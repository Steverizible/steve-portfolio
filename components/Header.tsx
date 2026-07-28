"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import { useMenu } from "@/lib/menu-context";
import { handleNavHref, setPendingHash } from "@/lib/scroll";
import { useLocalTime } from "@/lib/use-local-time";
import { featuredWork, navigation, projects, siteMeta } from "@/lib/site-data";

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

  const overlayProjects = featuredWork.projectIds
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col bg-background transition-[transform,opacity] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      }`}
      aria-hidden={!isOpen}
    >
      <div className="grid w-full grid-cols-3 items-center px-6 py-4 md:px-10 lg:px-14">
        <p className="text-xs font-medium uppercase tracking-wide text-muted">
          {navigation.localPrefix}
          <span className="text-foreground">{time || "—"}</span>
        </p>

        <div className="flex justify-center">
          <button
            type="button"
            onClick={closeMenu}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-95"
            aria-label="Close menu"
          >
            <span className="text-2xl font-light leading-none" aria-hidden="true">
              ×
            </span>
          </button>
        </div>

        <div className="flex justify-end">
          <Button
            href={navigation.contactCta.href}
            variant="solid"
            className="!px-5 !py-2.5 font-[family-name:var(--font-inter-tight)] uppercase"
            onClick={closeMenu}
          >
            {navigation.contactCta.label}
          </Button>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
        <nav
          className="flex flex-col items-center justify-center gap-2 px-6 py-10 md:gap-3 md:py-14"
          aria-label="Main navigation"
        >
          {navigation.overlayLinks.map((link, index) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNavClick(link.href)}
              className={`nav-overlay-link relative text-5xl font-bold uppercase tracking-tight transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:opacity-50 md:text-7xl lg:text-8xl ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? `${120 + index * 60}ms` : "0ms" }}
            >
              {link.label}
              {link.badge ? (
                <sup className="ml-1 align-super text-[0.35em] font-semibold normal-case tracking-normal">
                  ({link.badge})
                </sup>
              ) : null}
            </button>
          ))}
        </nav>

        <div className="mx-auto w-full max-w-5xl px-6 pb-10 md:px-10 lg:px-14">
          <div className="grid gap-4 sm:grid-cols-2">
            {overlayProjects.map((project) => (
              <div
                key={project.id}
                onClick={closeMenu}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") closeMenu();
                }}
                role="presentation"
                className={project.featuredWide ? "sm:col-span-2" : ""}
              >
                <ProjectCard project={project} variant="featured" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-between border-t border-border px-6 py-4 text-xs uppercase tracking-wide text-muted md:px-10 lg:px-14">
        <span>{siteMeta.rightsReserved}</span>
        <Link
          href="/#top"
          onClick={(event) => {
            event.preventDefault();
            closeMenu();
            window.setTimeout(() => handleNavHref("#top"), 320);
          }}
          className="transition-opacity hover:opacity-60"
        >
          {siteMeta.name}
        </Link>
      </div>
    </div>
  );
}
