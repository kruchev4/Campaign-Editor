// modules/npc/npc-store.js

import { uid } from "../world/world-utils";
import {
  randomName,
  randomRace,
  randomRole,
  randomPersonality,
  randomQuirk,
  randomSecret,
} from "./npc-utils";

export const createNpcSlice = (set, get) => ({
  npcs: [],
  selectedNpcId: null,

  createNpc: () => {
    const npc = {
      id: uid(),
      name: randomName(),
      race: randomRace(),
      role: randomRole(),
      personality: randomPersonality(),
      quirk: randomQuirk(),
      secret: randomSecret(),
      notes: "",
    };
    set({ npcs: [...get().npcs, npc] });
  },

  updateNpc: (id, data) =>
    set({
      npcs: get().npcs.map((n) =>
        n.id === id ? { ...n, ...data } : n
      ),
    }),

  deleteNpc: (id) =>
    set({
      npcs: get().npcs.filter((n) => n.id !== id),
      selectedNpcId: null,
    }),

  setSelectedNpc: (id) => set({ selectedNpcId: id }),
});