// /components/sidebar/Sidebar.jsx
"use client";

import { tabs } from "../../config/tabs";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div className="w-14 h-full bg-gray-950 border-r border-gray-800 flex flex-col py-4 gap-4">
      {tabs.map((tab) => (
        <SidebarItem key={tab.id} tab={tab} />
      ))}
    </div>
  );
}