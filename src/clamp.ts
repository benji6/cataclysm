export const clamp = (min: number) => (max: number) => (val: number) => val < min ? min : val > max ? max : val
