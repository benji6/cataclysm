export default (f: Function) => (a: any, b: any): Function => f(b, a)
