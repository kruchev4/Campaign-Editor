"use client";

import useStore from "@/store/store";
import { generateMapImage } from "./world-map-generator";

export default function WorldToolbar() {
  const setMapImage = useStore((s) => s.setMapImage);

  const handleGenerateMap = () => {
    const img = generateMapImage(1024, 1024);
    setMapImage(img);
  };

  return (
    <div className="flex flex-col p-2 gap-2">
      <button
        onClick={handleGenerateMap}
        className="p-2 rounded text-xs bg-neutral-900 hover:bg-neutral-800"
      >
        Generate Map
      </button>

      {/* existing buttons */}
    </div>
  );
}