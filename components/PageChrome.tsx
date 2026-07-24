"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MouseEvent } from "react";
import Button from "@/components/Button";
import MenuTrigger from "@/components/MenuTrigger";
import { handleNavHref, setPendingHash } from "@/lib/scroll";
import { navigation, siteMeta } from "@/lib/site-data";

/** Compact top bar for inner pages (projects, case studies). */
export default function PageChrome({
  backHref = "/#work",
  backLabel = "Back to work",
}: {
  backHref?: string;
  backLabel?: string;
}) {
  const router = useRouter();

  const onBackClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (handleNavHref(backHref)) {
      event.preventDefault();
      return;
    }

    if (backHref.startsWith("/#")) {
      event.preventDefault();
      setPendingHash(backHref.slice(1));
      router.push("/");
    }
  };

  return (
    <header className="w-full border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="grid w-full grid-cols-3 items-center px-6 py-4 md:px-10 lg:px-14">
        <Link
          href={backHref}
          transitionTypes={["nav-back"]}
          onClick={onBackClick}
          className="text-xs font-semibold uppercase tracking-wide transition-opacity hover:opacity-60"
        >
          {backLabel}
        </Link>

        <div className="flex justify-center">
          <MenuTrigger />
        </div>

        <div className="flex items-center justify-end gap-4">
          <Link
            href="/"
            transitionTypes={["nav-back"]}
            className="hidden text-xs font-semibold uppercase tracking-wide transition-opacity hover:opacity-60 sm:inline"
          >
            {siteMeta.name}
          </Link>
          <Button href={navigation.contactCta.href} variant="solid" className="!px-5 !py-2.5 !text-[11px]">
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
}
