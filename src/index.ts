export * from './clamp'
export const compose = (...fns) => x => fns.reduceRight((acc, f) => f(acc), x)
export const curry = f => (...xs) => xs.length < f.length ? curry(f.bind(null, ...xs)) : f(...xs)
export const flip = f => curry((a, b) => f(b, a))
export const tap = f => x => (f(x), x)
