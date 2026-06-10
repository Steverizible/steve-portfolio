"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isView, setIsView] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine) and (min-width: 1024px)");

    const applyEnabled = (matches: boolean) => {
      setEnabled(matches);
      document.body.classList.toggle("custom-cursor-enabled", matches);
    };

    applyEnabled(mediaQuery.matches);

    const onChange = (event: MediaQueryListEvent) => applyEnabled(event.matches);
    mediaQuery.addEventListener("change", onChange);

    return () => {
      mediaQuery.removeEventListener("change", onChange);
      document.body.classList.remove("custom-cursor-enabled");
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const animate = () => {
      positionRef.current.x += (targetRef.current.x - positionRef.current.x) * 0.18;
      positionRef.current.y += (targetRef.current.y - positionRef.current.y) * 0.18;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    const onMove = (event: MouseEvent) => {
      targetRef.current = { x: event.clientX, y: event.clientY };
      setVisible(true);
    };

    const onLeave = () => setVisible(false);

    const onOver = (event: MouseEvent) => {
      const target = (event.target as Element | null)?.closest("[data-cursor-view]");
      setIsView(Boolean(target));
    };

    rafRef.current = requestAnimationFrame(animate);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${visible ? "is-visible" : ""} ${isView ? "is-view" : ""}`}
      aria-hidden="true"
    >
      <span className="custom-cursor-label">View</span>
    </div>
  );
}
