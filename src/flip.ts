export default <A, B, C>(f: (a: A, b: B) => C) => (a: B, b: A): C => f(b, a)
