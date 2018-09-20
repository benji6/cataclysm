import curry2 from './internal/curry2'

const comp = <A>(f: (a: A) => any, g: (...a: any[]) => A) => (
  ...args: any[]
): any => f(g(...args))

export default curry2(comp)
