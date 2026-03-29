"use client";

import { useRef, useEffect, useState } from "react";
import { Stage, Layer, Image as KonvaImage, Circle } from "react-konva";
import useStore from "@/store/store";

export default function WorldMap() {
  const fileInputRef = useRef(null);
  const mapImage = useStore((s) => s.mapImage);
  const setMapImage = useStore((s) => s.setMapImage);
  const markers = useStore((s) => s.markers);
  const addMarker = useStore((s) => s.addMarker);

  const [imgNode, setImgNode] = useState(null);

  useEffect(() => {
    if (!mapImage) return;
    const img = new window.Image();
    img.src = mapImage;
    img.onload = () => setImgNode(img);
  }, [mapImage]);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setMapImage(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="w-full h-full relative">
      {/** Hidden Upload Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleUpload}
      />

      {!mapImage && (
        <div className="h-full w-full flex items-center justify-center">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2 bg-neutral-800 rounded"
          >
            Upload Map Image
          </button>
        </div>
      )}

      {mapImage && (
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          onClick={(e) => {
            const pos = e.target.getStage().getPointerPosition();
            addMarker({ x: pos.x, y: pos.y });
          }}
        >
          <Layer>
            {imgNode && (
              <KonvaImage
                image={imgNode}
                width={window.innerWidth}
                height={window.innerHeight}
              />
            )}

            {markers.map((m, i) => (
              <Circle key={i} x={m.x} y={m.y} radius={8} fill="#f00" />
            ))}
          </Layer>
        </Stage>
      )}
    </div>
  );
}