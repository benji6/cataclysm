export default (f: Function) => (a: any) => (b: any) => f(b)(a)
