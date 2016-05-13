export default (f: Function) => (x: any) => (f(x), x)
