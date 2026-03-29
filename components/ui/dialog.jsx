// BEGIN USER-PROVIDED CODE
import React, { useEffect } from "react";
import clsx from "clsx";

export function Dialog({ open, onClose, title, children }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", handleKey);
    }
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Dialog panel */}
      <div
        className={clsx(
          "relative w-full max-w-lg rounded-lg border border-gray-700",
          "bg-gray-900 shadow-lg p-6 z-10"
        )}
      >
        {title && (
          <h2 className="text-xl font-semibold text-gray-100 mb-4">
            {title}
          </h2>
        )}

        <div className="text-gray-300">{children}</div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-800 border border-gray-700 text-gray-200 hover:bg-gray-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
// END USER-PROVIDED CODE