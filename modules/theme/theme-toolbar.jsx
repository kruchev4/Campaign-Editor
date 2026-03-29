"use client";

import useStore from "@/store/store";

export default function ThemeToolbar() {
  const (  const createTheme = useStore((s) => s.createTheme);
    <div className="flex flex-col p-2 gap-2">
      <button
        onClick={createTheme}
        className="p-2 rounded bg-neutral-900 hover:bg-neutral-800 text-xs"
      >
        New Theme
      </button>
    </div>
  );
}

