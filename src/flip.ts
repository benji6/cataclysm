export default <A, B>(f: (a: A, b: B) => any) => (a: B, b: A) => f(b, a)
