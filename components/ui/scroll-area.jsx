// BEGIN USER-PROVIDED CODE
import React from "react";
import clsx from "clsx";

export function ScrollArea({
  className = "",
  children,
  maxHeight = "400px",
}) {
  return (
    <div
      style={{ maxHeight }}
      className={clsx(
        "overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900",
        className
      )}
    >
      {children}
    </div>
  );
}
// END USER-PROVIDED CODE