"use client";

import { useState } from "react";
import useStore froms) => s.biomes);import useStore from "@/store/store";
  const addBiome = useStore((s) => s.addBiome);
  const updateBiome = useStore((s) => s.updateBiome);
  const deleteBiome = useStore((s) => s.deleteBiome);

  const [newName, setNewName] = useState("");

  const handleAdd = () => {
    if (!newName.trim()) return;

    addBiome({
      id: uid(),
      name: newName,
      color: "#88cc88",
    });

    setNewName("");
  };

  return (
    <div className="p-4 flex flex-col gap-4 text-sm">
      <h2 className="text-lg font-semibold">Biomes</h2>

      <div className="flex gap-2">
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="New biome"
          className="bg-neutral-800 p-2 rounded"
        />
        <button
          onClick={handleAdd}
          className="bg-neutral-800 px-3 py-1 rounded"
        >
          Add
        </button>
      </div>

      {biomes.map((b) => (
        <div
          key={b.id}
          className="border border-neutral-800 p-2 rounded flex flex-col gap-2"
        >
          <input
            className="bg-neutral-800 p-1 rounded"
            value={b.name}
            onChange={(e) => updateBiome(b.id, { name: e.target.value })}
          />

          <input
            type="color"
            className="w-16 h-10"
            value={b.color}
            onChange={(e) => updateBiome(b.id, { color: e.target.value })}
          />

          <button
            onClick={() => deleteBiome(b.id)}
            className="bg-red-700 px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
import { uid } from "./world-utils";

export default function WorldBiomes() {
