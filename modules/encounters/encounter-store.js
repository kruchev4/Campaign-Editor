// modules/encounters/encounter-store.js

import { uid } from "../world/world-utils";
import {
  randomEnvironment,
  randomMonsterGroup,
  randomLoot,
  calculateEncounterCR,
} from "./encounter-utils";

export const createEncounterSlice = (set, get) => ({
  encounters: [],
  selectedEncounterId: null,

  createEncounter: () => {
    const monsters = randomMonsterGroup();
    const environment = randomEnvironment();
    const loot = randomLoot();

    const encounter = {
      id: uid(),
      title: `${environment} Encounter`,
      monsters,
      environment,
      loot,
      notes: "",
      cr: calculateEncounterCR(monsters),
    };

    set({
      encounters: [...get().encounters, encounter],
    });
  },

  updateEncounter: (id, data) =>
    set({
      encounters: get().encounters.map((e) =>
        e.id === id ? { ...e, ...data } : e
      ),
    }),

  deleteEncounter: (id) =>
    set({
      encounters: get().encounters.filter((e) => e.id !== id),
      selectedEncounterId: null,
    }),

  setSelectedEncounter: (id) => set({ selectedEncounterId: id }),
});