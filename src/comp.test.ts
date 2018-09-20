import comp from './comp'

describe('comp', () => {
  it('works', () => {
    expect(comp((a: number) => a + 2, (b: number) => b + 3)(1)).toBe(6)
  })

  it('is autocurried', () => {
    expect(comp((a: number) => a + 2)((b: number) => b + 3)(1)).toBe(6)
  })
})
