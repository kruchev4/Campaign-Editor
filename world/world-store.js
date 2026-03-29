// modules/world/world-store.js

import { uid } from "./world-utils";

export const createWorldSlice = (set, get) => ({
  mapImage: null,
  regions: [],
  markers: [],

  // Active tool for toolbar
  activeWorldTool: "select",
  setActiveWorldTool: (tool) => set({ activeWorldTool: tool }),

  // 🌿 Biomes
  biomes: [
    { id: "forest", name: "Forest", color: "#228B22" },
    { id: "desert", name: "Desert", color: "#EDC9AF" },
    { id: "tundra", name: "Tundra", color: "#E0E8F0" },
    { id: "swamp", name: "Swamp", color: "#556B2F" },
    { id: "mountain", name: "Mountain", color: "#A9A9A9" },
  ],

  addBiome: (b) => set({ biomes: [...get().biomes, b] }),
  updateBiome: (id, data) =>
    set({
      biomes: get().biomes.map((b) => (b.id === id ? { ...b, ...data } : b)),
    }),
  deleteBiome: (id) =>
    set({
      biomes: get().biomes.filter((b) => b.id !== id),
      regions: get().regions.map((r) =>
        r.biome === id ? { ...r, biome: null } : r
      ),
    }),

  // 🛡️ Factions
  factions: [
    { id: "empire", name: "The Empire", color: "#d9534f" },
    { id: "tribe", name: "Northern Tribe", color: "#5bc0de" },
    { id: "guild", name: "Merchant Guild", color: "#f0ad4e" },
  ],

  addFaction: (f) => set({ factions: [...get().factions, f] }),
  updateFaction: (id, data) =>
    set({
      factions: get().factions.map((f) => (f.id === id ? { ...f, ...data } : f)),
    }),
  deleteFaction: (id) =>
    set({
      factions: get().factions.filter((f) => f.id !== id),
      regions: get().regions.map((r) =>
        r.faction === id ? { ...r, faction: null } : r
      ),
    }),

  assignBiomeToRegion: (regionId, biomeId) =>
    set({
      regions: get().regions.map((r) =>
        r.id === regionId ? { ...r, biome: biomeId } : r
      ),
    }),

  assignFactionToRegion: (regionId, factionId) =>
    set({
      regions: get().regions.map((r) =>
        r.id === regionId ? { ...r, faction: factionId } : r
      ),
    }),

  setMapImage: (img) => set({ mapImage: img }),

  addMarker: (marker) =>
    set({ markers: [...get().markers, marker] }),

  addRegion: (region) =>
    set({ regions: [...get().regions, region] }),

  updateRegion: (id, data) =>
    set({
      regions: get().regions.map((r) =>
        r.id === id ? { ...r, ...data } : r
      ),
    }),
});