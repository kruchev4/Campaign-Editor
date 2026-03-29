// BEGIN USER-PROVIDED CODE
import React from "react";
import clsx from "clsx";

export function Card({ className = "", children, ...props }) {
  const base =
    "rounded-lg border border-gray-800 bg-gray-900 shadow-md overflow-hidden";

  return (
    <div className={clsx(base, className)} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children }) {
  return (
    <div className={clsx("px-4 py-3 border-b border-gray-800", className)}>
      {children}
    </div>
  );
}

export function CardTitle({ className = "", children }) {
  return (
    <h2 className={clsx("text-xl font-semibold text-gray-100", className)}>
      {children}
    </h2>
  );
}

export function CardContent({ className = "", children }) {
  return (
    <div className={clsx("px-4 py-4 text-gray-300", className)}>
      {children}
    </div>
  );
}

export function CardFooter({ className = "", children }) {
  return (
    <div className={clsx("px-4 py-3 border-t border-gray-800", className)}>
      {children}
    </div>
  );
}
// END USER-PROVIDED CODE