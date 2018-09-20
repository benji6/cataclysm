import curry2 from './internal/curry2'

const tap = <A>(f: (a: A) => any, x: A): A => (f(x), x)

export default curry2(tap)
