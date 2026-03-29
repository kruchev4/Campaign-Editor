// modules/theme/theme-store.js

import { uid } from "../world/world-utils";

export const createThemeSlice = (set, get) => ({
  themes: [
    {
      id: "default-dark",
      name: "Default Dark",
      colors: {
        background: "#0d0d0f",
        surface: "#1a1a1d",
        primary: "#4f46e5",
        secondary: "#7c3aed",
        accent: "#10b981",
        text: "#e5e7eb",
      },
      tone: "neutral",
    },
  ],

  activeThemeId: "default-dark",

  setActiveTheme: (id) => {
    const theme = get().themes.find((t) => t.id === id);
    if (!theme) return;

    // Apply to global CSS variables
    const root = document.documentElement;
    const { colors } = theme;

    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--theme-${key}`, value);
    });

    set({ activeThemeId: id });
  },

  createTheme: () => {
    const newTheme = {
      id: uid(),
      name: "New Theme",
      colors: {
        background: "#0dTheme: (id, data) =>        background: "#0d0d0f",
    set({
      themes: get().themes.map((t) =>
        t.id === id ? { ...t, ...data } : t
      ),
    }),

  deleteTheme: (id) =>
    set({
      themes: get().themes.filter((t) => t.id !== id),
      activeThemeId:
        get().activeThemeId === id ? "default-dark" : get().activeThemeId,
    }),
});
        surface: "#1a1a1d",
        primary: "#4f46e5",
        secondary: "#7c3aed",
        accent: "#10b981",
        text: "#ffffff",
      },
      tone: "neutral",
    };

    set({ themes: [...get().themes, newTheme] });
  },

