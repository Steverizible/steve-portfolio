"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import { useMenu } from "@/lib/menu-context";
import { handleNavHref, setPendingHash } from "@/lib/scroll";
import { useLocalTime } from "@/lib/use-local-time";
import { featuredWork, navigation, projects, siteMeta } from "@/lib/site-data";

const OVERLAY_ID = "primary-navigation";

/** Maps an overlay link to its editorial color token (see globals.css --nav-*). */
function navColorVar(href: string, label: string): string {
  if (href.startsWith("/#top") || label === "Home") return "var(--nav-home)";
  if (href.startsWith("/#work") || label === "Work") return "var(--nav-work)";
  if (href.startsWith("/role-fit")) return "var(--nav-role-fit)";
  if (href.startsWith("/how-i-build-with-ai")) return "var(--nav-ai)";
  if (href.startsWith("/contact")) return "var(--nav-contact)";
  return "var(--nav-work)";
}

export function NavOverlay() {
  const { isOpen, closeMenu, openerRef } = useMenu();
  const time = useLocalTime();
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  // Robust body-scroll lock: pin the body with position:fixed and restore the
  // exact scroll position on close. Plain `overflow:hidden` does not stop
  // background scroll on iOS and loses the reading position.
  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    const { body } = document;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
    };

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.left = prev.left;
      body.style.right = prev.right;
      body.style.width = prev.width;
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  // Escape to close + focus trap while open.
  useEffect(() => {
    if (!isOpen) return;

    const overlay = overlayRef.current;
    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 60);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }
      if (event.key !== "Tab" || !overlay) return;

      const focusable = overlay.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeMenu]);

  // Return focus to whatever opened the menu.
  const wasOpen = useRef(false);
  useEffect(() => {
    if (wasOpen.current && !isOpen) {
      openerRef.current?.focus?.();
    }
    wasOpen.current = isOpen;
  }, [isOpen, openerRef]);

  const handleNavClick = useCallback(
    (href: string) => {
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
    },
    [closeMenu, router]
  );

  const overlayProjects = featuredWork.projectIds
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  const isActive = (href: string) => {
    if (href.startsWith("/#") || href === "/#top") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div
      id={OVERLAY_ID}
      ref={overlayRef}
      className={`fixed inset-0 z-[100] flex flex-col bg-background transition-[transform,opacity] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      }`}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal={isOpen}
      aria-label="Site navigation"
    >
      <div
        className="grid w-full grid-cols-3 items-center px-6 py-4 md:px-10 lg:px-14"
        style={{ paddingTop: "max(1rem, env(safe-area-inset-top))" }}
      >
        <p className="text-xs font-medium uppercase tracking-wide text-muted">
          {navigation.localPrefix}
          <span className="text-foreground">{time || "—"}</span>
        </p>

        <div className="flex justify-center">
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeMenu}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            aria-label="Close menu"
            tabIndex={isOpen ? 0 : -1}
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
          {navigation.overlayLinks.map((link, index) => {
            const active = isActive(link.href);
            return (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                aria-current={active ? "page" : undefined}
                tabIndex={isOpen ? 0 : -1}
                style={{
                  color: navColorVar(link.href, link.label),
                  transitionDelay: isOpen ? `${120 + index * 60}ms` : "0ms",
                }}
                className={`nav-overlay-link relative text-5xl font-bold uppercase tracking-tight transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current md:text-7xl lg:text-8xl ${
                  active ? "is-active-nav underline decoration-2 underline-offset-8" : ""
                } ${isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
              >
                {link.label}
                {link.badge ? (
                  <sup className="ml-1 align-super text-[0.35em] font-semibold normal-case tracking-normal">
                    ({link.badge})
                  </sup>
                ) : null}
              </button>
            );
          })}
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

      <div
        className="flex w-full items-center justify-between border-t border-border px-6 py-4 text-xs uppercase tracking-wide text-muted md:px-10 lg:px-14"
        style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
      >
        <span>{siteMeta.rightsReserved}</span>
        <Link
          href="/#top"
          tabIndex={isOpen ? 0 : -1}
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
