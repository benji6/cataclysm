export default (f: Function) => (...args: any[]): any => args.length === 1
  ? (x: any): any => f(args[0], x)
  : f(args[0], args[1])