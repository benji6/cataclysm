import curry2 from './internal/curry2'
export default curry2(
  <A>(f: (a: A) => any, g: (...a: any[]) => A) => (...args: any[]): any => f(g(...args)),
)
