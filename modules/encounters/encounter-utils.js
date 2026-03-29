// modules/encounters/encounter-utils.js

import { ENVIRONMENTS, MONSTER_DB, LOOT_TABLEarr) => arr[Math.floor(Math.random() * arr.length)];import { ENVIRONMENTS, MONSTER_DB, LOOT_TABLE } from "./encounter-tables";

// Generate 2–5 monsters of similar CR
export function randomMonsterGroup() {
  const base = pick(MONSTER_DB);
  const count = Math.floor(Math.random() * 4) + 2; // 2–5 monsters
  return Array.from({ length: count }, () => base);
}

// Simple CR summing model (expand later)
export function calculateEncounterCR(monsters) {
  const total = monsters.reduce((acc, m) => acc + m.cr, 0);
  return Math.round(total * 10) / 10;
}

export const randomEnvironment = () => pick(ENVIRONMENTS);
export const randomLoot = () => pick(LOOT_TABLE);
``

