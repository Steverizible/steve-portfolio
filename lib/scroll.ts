/** Shared smooth-scroll helpers for in-page and cross-route hash navigation. */

const PENDING_HASH_KEY = "pending-scroll-hash";

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToId(id: string, behavior?: ScrollBehavior) {
  const el = document.getElementById(id);
  if (!el) return false;

  const scrollBehavior = behavior ?? (prefersReducedMotion() ? "auto" : "smooth");
  el.scrollIntoView({ behavior: scrollBehavior, block: "start" });
  return true;
}

export function scrollToHash(hash: string, behavior?: ScrollBehavior) {
  if (!hash || hash === "#") {
    window.scrollTo({
      top: 0,
      behavior: behavior ?? (prefersReducedMotion() ? "auto" : "smooth"),
    });
    return true;
  }

  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  if (id === "top") {
    window.scrollTo({
      top: 0,
      behavior: behavior ?? (prefersReducedMotion() ? "auto" : "smooth"),
    });
    return true;
  }

  return scrollToId(id, behavior);
}

export function setPendingHash(hash: string) {
  try {
    sessionStorage.setItem(PENDING_HASH_KEY, hash.startsWith("#") ? hash : `#${hash}`);
  } catch {
    // Ignore storage failures (private mode, etc.)
  }
}

export function consumePendingHash(): string | null {
  try {
    const value = sessionStorage.getItem(PENDING_HASH_KEY);
    if (value) sessionStorage.removeItem(PENDING_HASH_KEY);
    return value;
  } catch {
    return null;
  }
}

/**
 * Resolve a nav href that may be "#section", "/#section", or a full path.
 * Returns true when handled as in-page scroll.
 */
export function handleNavHref(href: string): boolean {
  if (href.startsWith("#")) {
    scrollToHash(href);
    if (href !== "#") {
      history.replaceState(null, "", href === "#top" ? "#" : href);
    }
    return true;
  }

  if (href.startsWith("/#")) {
    if (window.location.pathname === "/") {
      scrollToHash(href.slice(1));
      history.replaceState(null, "", href.slice(1) === "#top" ? "#" : href.slice(1));
      return true;
    }
    return false;
  }

  return false;
}
