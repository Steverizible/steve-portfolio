/** Shared scroll / reveal easing helpers */

export function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function phase(progress: number, start: number, end: number) {
  if (end <= start) return progress >= start ? 1 : 0;
  return clamp((progress - start) / (end - start), 0, 1);
}
