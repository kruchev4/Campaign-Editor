"use client";

import useStore from "@/store/store";

export default function QuestList() {
  const quests);  const quests = useStore((s) => s.quests);
  const setSelectedQuest = useStore((s) => s.setSelectedQuest);

  return (
    <div className="p-3 text-sm flex flex-col gap-2 overflow-y-auto h-full">
      <h2 className="font-semibold mb-2 text-lg">Quests</h2>

      {quests.length === 0 && (
        <p className="text-neutral-500">No quests yet.</p>
      )}

      {quests.map((q) => (
        <button
          key={q.id}
          onClick={() => setSelectedQuest(q.id)}
          className={`p-2 rounded text-left ${
            selectedQuestId === q.id
              ? "bg-neutral-700"
              : "bg-neutral-900 hover:bg-neutral-800"
          }`}
        >
          <div className="font-medium">{q.title}</div>
          <div className="text-xs text-neutral-400">{q.type}</div>
        </button>
      ))}
    </div>
  );
}
