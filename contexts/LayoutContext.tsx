"use client";

import { createContext, useContext, useState } from "react";

interface LayoutContextType {
  isSidebarPinned: boolean;
  isSidebarHovered: boolean;
  isMobileOpen: boolean;
  togglePin: () => void;
  setHovered: (hovered: boolean) => void;
  openMobile: () => void;
  closeMobile: () => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  // Pinned = permanently expanded on desktop
  const [isSidebarPinned, setIsSidebarPinned] = useState(false);
  // Hovered = temporarily expanded on desktop when mouse enters
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  // Mobile drawer open/close
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const togglePin = () => {
    setIsSidebarPinned((prev) => !prev);
  };

  const setHovered = (hovered: boolean) => {
    setIsSidebarHovered(hovered);
  };

  const openMobile = () => {
    setIsMobileOpen(true);
  };

  const closeMobile = () => {
    setIsMobileOpen(false);
  };

  return (
    <LayoutContext.Provider
      value={{
        isSidebarPinned,
        isSidebarHovered,
        isMobileOpen,
        togglePin,
        setHovered,
        openMobile,
        closeMobile,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
}
