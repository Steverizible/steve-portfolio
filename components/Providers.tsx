"use client";

import type { ReactNode } from "react";
import { ViewTransition } from "react";
import CustomCursor from "@/components/CustomCursor";
import HashScroll from "@/components/HashScroll";
import { NavOverlay } from "@/components/Header";
import { MenuProvider } from "@/lib/menu-context";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <MenuProvider>
      <CustomCursor />
      <HashScroll />
      <NavOverlay />
      <ViewTransition
        enter={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "page-fade" }}
        exit={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "page-fade" }}
        default="page-fade"
      >
        {children}
      </ViewTransition>
    </MenuProvider>
  );
}
