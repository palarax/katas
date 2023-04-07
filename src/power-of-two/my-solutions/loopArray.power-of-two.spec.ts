import { getPowerOfTwo } from './loopArray.power-of-two'

describe('getPowerOfTwo', () => {
  it('Evaluate power of two on a list', () => {
    const given = [2, 8]
    const expected = [4, 64]

    const actual = getPowerOfTwo(given)

    expect(actual).toEqual(expected)
  })
})
