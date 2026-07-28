"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

type MenuContextValue = {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
  /** Element that opened the menu, so focus can be restored on close. */
  openerRef: React.MutableRefObject<HTMLElement | null>;
};

const MenuContext = createContext<MenuContextValue | null>(null);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openerRef = useRef<HTMLElement | null>(null);

  const openMenu = useCallback(() => {
    if (typeof document !== "undefined") {
      openerRef.current = document.activeElement as HTMLElement | null;
    }
    setIsOpen(true);
  }, []);
  const closeMenu = useCallback(() => setIsOpen(false), []);
  const toggleMenu = useCallback(() => {
    if (typeof document !== "undefined") {
      openerRef.current = document.activeElement as HTMLElement | null;
    }
    setIsOpen((prev) => !prev);
  }, []);

  const value = useMemo(
    () => ({ isOpen, openMenu, closeMenu, toggleMenu, openerRef }),
    [isOpen, openMenu, closeMenu, toggleMenu]
  );

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within MenuProvider");
  }
  return context;
}
