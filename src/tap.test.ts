import tap from './tap'

describe('tap', () => {
  it('works', () => {
    expect(tap((_: void) => 3, 42)).toBe(42)
  })

  it('is autocurried', () => {
    expect(tap((_: void) => 3)(42)).toBe(42)
  })
})
