"use client";

import WorldMap from "./world-map";
import WorldToolbar from "./world-toolbar";
import WorldRegionEditor from "./world-region-editor";

export default function WorldPanel() {
  return (
    <div className="flex w-full h-full">
      {/* Left Tools */}
      <div className="w-16 border-r border-neutral-800 bg-neutral-900">
        <WorldToolbar />
      </div>

      {/* Map Canvas */}
      <div className="flex-1 bg-neutral-950">
        <WorldMap />
      </div>

      {/* Right Editor Panel */}
      <div className="w-80 border-l border-neutral-800 bg-neutral-900">
        <WorldRegionEditor />
      </div>
    </div>
  );
}