"use client";

import type { ReactNode } from "react";
import CustomCursor from "@/components/CustomCursor";
import { NavOverlay } from "@/components/Header";
import { MenuProvider } from "@/lib/menu-context";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <MenuProvider>
      <CustomCursor />
      <NavOverlay />
      {children}
    </MenuProvider>
  );
}
