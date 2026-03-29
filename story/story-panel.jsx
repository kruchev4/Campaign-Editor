"use client";

import StoryGraph from "./story-graph";
import StoryToolbar from "./story-toolbar";
import StoryNodeEditor from "./story-node-editor";

export default function StoryPanel() {
  return (
    <div className="flex h-full w-neutral-800">    <div className="flex h-full w-full">
        <StoryToolbar />
      </div>

      <div className="flex-1">
        <StoryGraph />
      </div>

      <div className="w-80 bg-neutral-900 border-l border-neutral-800">
        <StoryNodeEditor />
      </div>
    </div>
  );
}
