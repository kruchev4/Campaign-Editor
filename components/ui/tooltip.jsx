// BEGIN USER-PROVIDED CODE
import React, { useState } from "react";
import clsx from "clsx";

export function Tooltip({ children, text, position = "right" }) {
  const [visible, setVisible] = useState(false);

  const base =
    "absolute z-50 px-2 py-1 text-xs rounded bg-gray-800 text-gray-200 shadow";

  const positions = {
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      {visible && (
        <div className={clsx(base, positions[position])}>
          {text}
        </div>
      )}
    </div>
  );
}
// END USER-PROVIDED CODE