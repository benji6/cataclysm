export default (f: (a: any, b: any) => any) => (...args: any[]): any =>
  args.length === 1 ? (x: any): any => f(args[0], x) : f(args[0], args[1])
