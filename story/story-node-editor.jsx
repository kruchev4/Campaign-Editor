"use client";

import useStore from "@/store/store";

export default function StoryNodeEditor() {
  const nodes = useStore((s) => s.nodes);
  const selectedNodeId = useStore((s) => s.selectedNodeId);
  const updateNode = useStore((s) => s.updateNode);
  const deleteNode = useStore((s) => s.deleteNode);

  const node = nodes.find((n) => n.id === selectedNodeId);

  if (!node) {
    return (
      <div className="p-4 text-sm text-neutral-400">
        Select a node to edit.
      </div>
    );
  }

  return (
    <div className="p-4 flex flex-col gap-3 text-sm">
      <h2 className="font-semibold text-lg">Edit Node</h2>

      <label className="flex flex-col gap-1">
        <span>Title</span>
        <input
          className="bg-neutral-800 p-2 rounded"
          value={node.data.title}
          onChange={(e) =>
            updateNode(node.id, { title: e.target.value })
          }
        />
      </label>

      <label className="flex flex-col gap-1">
        <span>Description</span>
        <textarea
          className="bg-neutral-800 p-2 rounded"
          value={node.data.description}
          onChange={(e) =>
            updateNode(node.id, { description: e.target.value })
          }
        />
      </label>

      <button
        onClick={() => deleteNode(node.id)}
        className="bg-red-700 hover:bg-red-600 p-2 rounded"
      >
        Delete Node
      </button>
    </div>
  );
}
``