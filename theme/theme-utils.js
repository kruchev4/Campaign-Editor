// modules/theme/theme-utils.js// modules/theme/theme-utils.js TONE_PRESETS = [
  "heroic",
  "dark",
  "gritty",
  "whimsical",
  "mysterious",
  "epic",
  "neutral",
];

export const applyToneToPalette = (palette, tone) => {
  switch (tone) {
    case "dark":
      return {
        ...palette,
        background: "#0b0b0d",
        surface: "#151518",
        text: "#e5e7eb",
      };
    case "heroic":
      return {
        ...palette,
        primary: "#eab308",
        accent: "#22c55e",
      };
    case "whimsical":
      return {
        ...palette,
        primary: "#a855f7",
        secondary: "#f472b6",
        accent: "#38bdf8",
      };
    case "gritty":
      return {
        ...palette,
        primary: "#6b7280",
        secondary: "#4b5563",
      };
    default:
      return palette;
  }
};

