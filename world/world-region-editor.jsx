"use client";

import useStore from "@/store/store";
import { smoothPolygon } from "./world-utils";

export default function WorldRegionEditor() {
  const regions = useStore((s) => s.regions);
  const updateRegion = useStore((s) => s.updateRegion);

  const biomes = useStore((s) => s.biomes);
  const assignBiome = useStore((s) => s.assignBiomeToRegion);

  const factions = useStore((s) => s.factions);
  const assignFaction = useStore((s) => s.assignFactionToRegion);

  const setTool = useStore((s) => s.setActiveWorldTool);

  const selectedRegionId = useStore((s) => s.selectedRegionId);
  const setSelectedRegionId = useStore((s) => s.setSelectedRegionId);

  const region = regions.find((r) => r.id === selectedRegionId);

  if (!region) {
    return (
      <div className="p-4 text-sm">
        <h2 className="font-semibold mb-2">Region Editor</h2>
        <p className="text-neutral-400">No region selected.</p>
      </div>
    );
  }

  return (
    <div className="p-4 flex flex-col gap-3 text-sm">
      <h2 className="font-semibold mb-2">Edit Region</h2>

      <label className="flex flex-col gap-1">
        <span>Name</span>
        <input
          value={region.name}
          onChange={(e) =>
            updateRegion(region.id, { name: e.target.value })
          }
          className="bg-neutral-800 p-2 rounded"
        />
      </label>

      <label className="flex flex-col gap-1">
        <span>Color</span>
        <input
          type="color"
          value={region.color}
          onChange={(e) =>
            updateRegion(region.id, { color: e.target.value })
          }
          className="bg-neutral-800 w-16 h-10 rounded"
        />
      </label>

      {/* Biomes */}
      <label className="flex flex-col gap-1">
        <span>Biome</span>
        <select
          value={region.biome || ""}
          onChange={(e) =>
            assignBiome(region.id, e.target.value || null)
          }
          className="bg-neutral-800 p-2 rounded"
        >
          <option value="">None</option>
          {biomes.map((b) => (
            <option key={b.id} value={b.id}>
              {b.name}
            </option>
          ))}
        </select>
      </label>

      {/* Factions */}
      <label className="flex flex-col gap-1">
        <span>Faction</span>
        <select
          value={region.faction || ""}
          onChange={(e) =>
            assignFaction(region.id, e.target.value || null)
          }
          className="bg-neutral-800 p-2 rounded"
        >
          <option value="">None</option>
          {factions.map((f) => (
            <option key={f.id} value={f.id}>
              {f.name}
            </option>
          ))}
        </select>
      </label>

      {/* Tools */}
      <button
        className="px-3 py-2 bg-neutral-800 rounded hover:bg-neutral-700"
        onClick={() => {
          const smoothed = smoothPolygon(region.points);
          updateRegion(region.id, { points: smoothed });
        }}
      >
        Smooth Region
      </button>

      <button
        className="px-3 py-2 bg-neutral-800 rounded hover:bg-neutral-700"
        onClick={() => setTool("insert")}
      >
        Insert Vertex Mode
      </button>

      <button
        className="px-3 py-2 bg-neutral-800 rounded hover:bg-neutral-700"
        onClick={() => setTool("delete-vertex")}
      >
        Delete Vertex Mode
      </button>
    </div>
  );
}