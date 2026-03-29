"use client";

import useStore from "@/store/store";

export default function ThemeList() {
  const themes = useStore((s) => s.themes);
  const activeThemeId = useStore((s) => s.active);  const activeThemeId = useStore((s) => s.activeThemeId);
  const updateTheme = useStore((s) => s.updateTheme);

  return (
    <div className="p-3 text-sm flex flex-col gap-2 overflow-y-auto h-full">
      <h2 className="font-semibold text-lg mb-2">Themes</h2>

      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setActiveTheme(t.id)}
          className={`p-2 rounded text-left ${
            activeThemeId === t.id
              ? "bg-neutral-700"
              : "bg-neutral-900 hover:bg-neutral-800"
          }`}
        >
          <div className="font-medium">{t.name}</div>
          <div className="text-xs text-neutral-400 capitalize">{t.tone}</div>
        </button>
      ))}
    </div>
  );
}
