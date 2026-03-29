"use client";

import { useState } from "react";
import useStore from "@/store/store";
import { uid } from "./world-utils";

export default function WorldFactions() {
  const factions = useStore((s) => s.factions);
  const addFaction = useStore((s) => s.addFaction);
  const updateFaction = useStore((s) => s.updateFaction);
  const deleteFaction = useStore((s) => s.deleteFaction);

  const [newName, setNewName] = useState("");

  const handleAdd = () => {
    if (!newName.trim()) return;

    addFaction({
      id: uid(),
      name: newName,
      color: "#ff6464",
    });

    setNewName("");
  };

  return (
    <div className="p-4 flex flex-col gap-4 text-sm">
      <h2 className="text-lg font-semibold">Factions</h2>

      <div className="flex gap-2">
        <input
          className="bg-neutral-800 p-2 rounded"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="New faction"
        />
        <button onClick={handleAdd} className="bg-neutral-800 px-3 py-1 rounded">
          Add
        </button>
      </div>

      {factions.map((f) => (
        <div
          key={f.id}
          className="border border-neutral-800 p-2 rounded flex flex-col gap-2"
        >
          <input
            className="bg-neutral-800 p-1 rounded"
            value={f.name}
            onChange={(e) => updateFaction(f.id, { name: e.target.value })}
          />

          <input
            type="color"
            className="w-16 h-10"
            value={f.color}
            onChange={(e) => updateFaction(f.id, { color: e.target.value })}
          />

          <button
            className="bg-red-700 px-2 py-1 rounded"
            onClick={() => deleteFaction(f.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}