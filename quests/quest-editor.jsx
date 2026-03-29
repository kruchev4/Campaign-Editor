"use client";

import useStore from "@/store/store";

export default function QuestToolbar() {
  const createQuest = useStore((s) => s.createQuest);

  return (
    <div className="flex flex-col p-2 gap-2">
      <button
        onClick={createQuest}
        className="bg-neutral-900 hover:bg-neutral-800 rounded p-2 text-xs"
      >
        Generate Quest
      </button>
    </div>
  );
}