import merge from './merge'

describe('merge', () => {
  it('works', () => {
    expect(merge({}, {})).toEqual({})
    expect(merge({ a: 5 }, { b: 6 })).toEqual({ a: 5, b: 6 })
    expect(merge({ a: 5, b: 7 }, { b: 6 })).toEqual({ a: 5, b: 7 })
  })

  it('is autocurried', () => {
    expect(merge({ a: 5, b: 7 })({ b: 6 })).toEqual({ a: 5, b: 7 })
  })
})
