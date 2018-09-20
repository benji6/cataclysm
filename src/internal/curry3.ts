// tslint:disable ban-types

export default <A, B, C, D>(f: Function) => (...args: Array<A | B | C>) => {
  switch (args.length) {
    case 1:
      return (...nextArgs: Array<B | C>) =>
        nextArgs.length === 1
          ? (x: C): D => f(args[0] as A, nextArgs[0] as B, x as C)
          : f(args[0] as A, nextArgs[0] as B, nextArgs[1] as C)
    case 2:
      return (x: C): D => f(args[0] as A, args[1] as B, x)
    default:
      return f(args[0] as A, args[1] as B, args[2] as C)
  }
}
