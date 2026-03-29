// BEGIN USER-PROVIDED CODE
import React from "react";
import clsx from "clsx";

export function Select({
  className = "",
  options = [],
  value,
  onChange,
  placeholder = "Select an option...",
  ...props
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={clsx(
        "w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-700",
        "text-gray-200 placeholder-gray-500",
        "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent",
        "transition cursor-pointer",
        className
      )}
      {...props}
    >
      {placeholder && (
        <option value="" disabled className="text-gray-500">
          {placeholder}
        </option>
      )}

      {options.map((opt) => (
        <option
          key={opt.value}
          value={opt.value}
          className="bg-gray-900 text-gray-200"
        >
          {opt.label}
        </option>
      ))}
    </select>
  );
}
// END USER-PROVIDED CODE