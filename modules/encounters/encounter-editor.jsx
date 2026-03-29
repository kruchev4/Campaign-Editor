"use client";

import useStore from "@/store/store";

export default function EncounterEditor() {
  const encounters = useStore((s) => s.encounters);
  const selectedId = useStore((s) => s.selectedEncounterId);
  const update =  const update = useStore((s) => s.updateEncounter);
          className="bg-neutral-800 p-2 rounded"
          value={encounter.title}
          onChange={(e) =>
            update(encounter.id, { title: e.target.value })
          }
        />
      </label>

      <label className="flex flex-col gap-1">
        <span>Environment</span>
        <input
          className="bg-neutral-800 p-2 rounded"
          value={encounter.environment}
          onChange={(e) =>
            update(encounter.id, { environment: e.target.value })
          }
        />
      </label>

      <div>
        <span className="font-semibold text-sm">Monsters</span>
        <ul className="mt-1 ml-3 list-disc text-neutral-300">
          {encounter.monsters.map((m, i) => (
            <li key={i}>
              {m.name} (CR {m.cr})
            </li>
          ))}
        </ul>
      </div>

      <label className="flex flex-col gap-1">
        <span>Loot</span>
        <input
          className="bg-neutral-800 p-2 rounded"
          value={encounter.loot}
          onChange={(e) => update(encounter.id, { loot: e.target.value })}
        />
      </label>

      <label className="flex flex-col gap-1">
        <span>Notes</span>
        <textarea
          className="bg-neutral-800 p-2 rounded"
          value={encounter.notes}
          onChange={(e) => update(encounter.id, { notes: e.target.value })}
        />
      </label>

      <button
        onClick={() => remove(encounter.id)}
        className="bg-red-700 hover:bg-red-600 p-2 rounded"
      >
        Delete Encounter
      </button>
    </div>
  );
}
  const remove = useStore((s) => s.deleteEncounter);

  const encounter = encounters.find((e) => e.id === selectedId);

  if (!encounter) {
    return (
      <div className="p-4 text-neutral-500 text-sm">
        Select an encounter to edit.
      </div>
    );
  }

  return (
    <div className="p-4 flex flex-col gap-3 text-sm">
      <h2 className="font-semibold text-lg">Edit Encounter</h2>

      <label className="flex flex-col gap-1">
        <span>Title</span>
