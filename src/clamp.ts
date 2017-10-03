export default (min: number) => (max: number) => (val: number): number => val < min ? min : val > max ? max : val
