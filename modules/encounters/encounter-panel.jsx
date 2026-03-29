"use client";

import EncounterToolbar from "./encounter-toolbar";
import EncounterList from "./encounter-list";
import EncounterEditor from "./encounter-editor";

export default function EncounterPanel() {
  return (
    <div className="flex w-full h-full">
      <div className="w-16 border-r border-neutral-800 bg-neutral-900">
        <EncounterToolbar />
      </div>

      <div className="w-64 border-r border-neutral-800 bg-neutral-900">
        <EncounterList />
      </div>

      <div className="flex-1 bg-neutral-950">
        <EncounterEditor />
      </div>
    </div>
  );
}