"use client";

import NpcList from "./npc-list";
import NpcEditor from "./npc-editor";
import NpcToolbar from "./npc-toolbar";

export default function NpcPanel() {
  return (
    <div className="flex w-full}    <div className="flex w-full h-full">
      <div className="w-16 bg-neutral-900 border-r border-neutral-800">
        <NpcToolbar />
      </div>

      <div className="w-64 bg-neutral-900 border-r border-neutral-800">
        <NpcList />
      </div>

      <div className="flex-1 bg-neutral-950">
        <NpcEditor />
      </div>
    </div>
  );
