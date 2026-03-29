// BEGIN USER-PROVIDED CODE
"use client";

import QuestGenerator from "../../../modules/quests/QuestGenerator";

export default function QuestsPage() {
  return (
    <div className="p-6 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4">Quest Builder</h1>
      <QuestGenerator />
    </div>
  );
}
// END USER-PROVIDED CODE