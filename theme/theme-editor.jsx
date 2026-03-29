"use client";

import useStore from "@/store/store";
import { TONE_PRESETS, applyToneToPalette } from "./theme-utils";

export default function ThemeEditor() {
  const themes = useStore((s) => s.themes);
  const activeThemeId = useStore((s) => s.activeThemeId);
  const updateTheme = useStore((s) => s.updateTheme);

  const theme = themes.find((t) => t.id === activeThemeId);

  if (!theme) {
    return (
      <div className="p-4 text-neutral-500 text-sm">
        No theme selected.
      </div>
    );
  }

  const updateColor = (key, value) => {
    updateTheme(theme.id, {
      colors: { ...theme.colors, [key]: value },
    });
  };

  const updateTone = (tone) => {
    updateTheme(theme.id, {
      tone,
      colors: applyToneToPalette(theme.colors, tone),
    });
  };

  return (
    <div className="p-4 text-sm flex flex-col gap-3">
      <h2 className="font-semibold text-lg">Edit Theme</h2>

      <label className="flex flex-col gap-1">
        <span>Name</span>
        <input
          className="bg-neutral-800 p-2 rounded"
          value={theme.name}
          onChange={(e) =>
            updateTheme(theme.id, { name: e.target.value })
          }
        />
      </label>

      <label className="flex flex-col gap-1">
        <span>Tone</span>
        <select
          className="bg-neutral-800 p-2 rounded"
          value={theme.tone}
          onChange={(e) => updateTone(e.target.value)}
        >
          {TONE_PRESETS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>

      <h3 className="font-medium mt-3">Colors</h3>

      {Object.entries(theme.colors).map(([key, value]) => (
        <label key={key} className="flex flex-col gap-1">
          <span className="capitalize">{key}</span>
          <input
            type="color"
            className="bg-neutral-800 w-16 h-10 rounded"
            value={value}
            onChange={(e) => updateColor(key, e.target.value)}
          />
        </label>
      ))}

      <p className="text-xs text-neutral-500 mt-2">
        Theme colors apply globally using CSS variables.
      </p>
    </div>
  );
}