"use client";

import useStore from "@/store/store";

export default function StoryToolbar() {
  const addNode = useStore((s) => s.addNode);
  const nodes = useStore((s) => s.nodes);
  const setNodes = useStore((s) => s.setNodes);

  return (
    <div className="flex flex-col gap-2 p-2">
      <button
        onClick={() => addNode({ x: 0, y: 0 })}
        className="bg-neutral-900 hover:bg-neutral-800 text-xs rounded p-2"
      >
        Add Node
      </button>

      <button
        onClick={() =>
          setNodes(nodes.map((n, i) => ({
            ...n,
            position: { x: i * 250, y: 0 },
          })))
        }
        className="bg-neutral-900 hover:bg-neutral-800 text-xs rounded p-2"
      >
        Auto Layout
      </button>
    </div>
  );
}