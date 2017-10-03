import * as test from 'tape'
import {
  clamp,
  comp,
  flip,
  map,
  merge,
  tap,
} from './'

const syncTest = (name, f) => test(name, t => (f(t), t.end()))
const add = (a: number) => (b: number) => a + b

syncTest('clamp', t => {
  t.is(clamp(1, 2, 3), 2)
  t.is(clamp(1, 2, 0), 1)
  t.is(clamp(1, 2, 1.5), 1.5)
  t.is(clamp(1, 2)(3), 2, 'is autocurried')
  t.is(clamp(1)(2, 3), 2, 'is autocurried')
  t.is(clamp(1)(2)(3), 2, 'is autocurried')
})

syncTest('comp', t => {
  t.is(comp(a => a + 2)(b => b + 3)(1), 6)
})

syncTest('flip', t => {
  const subtract = (a: number) => (b: number) => a - b
  const flippedSubtract = flip(subtract);
  t.equals(-2, subtract(3)(5))
  t.equals(2, flippedSubtract(3)(5))
  t.equals(2, flippedSubtract(3)(5))
})

syncTest('map', t => {
  t.deepEqual(map(add(1), [1, 2, 3]), [2, 3, 4])
  t.deepEqual(map(add(1))([1, 2, 3]), [2, 3, 4], 'is autocurried')
})

syncTest('merge', t => {
  t.deepEqual(merge({}, {}), {})
  t.deepEqual(merge({a: 5}, {b: 6}), {a: 5, b: 6})
  t.deepEqual(merge({a: 5, b: 7}, {b: 6}), {a: 5, b: 7})
  t.deepEqual(merge({a: 5, b: 7})({b: 6}), {a: 5, b: 7}, 'is autocurried')
})

syncTest('tap', t => {
  t.equals(42, tap(x => 3, 42))
  t.equals(42, tap(x => 3)(42), 'is autocurried')
})
