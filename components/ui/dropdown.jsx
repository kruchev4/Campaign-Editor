// BEGIN USER-PROVIDED CODE
import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";

export function Dropdown({ label, items = [], onSelect }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className={clsx(
          "px-3 py-2 rounded-md bg-gray-900 border border-gray-700 text-gray-200",
          "hover:bg-gray-800 active:bg-gray-700 transition"
        )}
      >
        {label}
      </button>

      {open && (
        <div
          className={clsx(
            "absolute left-0 mt-2 w-40 rounded-md shadow-lg z-40",
            "bg-gray-900 border border-gray-700"
          )}
        >
          <ul className="py-1">
            {items.map((item) => (
              <li key={item.value}>
                <button
                  onClick={() => {
                    onSelect(item.value);
                    setOpen(false);
                  }}
                  className={clsx(
                    "w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-800 transition"
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
// END USER-PROVIDED CODE