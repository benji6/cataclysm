import curry2 from './internal/curry2'
export default curry2((f: Function, x: any): Function => (f(x), x))
