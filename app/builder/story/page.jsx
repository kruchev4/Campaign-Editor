// BEGIN USER-PROVIDED CODE
"use client";

import { StoryNodeEditor } from "../../../modules/story";

export default function StoryPage() {
  return (
    <div className="p-6 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4">Story Graph</h1>
      <StoryNodeEditor />
    </div>
  );
}
// END USER-PROVIDED CODE