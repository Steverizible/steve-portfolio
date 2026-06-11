"use client";

import { useEffect, useState } from "react";
import Button from "@/components/Button";
import MenuTrigger from "@/components/MenuTrigger";
import { navigation } from "@/lib/site-data";

function formatLocalTime() {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

export default function ProjectPageNav() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(formatLocalTime());
    const interval = setInterval(() => setTime(formatLocalTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full border-b border-border bg-background">
      <div className="grid w-full grid-cols-3 items-center px-6 py-5 md:px-10 md:py-6 lg:px-14">
        <p className="text-[11px] font-medium uppercase tracking-wide text-foreground md:text-xs">
          {navigation.localPrefix}
          {time || "—"}
        </p>

        <div className="flex justify-center">
          <MenuTrigger />
        </div>

        <div className="flex justify-end">
          <Button
            href={navigation.contactCta.href}
            variant="solid"
            className="!px-5 !py-2.5 !text-[11px] md:!text-xs"
          >
            {navigation.contactCta.label}
          </Button>
        </div>
      </div>
    </header>
  );
}
