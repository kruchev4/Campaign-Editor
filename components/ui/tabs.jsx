// BEGIN USER-PROVIDED CODE
import React from "react";
import clsx from "clsx";

export function Tabs({ tabs = [], activeTab, onChange }) {
  return (
    <div className="flex space-x-2 border-b border-gray-700 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={clsx(
            "px-4 py-2 text-sm font-medium transition-colors",
            activeTab === tab.id
              ? "text-indigo-400 border-b-2 border-indigo-500"
              : "text-gray-400 hover:text-gray-200"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export function TabPanel({ whenActive, activeTab, children }) {
  if (activeTab !== whenActive) return null;
  return <div className="mt-2">{children}</div>;
}
// END USER-PROVIDED CODE