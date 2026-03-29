"use client";

import useStore from "@/store/store";

export default function NpcEditor() {
  const npcs = useStore((s) => s.npcs);
  const selectedNpcId = useStore((s) => s.selectedNpcId);
  const updateNpc = useStore((s) => s.updateNpc);
  const deleteNpc = useStore((s) => s.deleteNpc);

  const npc = npcs.find((n) => n.id === selectedNpcId);

  if (!npc) {
    return (
      <div className="p-4 text-neutral-500 text-sm">
        Select an NPC to edit.
      </div>
    );
  }

  return (
    <div className="p-4 flex flex-col gap-3 text-sm">
      <h2 className="font-semibold text-lg">Edit NPC</h2>

      <label className="flex flex-col gap-1">
        <span>Name</span>
        <input
          className="bg-neutral-800 p-2 rounded"
          value={npc.name}
          onChange={(e) => updateNpc(npc.id, { name: e.target.value })}
        />
      </label>

      <label className="flex flex-col gap-1">
        <span>Race</span>
        <input
          className="bg-neutral-800 p-2 rounded"
          value={npc.race}
          onChange={(e) => updateNpc(npc.id, { race: e.target.value })}
        />
      </label>

      <label className="flex flex-col gap-1">
        <span>Role</span>
        <input
          className="bg-neutral-800 p-2 rounded"
          value={npc.role}
          onChange={(e) => updateNpc(npc.id, { role: e.target.value })}
        />
      </label>

      <label className="flex flex-col gap-1">
        <span>Personality</span>
        <input
          className="bg-neutral-800 p-2 rounded"
          value={npc.personality}
          onChange={(e) =>
            updateNpc(npc.id, { personality: e.target.value })
          }
        />
      </label>

      <label className="flex flex-col gap-1">
        <span>Quirk</span>
        <input
          className="bg-neutral-800 p-2 rounded"
          value={npc.quirk}
          onChange={(e) => updateNpc(npc.id, { quirk: e.target.value })}
        />
      </label>

      <label className="flex flex-col gap-1">
        <span>Secret</span>
        <input
          className="bg-neutral-800 p-2 rounded"
          value={npc.secret}
          onChange={(e) => updateNpc(npc.id, { secret: e.target.value })}
        />
      </label>

      <label className="flex flex-col gap-1">
        <span>Notes</span>
        <textarea
          className="bg-neutral-800 p-2 rounded"
          value={npc.notes}
          onChange={(e) => updateNpc(npc.id, { notes: e.target.value })}
        />
      </label>

      <button
        onClick={() => deleteNpc(npc.id)}
        className="p-2 bg-red-700 hover:bg-red-600 rounded"
      >
        Delete NPC
      </button>
    </div>
  );
}