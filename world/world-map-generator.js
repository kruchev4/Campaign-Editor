// modules/world/world-map-generator.js

export function generateMapImage(width = 1024, height = 1024) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  // Simple pseudo-random function (not real Perlin, but fast & good enough)
  const noise = (x, y) => {
    const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
    return n - Math.floor(n);
  };

  // Render each pixel
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const nx = x / width - 0.5;
      const ny = y / height - 0.5;

      // Distance from center (for continent shape)
      const d = Math.sqrt(nx * nx + ny * ny);

      // Combine radial mask + noise
      const elevation = noise(x * 0.02, y * 0.02) - d * 0.7;

      let r, g, b;

      if (elevation < -0.05) {
        // Deep water
        r = 20; g = 40; b = 120;
      } else if (elevation < 0.0) {
        // Shallow water
        r = 40; g = 80; b = 160;
      } else if (elevation < 0.25) {
        // Grassland
        r = 50; g = 120; b = 70;
      } else if (elevation < 0.45) {
        // Hills
        r = 120; g = 110; b = 70;
      } else {
        // Mountains
        r = 200; g = 200; b = 200;
      }

      ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx.fillRect(x, y, 1, 1);
    }
  }

  return canvas.toDataURL("image/png");
}