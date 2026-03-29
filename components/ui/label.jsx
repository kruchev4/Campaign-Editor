// BEGIN USER-PROVIDED CODE
import React from "react";
import clsx from "clsx";

export function Label({
  className = "",
  htmlFor,
  children,
  ...props
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx(
        "block text-sm font-medium text-gray-300 mb-1 select-none",
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
}
// END USER-PROVIDED CODE