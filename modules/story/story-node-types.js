// modules/story/story-node-types.js

import React from "react";

export function StoryNode({ data }) {
  return (
    <div className="bg-neutral-900 border border-neutral-700 rounded p-3 min-w-[180px]">
      <h3 className="font-semibold text-sm">{data.title}</h3>
      {data.description && (
        <p className="text-xs text-neutral-400 mt-1">{data.description}</p>
      )}
    </div>
  );
}

export const storyNodeTypes = {
  storyNode: StoryNode,
};