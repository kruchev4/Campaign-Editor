// BEGIN USER-PROVIDED CODE
import React, { useEffect } from "react";
import clsx from "clsx";

let globalToastId = 0;
let listeners = [];

export function showToast({ message, type = "default", duration = 3000 }) {
  const id = ++globalToastId;
  listeners.forEach((l) => l({ id, message, type, duration }));
}

export function ToastContainer() {
  const [toasts, setToasts] = React.useState([]);

  useEffect(() => {
    const listener = (toast) => {
      setToasts((prev) => [...prev, toast]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
      }, toast.duration);
    };

    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {toasts.map((toast) => (
        <ToastMessage key={toast.id} {...toast} />
      ))}
    </div>
  );
}

function ToastMessage({ message, type }) {
  const variants = {
    default: "bg-gray-800 text-gray-200 border-gray-700",
    success: "bg-green-800 text-green-200 border-green-600",
    error: "bg-red-800 text-red-200 border-red-600",
    warning: "bg-yellow-700 text-yellow-200 border-yellow-500",
  };

  return (
    <div
      className={clsx(
        "px-4 py-3 rounded-md border shadow-lg text-sm flex items-center",
        "animate-fade-in-up",
        variants[type] || variants.default
      )}
    >
      {message}
    </div>
  );
}
// END USER-PROVIDED CODE