import curry2 from './internal/curry2'
export default curry2((f: (x: any) => any, x: any): Function => (f(x), x))
