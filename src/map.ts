import curry2 from './internal/curry2'
export default curry2((f: (x: any) => any, xs: any[]): any[] => {
  const ys = []
  for (let i = 0; i < xs.length; i++) ys[i] = f(xs[i])
  return ys
})
