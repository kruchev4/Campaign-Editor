"use client";

import QuestToolbar from "./quest-toolbar";
import QuestList from "./quest-list";
import QuestEditor from "./quest-editor";

export default function QuestPanel() {
  return (
    <div className="flex w-full h-full">
      <div className="w-16 border-r border-neutral-800 bg-neutral-900">
        <QuestToolbar />
      </div>

      <div className="w-64 border-r border-neutral-800 bg-neutral-900">
        <QuestList />
      </div>

      <div className="flex-1 bg-neutral-950">
        <QuestEditor />
      </div>
    </div>
  );
}