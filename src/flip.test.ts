import flip from './flip'

const nth = (i: number, xs: number[]): number => xs[i]
const flippedNth = flip(nth)

test('flip', () => {
  expect(nth(1, [1, 2, 3])).toBe(2)
  expect(flippedNth([1, 2, 3], 1)).toBe(2)
})
