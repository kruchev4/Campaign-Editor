// BEGIN USER-PROVIDED CODE
"use client";

import ExportEngine from "../../../modules/export/ExportEngine";

export default function ExportPage() {
  return (
    <div className="p-6 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4">Export Campaign</h1>
      <ExportEngine />
    </div>
  );
}
// END USER-PROVIDED CODE