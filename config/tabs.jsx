// /config/tabs.js

// --- Temporary placeholder components --- //
const Placeholder = ({ name }) => (
  <div className="text-3xl font-bold opacity-80">{name} Module</div>
);

// --- Tab definitions --- //
export const tabs = [
  { id: "world", icon: "🌍", label: "World", component: () => <Placeholder name="World" /> },
  { id: "story", icon: "🕸️", label: "Story", component: () => <Placeholder name="Story" /> },
  { id: "npc", icon: "👤", label: "NPCs", component: () => <Placeholder name="NPCs" /> },
  { id: "quests", icon: "📜", label: "Quests", component: () => <Placeholder name="Quests" /> },
  { id: "encounters", icon: "⚔️", label: "Encounters", component: () => <Placeholder name="Encounters" /> },
  { id: "theme", icon: "🎨", label: "Theme", component: () => <Placeholder name="Theme" /> },
  { id: "export", icon: "📤", label: "Export", component: () => <Placeholder name="Export" /> },
  { id: "import", icon: "📥", label: "Import", component: () => <Placeholder name="Import" /> },
];