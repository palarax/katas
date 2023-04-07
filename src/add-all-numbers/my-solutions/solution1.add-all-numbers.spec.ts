import { getAddAllNumbers } from './solution1.add-all-numbers'

describe('getAddAllNumbers', () => {
  it('Adding all numbers together correctly', () => {
    const given = [2, 8]
    const expected = 10

    const actual = getAddAllNumbers(given)

    expect(actual).toBe(expected)
  })

  it('Returning same number if array only has 1 value', () => {
    const given = [100]
    const expected = 100

    const actual = getAddAllNumbers(given)

    expect(actual).toBe(expected)
  })

  it('return null if empty', () => {
    const given: number[] = []
    const expected = null

    const actual = getAddAllNumbers(given)

    expect(actual).toBe(expected)
  })

  it('Can handle negative values', () => {
    const given: number[] = [-1, 2, 8, 0]
    const expected = 9

    const actual = getAddAllNumbers(given)

    expect(actual).toBe(expected)
  })

  it('Addig 2 max together -> Infinity', () => {
    const given: number[] = [Number.MAX_VALUE, Number.MAX_VALUE]
    const expected = Infinity

    const actual = getAddAllNumbers(given)

    expect(actual).toBe(expected)
  })
})
