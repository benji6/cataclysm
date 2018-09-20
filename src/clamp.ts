import curry3 from './internal/curry3'

const clamp = (min: number, max: number, val: number): number =>
  val < min ? min : val > max ? max : val

export default curry3(clamp)
