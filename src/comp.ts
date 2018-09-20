import curry2 from './internal/curry2'

const comp = <A, B>(f: (a: A) => B, g: (...a: any[]) => A) => (
  ...args: any[]
): B => f(g(...args))

export default curry2(comp)
