"use client";

import { useRef, useEffect, useState } from "react";
import { Stage, Layer, Image as KonvaImage, Line, Circle } from "react-konva";
import useStore from "@/store/store";
import {
  uid,
  pointInPolygon,
  nearestEdge,
  smoothPolygon,
} from "./world-utils";

export default function WorldMap() {
  const stageRef = useRef(null);
  const fileInputRef = useRef(null);

  // Zustand
  const mapImage = useStore((s) => s.mapImage);
  const setMapImage = useStore((s) => s.setMapImage);

  const markers = useStore((s) => s.markers);
  const addMarker = useStore((s) => s.addMarker);

  const regions = useStore((s) => s.regions);
  const addRegion = useStore((s) => s.addRegion);
  const updateRegion = useStore((s) => s.updateRegion);

  const biomes = useStore((s) => s.biomes);
  const factions = useStore((s) => s.factions);

  const activeTool = useStore((s) => s.activeWorldTool);

  // Selected region (local UI state)
  const [selectedRegionId, setSelectedRegionId] = useState(null);

  // Drawing state
  const [isDrawing, setIsDrawing] = useState(false);
  const [draftPoints, setDraftPoints] = useState([]);

  // Image node
  const [imgNode, setImgNode] = useState(null);

  // Load map image
  useEffect(() => {
    if (!mapImage) return;
    const img = new window.Image();
    img.src = mapImage;
    img.onload = () => setImgNode(img);
  }, [mapImage]);

  // Upload handler
  const handleUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setMapImage(reader.result);
    reader.readAsDataURL(file);
  };

  // ---------------------------------------------------------
  // Main Click Handler (ALL tools)
  // ---------------------------------------------------------
  const handleStageClick = (e) => {
    const pos = e.target.getStage().getPointerPosition();

    // INSERT VERTEX MODE
    if (activeTool === "insert" && selectedRegionId) {
      const region = regions.find((r) => r.id === selectedRegionId);
      if (!region) return;

      const edgeIndex = nearestEdge(pos, region.points);
      if (edgeIndex === -1) return;

      const newPoints = [...region.points];
      newPoints.splice(edgeIndex + 1, 0, pos);
      updateRegion(selectedRegionId, { points: newPoints });
      return;
    }

    // REGION DRAWING MODE
    if (activeTool === "region") {
      setIsDrawing(true);
      setDraftPoints((prev) => [...prev, pos]);
      return;
    }

    // SELECT REGION
    if (activeTool === "select") {
      const clicked = regions.find((r) => pointInPolygon(pos, r.points));
      setSelectedRegionId(clicked ? clicked.id : null);
      return;
    }

    // MARKER MODE
    if (activeTool === "marker") {
      addMarker({ x: pos.x, y: pos.y });
      return;
    }
  };

  // ---------------------------------------------------------
  // Double Click: Finish Region
  // ---------------------------------------------------------
  const handleDoubleClick = () => {
    if (!isDrawing || draftPoints.length < 3) return;

    addRegion({
      id: uid(),
      name: "New Region",
      color: "#1e90ff",
      biome: null,
      faction: null,
      points: draftPoints,
    });

    setDraftPoints([]);
    setIsDrawing(false);
  };

  // ---------------------------------------------------------
  // Smooth Region Tool
  // ---------------------------------------------------------
  const applySmoothToSelected = () => {
    if (!selectedRegionId) return;
    const region = regions.find((r) => r.id === selectedRegionId);
    const smoothed = smoothPolygon(region.points);
    updateRegion(selectedRegionId, { points: smoothed });
  };

  useEffect(() => {
    if (activeTool === "smooth") {
      applySmoothToSelected();
    }
  }, [activeTool]);

  return (
    <div className="w-full h-full relative">
      {/* Upload map button */}
      {!mapImage && (
        <div className="h-full w-full flex items-center justify-center">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2 bg-neutral-800 rounded"
          >
            Upload Map Image
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleUpload}
          />
        </div>
      )}

      {mapImage && (
        <>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleUpload}
          />

          <Stage
            ref={stageRef}
            width={window.innerWidth}
            height={window.innerHeight}
            onClick={handleStageClick}
            onDblClick={handleDoubleClick}
          >
            <Layer>
              {/* Background Image */}
              {imgNode && (
                <KonvaImage
                  image={imgNode}
                  width={window.innerWidth}
                  height={window.innerHeight}
                />
              )}

              {/* REGIONS */}
              {regions.map((region) => {
                const biome = biomes.find((b) => b.id === region.biome);
                const faction = factions.find(
                  (f) => f.id === region.faction
                );

                // Faction > Biome > Manual color
                const fillColor = faction
                  ? `${faction.color}40`
                  : biome
                  ? `${biome.color}40`
                  : `${region.color}40`;

                const strokeColor = faction
                  ? faction.color
                  : biome
                  ? biome.color
                  : region.color;

                return (
                  <Line
                    key={region.id}
                    points={region.points.flatMap((p) => [p.x, p.y])}
                    closed
                    stroke={strokeColor}
                    strokeWidth={2}
                    fill={fillColor}
                  />
                );
              })}

              {/* DRAFT REGION (while drawing) */}
              {draftPoints.length > 0 && (
                <Line
                  points={draftPoints.flatMap((p) => [p.x, p.y])}
                  stroke="#fff"
                  strokeWidth={2}
                />
              )}

              {/* SELECTED REGION VERTICES */}
              {selectedRegionId &&
                regions
                  .find((r) => r.id === selectedRegionId)
                  ?.points.map((p, i) => (
                    <Circle
                      key={i}
                      x={p.x}
                      y={p.y}
                      radius={6}
                      fill="#ff0"
                      draggable={activeTool === "select"}
                      onDragMove={(e) => {
                        if (activeTool !== "select") return;

                        const region = regions.find(
                          (r) => r.id === selectedRegionId
                        );
                        const newPoints = [...region.points];
                        newPoints[i] = {
                          x: e.target.x(),
                          y: e.target.y(),
                        };
                        updateRegion(selectedRegionId, { points: newPoints });
                      }}
                      onContextMenu={(e) => {
                        e.evt.preventDefault();

                        if (activeTool !== "delete-vertex") return;

                        const region = regions.find(
                          (r) => r.id === selectedRegionId
                        );

                        if (region.points.length <= 3) return; // cannot delete below triangle

                        const newPoints = region.points.filter(
                          (_, idx) => idx !== i
                        );

                        updateRegion(selectedRegionId, { points: newPoints });
                      }}
                    />
                  ))}

              {/* MARKERS */}
              {markers.map((m, i) => (
                <Circle key={i} x={m.x} y={m.y} radius={6} fill="#ff4444" />
              ))}
            </Layer>
          </Stage>
        </>
      )}
    </div>
  );
}
``