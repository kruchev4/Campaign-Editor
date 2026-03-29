"use client";

import {
  useState,
  useRef,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

// ---------------------------------------------
// Context
// ---------------------------------------------
const MenuContext = createContext();

export function Menu({ children }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);

  const value = {
    open,
    setOpen,
    triggerRef,
    menuRef,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

function useMenu() {
  const ctx = useContext(MenuContext);
  if (!ctx) {
    throw new Error("Menu components must be used inside <Menu>");
  }
  return ctx;
}

// ---------------------------------------------
// Trigger
// ---------------------------------------------
Menu.Trigger = function MenuTrigger({ children }) {
  const { setOpen, triggerRef, open } = useMenu();

  return (
    <div
      ref={triggerRef}
      onClick={() => setOpen(!open)}
      role="button"
      tabIndex={0}
      className="cursor-pointer select-none"
    >
      {children}
    </div>
  );
};

// ---------------------------------------------
// Content
// ---------------------------------------------
Menu.Content = function MenuContent({
  children,
  align = "left", // left | right
  className = "",
}) {
  const { open, setOpen, triggerRef, menuRef } = useMenu();
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({});

  // Mount animation + positioning
  useEffect(() => {
    if (open) {
      setMounted(true);
      const rect = triggerRef.current?.getBoundingClientRect();
      if (rect) {
        setPosition({
          top: rect.bottom + 4,
          left: align === "left" ? rect.left : rect.right,
          transform: align === "right" ? "translateX(-100%)" : "none",
        });
      }
    }
  }, [open, align, triggerRef]);

  // Close on ESC
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") setOpen(false);
    },
    [setOpen]
  );

  // Close on outside click
  useEffect(() => {
    if (!open) return;

    const handleClick = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !triggerRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, setOpen, triggerRef, menuRef, handleKeyDown]);

  if (!mounted) return null;

  return createPortal(
    open && (
      <div
        ref={menuRef}
        className={clsx(
          "fixed z-50 min-w-[10rem] rounded-md border border-neutral-800 bg-neutral-900 text-neutral-100 shadow-lg p-1 animate-in fade-in-0 zoom-in-95",
          className
        )}
        style={{
          position: "fixed",
          top: position.top,
          left: position.left,
          transform: position.transform,
        }}
        role="menu"
      >
        {children}
      </div>
    ),
    document.body
  );
};

// ---------------------------------------------
// Menu Item
// ---------------------------------------------
Menu.Item = function MenuItem({
  children,
  onSelect,
  disabled = false,
  className = "",
}) {
  const { setOpen } = useMenu();

  const handleClick = () => {
    if (disabled) return;
    onSelect?.();
    setOpen(false);
  };

  return (
    <div
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !disabled) handleClick();
      }}
      className={clsx(
        "rounded-sm px-2 py-1.5 text-sm cursor-pointer select-none outline-none",
        disabled
          ? "opacity-40 cursor-not-allowed"
          : "hover:bg-neutral-800 active:bg-neutral-700",
        className
      )}
    >
      {children}
    </div>
  );
};

// ---------------------------------------------
// Label
// ---------------------------------------------
Menu.Label = function MenuLabel({ children }) {
  return (
    <div className="px-2 py-1 text-xs uppercase tracking-wide text-neutral-500 select-none">
      {children}
    </div>
  );
};

// ---------------------------------------------
// Separator
// ---------------------------------------------
Menu.Separator = function MenuSeparator() {
  return <div className="my-1 h-px w-full bg-neutral-800" />;
};