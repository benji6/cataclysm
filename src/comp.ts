import curry2 from './internal/curry2'
export default curry2((f: Function, g: Function) => (...args: any[]): any => f(g(...args)))