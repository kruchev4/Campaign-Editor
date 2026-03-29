// BEGIN USER-PROVIDED CODE
import React from "react";
import clsx from "clsx";

export function IconButton({
  icon,
  className = "",
  variant = "default",
  size = "md",
  onClick,
  ...props
}) {
  const variants = {
    default:
      "bg-gray-900 border border-gray-700 text-gray-300 hover:bg-gray-800",
    ghost:
      "bg-transparent text-gray-300 hover:bg-gray-800/50",
    danger:
      "bg-red-900/30 border border-red-700 text-red-300 hover:bg-red-800/40",
  };

  const sizes = {
    sm: "p-1 text-sm",
    md: "p-2 text-lg",
    lg: "p-3 text-xl",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(
        "rounded-md transition select-none flex items-center justify-center",
        variants[variant] || variants.default,
        sizes[size] || sizes.md,
        className
      )}
      {...props}
    >
      <span>{icon}</span>
    </button>
  );
}
// END USER-PROVIDED CODE