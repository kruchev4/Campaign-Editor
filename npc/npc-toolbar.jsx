"use client";

import useStore from "@/store/store";

export default function NpcList() {
  const npcs = useStore((s) => s.npcs);
  const selectedNpcId = useStore((s) => s.selectedNpcId);
  const setSelectedNpc = useStore((s) => s.setSelectedNpc);

  return (
    <div className="p-3 flex flex-col gap-2 text-sm overflow-y-auto h-full">
      <h2 className="font-semibold mb-2 text-lg">NPCs</h2>

      {npcs.length === 0 && (
        <p className="text-neutral-500 text-sm">No NPCs yet.</p>
      )}

      {npcs.map((npc) => (
        <button
          key={npc.id}
          onClick={() => setSelectedNpc(npc.id)}
          className={`p-2 rounded text-left ${
            selectedNpcId === npc.id
              ? "bg-neutral-700"
              : "bg-neutral-900 hover:bg-neutral-800"
          }`}
        >
          <div className="font-medium">{npc.name}</div>
          <div className="text-xs text-neutral-400">
            {npc.race} • {npc.role}
          </div>
        </button>
      ))}
    </div>
  );
}