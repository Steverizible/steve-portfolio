"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { consumePendingHash, scrollToHash } from "@/lib/scroll";

/**
 * Smooth-scrolls to hash targets on first paint, browser back/forward,
 * and same-route hash changes. Also clears stuck page-transition classes.
 */
export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.remove("page-transition-out");
  }, [pathname]);

  useEffect(() => {
    const run = (hash: string | null, behavior: ScrollBehavior = "smooth") => {
      if (!hash) return;
      // Wait a frame so layout/images settle before scrolling.
      window.requestAnimationFrame(() => {
        scrollToHash(hash, behavior);
      });
    };

    const pending = consumePendingHash();
    const hash = pending || window.location.hash;

    // Instant on first load / route entry so deep links land correctly.
    run(hash, pending ? "smooth" : "auto");

    if (pending && pathname === "/" && window.location.hash !== pending) {
      history.replaceState(null, "", pending === "#top" ? "/" : pending);
    }

    const onHashChange = () => run(window.location.hash, "smooth");
    const onPageShow = (event: PageTransitionEvent) => {
      document.body.classList.remove("page-transition-out");
      if (event.persisted) run(window.location.hash, "auto");
    };

    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("pageshow", onPageShow);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("pageshow", onPageShow);
    };
  }, [pathname]);

  return null;
}
