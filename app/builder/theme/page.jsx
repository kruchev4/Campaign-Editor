// BEGIN USER-PROVIDED CODE
"use client";

import ThemeEngine from "../../../modules/theme/ThemeEngine";

export default function ThemePage() {
  return (
    <div className="p-6 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4">Theme Engine</h1>
      <ThemeEngine />
    </div>
  );
}
// END USER-PROVIDED CODE