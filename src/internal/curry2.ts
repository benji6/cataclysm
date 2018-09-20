// tslint:disable ban-types

export default <A, B, C>(f: Function) => (...args: Array<A | B>) =>
  args.length === 1
    ? (x: B): C => f(args[0] as A, x)
    : f(args[0] as A, args[1] as B)
