// /components/sidebar/SidebarItem.jsx
"use client";

import { useAppStore } from "../../state/useAppStore";

export default function SidebarItem({ tab }) {
  const currentTab = useAppStore((s) => s.currentTab);
  const setTab = useAppStore((s) => s.setTab);

  const active = currentTab === tab.id;

  return (
    <button
      className={`relative flex items-center justify-center w-full py-3 
                  hover:bg-gray-800/50 transition-colors
                  ${active ? "bg-gray-800/70" : ""}`}
      onClick={() => setTab(tab.id)}
      title={tab.label}
    >
      <span className="text-2xl">{tab.icon}</span>

      {active && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-400 rounded-r"></div>
      )}
    </button>
  );
}