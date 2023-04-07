/**
 * Given a list of numbers it should return a new list of numbers that are to the power of 2.
 * @param numbers
 * returns new list of numbers that are to the power of 2
 */
export function getPowerOfTwo(numbers: Array<number>): Array<number> {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] ** 2
  }
  return numbers
}
