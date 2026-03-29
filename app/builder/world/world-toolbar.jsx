"use client";

import { useState } from "react";

const tools = [
  { id: "select", label: "Select" },
  { id: "marker", label: "Marker" },
  { id: "region", label: "Region" },
];

export default function WorldToolbar() {
  const [active, setActive] = useState("select");

  return (
    <div className="flex flex-col p-2 gap-2">
      {tools.map((t) => (
        <button
          key={t.id}
          onClick={() => setActive(t.id)}
          className={`p-2 rounded text-xs ${
            active === t.id
              ? "bg-neutral-700"
              : "bg-neutral-900 hover:bg-neutral-800"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}