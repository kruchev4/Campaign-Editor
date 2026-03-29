// BEGIN USER-PROVIDED CODE
import React from "react";
import clsx from "clsx";

export function Badge({
  className = "",
  variant = "default",
  children,
  ...props
}) {
  const variants = {
    default:
      "bg-indigo-700/40 text-indigo-300 border border-indigo-600/50",
    success:
      "bg-green-700/30 text-green-300 border border-green-600/50",
    danger:
      "bg-red-700/30 text-red-300 border border-red-600/50",
    warning:
      "bg-yellow-700/30 text-yellow-300 border border-yellow-600/50",
    neutral:
      "bg-gray-700/30 text-gray-300 border border-gray-600/50",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
        variants[variant] || variants.default,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
// END USER-PROVIDED CODE