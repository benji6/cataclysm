import curry2 from './internal/curry2'

const map = <A, B>(f: (x: A) => B, xs: A[]): B[] => {
  const ys = []
  for (let i = 0; i < xs.length; i++) ys[i] = f(xs[i])
  return ys
}

export default curry2(map)
