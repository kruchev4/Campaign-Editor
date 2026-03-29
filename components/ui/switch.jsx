// BEGIN USER-PROVIDED CODE
import React from "react";
import clsx from "clsx";

export function Switch({
  checked = false,
  onChange,
  className = "",
  size = "md",
  ...props
}) {
  const sizes = {
    sm: { track: "w-8 h-4", thumb: "w-3 h-3" },
    md: { track: "w-10 h-5", thumb: "w-4 h-4" },
    lg: { track: "w-12 h-6", thumb: "w-5 h-5" },
  };

  const { track, thumb } = sizes[size] || sizes.md;

  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={clsx(
        "relative rounded-full transition-colors border border-gray-700",
        checked ? "bg-indigo-600" : "bg-gray-800",
        track,
        className
      )}
      {...props}
    >
      <span
        className={clsx(
          "absolute bg-white rounded-full shadow transform transition",
          thumb,
          checked ? "translate-x-full -translate-x-1" : "translate-x-1"
        )}
      />
    </button>
  );
}
// END USER-PROVIDED CODE