"use client";

import { useEffect, useState } from "react";

function formatLocalTime() {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

/** Live local clock; avoids setState-in-effect lint by deferring the first tick. */
export function useLocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    let cancelled = false;

    const tick = () => {
      if (!cancelled) setTime(formatLocalTime());
    };

    const timeout = window.setTimeout(tick, 0);
    const interval = window.setInterval(tick, 1000);

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, []);

  return time;
}
