export default (min: number) => (max: number) => (val: number) => val < min ? min : val > max ? max : val
