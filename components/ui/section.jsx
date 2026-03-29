// BEGIN USER-PROVIDED CODE (Chunk 1)
import React from "react";
import clsx from "clsx";

export function Section({ className = "", children }) {
  return (
    <section
      className={clsx(
        "w-full mb-6 p-4 rounded-lg border border-gray-800 bg-gray-900 shadow",
        className
      )}
    >
      {children}
    </section>
  );
}
// END Chunk 1
// BEGIN USER-PROVIDED CODE (Chunk 2)
export function SectionTitle({ className = "", children }) {
  return (
    <h2
      className={
        "text-xl font-semibold text-gray-100 mb-3 " + className
      }
    >
      {children}
    </h2>
  );
}
// END Chunk 2
// BEGIN USER-PROVIDED CODE (Chunk 3)
export function Subsection({ className = "", title, children }) {
  return (
    <div className={"mb-4 " + className}>
      {title && (
        <h3 className="text-md font-medium text-gray-300 mb-2">
          {title}
        </h3>
      )}
      <div className="text-gray-300">{children}</div>
    </div>
  );
}
// END Chunk 3

