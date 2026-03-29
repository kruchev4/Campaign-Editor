// modules/npc/npc-utils.js
import {
  NAMES,
  RACES,
  ROLES,
  PERSONALITIES,
  QUIRKS,
  SECRETS,
} from "./npc-tables";

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const randomName = () => pick(NAMES);
export const randomRace = () => pick(RACES);
export const randomRole = () => pick(ROLES);
export const randomPersonality = () => pick(PERSONALITIES);
export const randomQuirk = () => pick(QUIRKS);
export const randomSecret = () => pick(SECRETS);