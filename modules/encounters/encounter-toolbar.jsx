"use client";

import useStore from "@/store/store";

export default function EncounterToolbar() {
  const create = useStore((s) => s.createEncounter);

  return (
    <div className="flex flex-col p-2 gap-2">
      <button
        onClick={create}
        className="p-2 rounded bg-neutral-900 hover:bg-neutral-800 text-xs"
      >
        Generate Encounter
      </button>
    </div>
  );
}