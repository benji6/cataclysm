export default (f: Function) => (xs: any[]): any[] => {
  const ys = []
  for (let i = 0; i < xs.length; i++) ys[i] = f(xs[i])
  return ys
}
