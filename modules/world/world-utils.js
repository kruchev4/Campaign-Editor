// modules/world/world-utils.js

export function uid() {
  return Math.random().toString(36).substring(2, 9);
}

export function pointInPolygon(point, polygon) {
  let { x, y } = point;
  let inside = false;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x;
    const yi = polygon[i].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;

    const intersect =
      yi > y !== yj > y &&
      x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;

    if (intersect) inside = !inside;
  }

  return inside;
}

export function dist(a, b) {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

export function nearestEdge(point, polygon) {
  let minDist = Infinity;
  let edgeIndex = -1;

  for (let i = 0; i < polygon.length; i++) {
    const p1 = polygon[i];
    const p2 = polygon[(i + 1) % polygon.length];

    const A = point.x - p1.x;
    const B = point.y - p1.y;
    const C = p2.x - p1.x;
    const D = p2.y - p1.y;

    const dot = A * C + B * D;
    const lenSq = C * C + D * D;
    const param = lenSq ? dot / lenSq : -1;

    let xx, yy;

    if (param < 0) {
      xx = p1.x;
      yy = p1.y;
    } else if (param > 1) {
      xx = p2.x;
      yy = p2.y;
    } else {
      xx = p1.x + param * C;
      yy = p1.y + param * D;
    }

    const d = dist(point, { x: xx, y: yy });
    if (d < minDist) {
      minDist = d;
      edgeIndex = i;
    }
  }

  return edgeIndex;
}

export function smoothPolygon(points, strength = 0.5) {
  return points.map((p, i, arr) => {
    const prev = arr[(i - 1 + arr.length) % arr.length];
    const next = arr[(i + 1) % arr.length];

    return {
      x: p.x + (prev.x + next.x - 2 * p.x) * strength,
      y: p.y + (prev.y + next.y - 2 * p.y) * strength,
    };
  });
}