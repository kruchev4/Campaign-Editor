// BEGIN USER-PROVIDED CODE
import React from "react";
import clsx from "clsx";
import { Label } from "./label";
import { Input } from "./input";

export function InputGroup({
  label,
  htmlFor,
  description,
  className = "",
  children,
}) {
  return (
    <div className={clsx("w-full mb-4", className)}>
      {label && <Label htmlFor={htmlFor}>{label}</Label>}

      <div className="flex items-center gap-2">
        {children}
      </div>

      {description && (
        <p className="text-xs text-gray-500 mt-1">{description}</p>
      )}
    </div>
  );
}

export function InputGroupField({
  htmlFor,
  type = "text",
  value,
  onChange,
  placeholder = "",
  className = "",
}) {
  return (
    <Input
      id={htmlFor}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
}

export function InputGroupIcon({ icon }) {
  return (
    <span className="text-gray-400 text-lg flex items-center justify-center px-2">
      {icon}
    </span>
  );
}
// END USER-PROVIDED CODE