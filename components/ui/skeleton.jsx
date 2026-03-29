// BEGIN USER-PROVIDED CODE
import React from "react";
import clsx from "clsx";

export function Skeleton({
  className = "",
  width = "100%",
  height = "1rem",
  rounded = "md",
}) {
  return (
    <div
      className={clsx(
        "animate-pulse bg-gray-700",
        {
          "rounded-sm": rounded === "sm",
          "rounded-md": rounded === "md",
          "rounded-lg": rounded === "lg",
          "rounded-full": rounded === "full",
        },
        className
      )}
      style={{
        width,
        height,
      }}
    />
  );
}

export function SkeletonText({
  lines = 3,
  lineHeight = "1rem",
  gap = "0.5rem",
}) {
  return (
    <div className="flex flex-col">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          height={lineHeight}
          className="w-full mb-2 last:mb-0"
        />
      ))}
    </div>
  );
}
// END USER-PROVIDED CODE