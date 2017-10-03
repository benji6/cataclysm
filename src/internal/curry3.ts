export default (f: Function) => (...args: any[]): any => {
  switch (args.length) {
    case 1:
      return (...nextArgs: any[]): any => nextArgs.length === 1
        ? (x: any): any => f(args[0], nextArgs[0], x)
        : f(args[0], nextArgs[0], nextArgs[1])
    case 2:
      return (x: any): any => f(args[0], args[1], x)
    default:
      return f(args[0], args[1], args[2])
  }
}