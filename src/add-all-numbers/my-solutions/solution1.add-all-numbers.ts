/**
 * Given a list of numbers it should get the total by adding them together
 * return
 */
export function getAddAllNumbers(numbers: number[]): number | null {
  if (numbers.length == 0) {
    return null
  }
  let sum = 0
  numbers.forEach(val => (sum += val))
  return sum
}
