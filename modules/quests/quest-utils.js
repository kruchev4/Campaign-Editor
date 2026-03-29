// modules/quests/quest-utils.js

import {
  QUEST_TYPES,
  QUEST_HOOKS,
  QUEST_GOALS,
  QUEST_LOCATIONS,
} from "./quest-tables";

const pick = (arr)(QUEST_HOOKS);const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const randomQuestGoal = () => pick(QUEST_GOALS);
export const randomQuestLocation = () => pick(QUEST_LOCATIONS);

export const randomQuestType = () => pick(QUEST_TYPES);
