import tap from './tap'

describe('tap', () => {
  it('works', () => {
    expect(tap((x: number) => 3, 42)).toBe(42)
  })

  it('is autocurried', () => {
    expect(tap((x: number) => 3)(42)).toBe(42)
  })
})
