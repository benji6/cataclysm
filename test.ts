/// <reference path="./typings/main.d.ts" />

import * as test from 'tape'
import {compose, curry, flip, tap} from './'

const syncTest = (name, f) => test(name, t => (f(t), t.end()))
const add = (a, b) => a + b
const subtract = (a, b) => a - b
const curriedAdd = a => b => a + b;

syncTest('compose', t => {
    const add1 = curriedAdd(1);
    const add2 = curriedAdd(2);
    const add3 = curriedAdd(3);
    t.equals(10, compose(add1, add2, add3)(4))
})

syncTest('curry', t => {
    const autioCurriedAdd = curry(add);
    const add1 = autioCurriedAdd(1);
    t.equals(5, autioCurriedAdd(2, 3))
    t.equals(5, autioCurriedAdd(2)(3))
    t.equals(5, add1(4))
    t.equals(5, add1(4))
})

syncTest('flip', t => {
    const flippedSubtract = flip(subtract);
    t.equals(-2, subtract(3, 5))
    t.equals(2, flippedSubtract(3)(5))
    t.equals(2, flippedSubtract(3, 5))
})

syncTest('tap', t => {
    t.equals(42, tap(x => 3)(42))
})
