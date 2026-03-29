// BEGIN USER-PROVIDED CODE
import React from "react";
import clsx from "clsx";

export function Input({
  className = "",
  type = "text",
  ...props
}) {
  const base =
    "w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-700 text-gray-200 " +
    "placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 " +
    "focus:border-transparent transition";

  return (
    <input
      type={type}
      className={clsx(base, className)}
      {...props}
    />
  );
}
// END USER-PROVIDED CODE