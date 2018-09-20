import clamp from './clamp'

describe('clamp', () => {
  it('works', () => {
    expect(clamp(1, 2, 3)).toBe(2)
    expect(clamp(1, 2, 0)).toBe(1)
    expect(clamp(1, 2, 1.5)).toBe(1.5)
  })

  it('is autocurried', () => {
    expect(clamp(1, 2)(3)).toBe(2)
    expect(clamp(1)(2, 3)).toBe(2)
    expect(clamp(1)(2)(3)).toBe(2)
  })
})
