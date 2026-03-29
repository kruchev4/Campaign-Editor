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

// ------------------------------------------------------------
// Context
// ------------------------------------------------------------
const PopoverContext = createContext();

export function Popover({ children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const triggerRef = useRef(null);
  const contentRef = useRef(null);

  const value = {
    open,
    setOpen,
    triggerRef,
    contentRef,
  };

  return <PopoverContext.Provider value={value}>{children}</PopoverContext.Provider>;
}

function usePopover() {
  const ctx = useContext(PopoverContext);
  if (!ctx) throw new Error("Popover components must be used inside <Popover>");
  return ctx;
}

// ------------------------------------------------------------
// Trigger
// ------------------------------------------------------------
Popover.Trigger = function PopoverTrigger({ children }) {
  const { setOpen, open, triggerRef } = usePopover();

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

// ------------------------------------------------------------
// Content
// ------------------------------------------------------------
Popover.Content = function PopoverContent({
  children,
  side = "bottom", // top | bottom | left | right
  className = "",
  align = "center", // start | center | end
}) {
  const { open, setOpen, triggerRef, contentRef } = usePopover();
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  // Recalculate placement when opened
  useEffect(() => {
    if (open) {
      setMounted(true);

      const trigger = triggerRef.current;
      if (!trigger) return;

      const rect = trigger.getBoundingClientRect();
      let top = rect.top;
      let left = rect.left;

      switch (side) {
        case "top":
          top = rect.top - 8;
          break;
        case "bottom":
          top = rect.bottom + 8;
          break;
        case "left":
          left = rect.left - 8;
          break;
        case "right":
          left = rect.right + 8;
          break;
      }

      // Horizontal alignment
      if (side === "top" || side === "bottom") {
        if (align === "center") left = rect.left + rect.width / 2;
        if (align === "end") left = rect.right;
      }

      // Vertical alignment
      if (side === "left" || side === "right") {
        if (align === "center") top = rect.top + rect.height / 2;
        if (align === "end") top = rect.bottom;
      }

      setPosition({ top, left });
    }
  }, [open, side, align, triggerRef]);

  // Escape key close
  const handleKeyClose = useCallback(
    (e) => {
      if (e.key === "Escape") setOpen(false);
    },
    [setOpen]
  );

  // Outside click close
  useEffect(() => {
    if (!open) return;

    const handleClick = (e) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(e.target) &&
        !triggerRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKeyClose);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKeyClose);
    };
  }, [open, setOpen, triggerRef, contentRef, handleKeyClose]);

  if (!mounted) return null;

  return createPortal(
    open && (
      <div
        ref={contentRef}
        role="dialog"
        className={clsx(
          "fixed z-50 min-w-[12rem] rounded-md border border-neutral-800 bg-neutral-900 text-neutral-100 shadow-xl p-3 animate-in fade-in-0 zoom-in-95",
          className
        )}
        style={{
          position: "fixed",
          top: position.top,
          left: position.left,
          transform:
            side === "bottom"
              ? "translateX(-50%)"
              : side === "top"
              ? "translateX(-50%) translateY(-100%)"
              : side === "left"
              ? "translateX(-100%) translateY(-50%)"
              : "translateY(-50%)",
        }}
      >
        {children}
      </div>
    ),
    document.body
  );
};