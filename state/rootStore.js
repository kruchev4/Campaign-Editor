// /state/rootStore.js
"use client";

import { create } from "zustand";
import { worldSlice } from "./slices/worldSlice";
import { storySlice } from "./slices/storySlice";
import { npcSlice } from "./slices/npcSlice";
import { questSlice } from "./slices/questSlice";
import { encounterSlice } from "./slices/encounterSlice";
import { themeSlice } from "./slices/themeSlice";
import { exportSlice } from "./slices/exportSlice";

export const useRootStore = create((...args) => ({
  ...worldSlice(...args),
  ...storySlice(...args),
  ...npcSlice(...args),
  ...questSlice(...args),
  ...encounterSlice(...args),
  ...themeSlice(...args),
  ...exportSlice(...args),
}));