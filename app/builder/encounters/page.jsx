// BEGIN USER-PROVIDED CODE
"use client";

import EncounterGenerator from "../../../modules/encounters/EncounterGenerator";

export default function EncountersPage() {
  return (
    <div className="p-6 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4">Encounter Builder</h1>
      <EncounterGenerator />
    </div>
  );
}
// END USER-PROVIDED CODE