// BEGIN USER-PROVIDED CODE
import React from "react";
import clsx from "clsx";

export function Button({
  children,
  variant = "default",
  className = "",
  ...props
}) {
  const base =
    "px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900";

  const variants = {
    default:
      "bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800",
    outline:
      "border border-gray-600 text-gray-200 hover:bg-gray-800 active:bg-gray-700",
    ghost:
      "text-gray-300 hover:bg-gray-800 active:bg-gray-700",
  };

  return (
    <button
      className={clsx(base, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
// END USER-PROVIDED CODE