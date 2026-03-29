// /state/useAppStore.js
"use client";

import { create } from "zustand";

export const useAppStore = create((set) => ({
  currentTab: "theme",  // default entry tab
  setTab: (id) => set({ currentTab: id }),
}));