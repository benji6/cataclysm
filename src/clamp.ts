import curry3 from './internal/curry3'
export default curry3((min: number, max: number, val: number): number => val < min
  ? min
  : val > max
    ? max
    : val)
