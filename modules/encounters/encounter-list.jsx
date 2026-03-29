"use client";

import useStore from "@/store/store";

export default function EncounterList() {
  const encounters = useStore((s) => s.encounters);
  const selectedId = useStore((s) => s.selectedEncounterId);
  const setounters</h2>  const setSelected = useStore((s) => s.setSelectedEncounter);

      {encounters.length === 0 && (
        <p className="text-neutral-500 text-sm">No encounters yet.</p>
      )}

      {encounters.map((e) => (
        <button
          key={e.id}
          onClick={() => setSelected(e.id)}
          className={`p-2 rounded text-left ${
            selectedId === e.id
              ? "bg-neutral-700"
              : "bg-neutral-900 hover:bg-neutral-800"
          }`}
        >
          <div className="font-medium">{e.title}</div>
          <div className="text-xs text-neutral-400">
            CR {e.cr} • {e.environment}
          </div>
        </button>
      ))}
    </div>
  );
}

  return (
    <div className="p-3 flex flex-col gap-2 text-sm overflow-y-auto h-full">
