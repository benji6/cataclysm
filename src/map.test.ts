import map from './map'

const add = (a: number) => (b: number) => a + b

describe('map', () => {
  it('works', () => {
    expect(map(add(1), [1, 2, 3])).toEqual([2, 3, 4])
  })

  it('is autocurried', () => {
    expect(map(add(1))([1, 2, 3])).toEqual([2, 3, 4])
  })
})
