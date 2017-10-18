import curry2 from './internal/curry2'
export default curry2(
  <A, B>(f: (x: A) => B, xs: A[]): B[] => {
    const ys = []
    for (let i = 0; i < xs.length; i++) ys[i] = f(xs[i])
    return ys
  },
)
