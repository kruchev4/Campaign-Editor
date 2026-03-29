// /components/layout/MainLayout.jsx
"use client";

import Sidebar from "../sidebar/Sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 bg-gray-900 border-l border-gray-800 overflow-hidden">
        {children}
      </main>
    </div>
  );
}