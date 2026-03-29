// modules/story/story-store.js

import { uid } from "../world/world-utils";

export const createStorySlice = (set, get) => ({
  nodes: [],
  edges: [],
  selectedNodeId: null,

  addNode: (position) =>
    set({
      nodes: [
        ...get().nodes,
        {
          id: uid(),
          type: "storyNode",
          position,
          data: {
            title: "New Story Beat",
            description: "",
          },
        },
      ],
    }),

  updateNode: (id, data) =>
    set({
      nodes: get().nodes.map((n) =>
        n.id === id ? { ...n, data: { ...n.data, ...data } } : n
      ),
    }),

  deleteNode: (id) =>
    set({
      nodes: get().nodes.filter((n) => n.id !== id),
      edges: get().edges.filter(
        (e) => e.source !== id && e.target !== id
      ),
      selectedNodeId: null,
    }),

  setSelectedNode: (id) => set({ selectedNodeId: id }),

  setEdges: (edges) => set({ edges }),
  setNodes: (nodes) => set({ nodes }),

  addEdge: (edge) => set({ edges: [...get().edges, edge] }),
});