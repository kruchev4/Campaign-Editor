// BEGIN USER-PROVIDED CODE
"use client";

import NPCGenerator from "../../../modules/npc/NPCGenerator";

export default function NPCPage() {
  return (
    <div className="p-6 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4">NPC Generator</h1>
      <NPCGenerator />
    </div>
  );
}
// END USER-PROVIDED CODE