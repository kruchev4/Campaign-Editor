// modules/story/story-utils.js

export function.map((n, i) => ({export function autoLayoutHorizontal(nodes) {
    ...n,
    position: { x: i * 250, y: 0 },
  }));
}

export function autoLayoutVertical(nodes) {
  return nodes.map((n, i) => ({
    ...n,
    position: { x: 0, y: i * 150 },
  }));
}
