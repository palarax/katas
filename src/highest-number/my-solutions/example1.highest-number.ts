/**
 * Given an array of numbers, return highest number
 * @param param0 array of numbers
 * return highest number
 */
export function getHighestNumber(array: number[]) {
  let max = array[0]
  for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i]
    }
  }
  return max
}
