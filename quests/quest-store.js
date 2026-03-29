// modules/quests/quest-store.js

import { uid } from "../world/world-utils";
import {
  randomQuestType,
  randomQuestHook,
  randomQuestGoal,
  randomQuestLocation,
} from "./quest-utils";

export const createQuestSlice = (set, get) => ({
  quests: [],
  selectedQuestId: null,

  createQuest: () => {
    const quest = {
      id: uid(),
      title: randomQuestHook(),
      type: randomQuestType(),
      goal: randomQuestGoal(),
      location: randomQuestLocation(),
      npc: null,          // future linking to NPCs
      region: null,       // future linking to world regions
      description: "",
      notes: "",
    };

    set({ quests: [...get().quests, quest] });
  },

  updateQuest: (id, data) =>
    set({
      quests: get().quests.map((q) =>
        q.id === id ? { ...q, ...data } : q
      ),
    }),

  deleteQuest: (id) =>
    set({
      quests: get().quests.filter((q) => q.id !== id),
      selectedQuestId: null,
    }),

  setSelectedQuest: (id) => set({ selectedQuestId: id }),
});