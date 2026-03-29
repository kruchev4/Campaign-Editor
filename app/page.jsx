// /app/page.jsx
"use client";

import { useAppStore } from "../state/useAppStore";
import { tabs } from "../config/tabs";

export default function HomePage() {
  const currentTab = useAppStore((s) => s.currentTab);

  const ActiveModule = tabs.find((t) => t.id === currentTab)?.component;

  return (
    <div className="p-6 overflow-y-auto w-full h-full">
      {ActiveModule ? (
        <ActiveModule />
      ) : (
        <div className="text-xl opacity-70">Select a module from the sidebar.</div>
      )}
    </div>
  );
}