"use client";

import React, { useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  addEdge,
} from "reactflow";

import "reactflow/dist/style.css";

import useStore from "@/store/store";
import { storyNodeTypes } from "./story-node-types";

export default function StoryGraph() {
  const nodes = useStore((s) => s.nodes);
  const edges = useStore((s) => s.edges);
  const setNodes = useStore((s) => s.setNodes);
  const setEdges = useStore((s) => s.setEdges);
  const setSelectedNode = useStore((s) => s.setSelectedNode);

  const onNodesChange = useCallback(
    (changes) =>
      setNodes(
        nodes.map((n) => ({ ...n, ...changes.find((c) => c.id === n.id) }))
      ),
    [nodes, setNodes]
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges(changes),
    [setEdges]
  );

  const onConnect = useCallback(
    (params) => setEdges([...edges, params]),
    [edges, setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={storyNodeTypes}
      onConnect={onConnect}
      onEdgesChange={onEdgesChange}
      onNodesChange={onNodesChange}
      onNodeClick={(_, node) => setSelectedNode(node.id)}
      fitView
    >
      <Background />
      <Controls />
    </ReactFlow>
  );
}