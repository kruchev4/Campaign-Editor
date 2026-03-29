// BEGIN USER-PROVIDED CODE
import React, { useState } from "react";
import clsx from "clsx";

export function Accordion({ items = [], className = "" }) {
  return (
    <div className={clsx("w-full", className)}>
      {items.map((item, i) => (
        <AccordionItem key={i} {...item} />
      ))}
    </div>
  );
}

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  className = "",
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={clsx(
        "border border-gray-800 rounded-lg mb-3 bg-gray-900 shadow",
        className
      )}
    >
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-200 hover:bg-gray-800 transition"
      >
        <span className="font-medium">{title}</span>
        <span
          className={clsx(
            "transform transition-transform",
            open ? "rotate-90" : "rotate-0"
          )}
        >
          ▶
        </span>
      </button>

      {/* Content */}
      {open && (
        <div className="px-4 py-3 text-gray-300 border-t border-gray-800">
          {children}
        </div>
      )}
    </div>
  );
}
// END USER-PROVIDED CODE