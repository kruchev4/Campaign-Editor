// BEGIN USER-PROVIDED CODE
import React from "react";
import clsx from "clsx";

export function Slider({
  className = "",
  min = 0,
  max = 100,
  value,
  step = 1,
  onChange,
  showValue = true,
  ...props
}) {
  return (
    <div className={clsx("w-full", className)}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={clsx(
          "w-full appearance-none bg-gray-700 h-2 rounded-lg cursor-pointer",
          "accent-indigo-500"
        )}
        {...props}
      />

      {showValue && (
        <div className="text-right text-sm text-gray-400 mt-1">
          {value}
        </div>
      )}
    </div>
  );
}
// END USER-PROVIDED CODE