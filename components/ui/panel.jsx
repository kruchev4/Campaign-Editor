// BEGIN USER-PROVIDED CODE
import React from "react";
import clsx from "clsx";

export function Panel({ className = "", title, children }) {
  return (
    <div
      className={clsx(
        "rounded-lg border border-gray-800 bg-gray-900 shadow-md p-4",
        className
      )}
    >
      {title && (
        <h2 className="text-lg font-semibold text-gray-100 mb-3">
          {title}
        </h2>
      )}
      <div className="text-gray-300">{children}</div>
    </div>
  );
}

export function PanelSection({ className = "", title, children }) {
  return (
    <div className={clsx("mb-4", className)}>
      {title && (
        <h3 className="text-md font-medium text-gray-200 mb-2">
          {title}
        </h3>
      )}
      <div>{children}</div>
    </div>
  );
}
// END USER-PROVIDED CODE