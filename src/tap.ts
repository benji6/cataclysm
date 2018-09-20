import curry2 from './internal/curry2'

const tap = (f: (x: any) => any, x: any): Function => (f(x), x) // tslint:disable-line ban-types

export default curry2(tap)
