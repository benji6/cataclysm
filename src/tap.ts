export default (f: Function) => (x: any): Function => (f(x), x)
