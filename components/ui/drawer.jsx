"use client";

import { useState, useCallback, useEffect, createContext, useContext } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

// ---------------------------------------------
// Context
// ---------------------------------------------
const DrawerContext = createContext();

export function Drawer({ children }) {
  const [open, setOpen] = useState(false);

  const value = {
    open,
    setOpen,
  };

  return <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>;
}

export function useDrawer() {
  const ctx = useContext(DrawerContext);
  if (!ctx) throw new Error("Drawer components must be used inside <Drawer>");
  return ctx;
}

// ---------------------------------------------
// Trigger Button
// ---------------------------------------------
Drawer.Trigger = function DrawerTrigger({ children }) {
  const { setOpen } = useDrawer();
  return (
    <div
      onClick={() => setOpen(true)}
      role="button"
      tabIndex={0}
      className="cursor-pointer"
    >
      {children}
    </div>
  );
};

// ---------------------------------------------
// Overlay
// ---------------------------------------------
Drawer.Overlay = function DrawerOverlay() {
  const { open, setOpen } = useDrawer();
  if (!open) return null;

  return createPortal(
    <div
      onClick={() => setOpen(false)}
      className={clsx(
        "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity",
        open ? "opacity-100" : "opacity-0"
      )}
    />,
    document.body
  );
};

// ---------------------------------------------
// Content (Drawer Panel)
// ---------------------------------------------
Drawer.Content = function DrawerContent({
  children,
  side = "right", // "left" | "right" | "top" | "bottom"
  width = "w-80",
  height = "h-80",
  className = "",
}) {
  const { open, setOpen } = useDrawer();
  const [mounted, setMounted] = useState(false);

  // Mount animation
  useEffect(() => {
    if (open) setMounted(true);
  }, [open]);

  // Close on ESC
  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") setOpen(false);
    },
    [setOpen]
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, handleKey]);

  if (!mounted) return null;

  // Side-based animation control
  const sideClass = {
    right: `right-0 top-0 h-full ${width} translate-x-full`,
    left: `left-0 top-0 h-full ${width} -translate-x-full`,
    top: `top-0 left-0 w-full ${height} -translate-y-full`,
    bottom: `bottom-0 left-0 w-full ${height} translate-y-full`,
  };

  const sideAnimate = {
    right: "translate-x-0",
    left: "translate-x-0",
    top: "translate-y-0",
    bottom: "translate-y-0",
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 pointer-events-none"
      aria-modal="true"
      role="dialog"
    >
      <div
        className={clsx(
          "pointer-events-auto fixed bg-neutral-900 text-neutral-100 shadow-xl border border-neutral-800 transition-transform duration-300 ease-out",
          sideClass[side],
          open ? sideAnimate[side] : "",
          className
        )}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

// ---------------------------------------------
// Close Button Helper
// ---------------------------------------------
Drawer.Close = function DrawerClose({ children }) {
  const { setOpen } = useDrawer();

  return (
    <div
      className="cursor-pointer"
      role="button"
      tabIndex={0}
      onClick={() => setOpen(false)}
    >
      {children}
    </div>
  );
};