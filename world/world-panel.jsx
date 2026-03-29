"use client";

import WorldMap from "./world-map";
import WorldToolbar from "./world-toolbar";
import WorldRegionEditor from "./world-region-editor";

export default function WorldPanel() {
  return (
    <div className="flex w-full h-full">
      <div className="w-16 border-r border-neutral-800 bg-neutral-900">
        <WorldToolbar />
      </div>

      <div className="flex-1 bg-neutral-950">
        <WorldMap />
      </div>

      <div className="w-80 border-l border-neutral-800 bg-neutral-900">
        <WorldRegionEditor />
      </div>
    </div>
  );
}