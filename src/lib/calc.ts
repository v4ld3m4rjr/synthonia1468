export const clamp01 = (x:number) => Math.max(0, Math.min(1, x))

export function to0100(x:number, p10:number, p90:number, invert=false){
  const t = clamp01((x - p10) / Math.max(1e-6, p90 - p10))
  const s = t*100
  return invert ? 100 - s : s
}
