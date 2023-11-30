
/**
 * Checks if two arrays are equal in values.
 * Values must be of the same type and primitive. Arrays and objects are not supported.
 * @param array1 
 * @param array2 
 * @returns A boolean indicating if the two arrays are equal in values.
 */
function areArraysEqualInValues(array1: any[], array2: any[]) {
  if (array1.length !== array2.length) {
    return false;
  }
  const array1Sorted = array1.sort();
  const array2Sorted = array2.sort();
  for (let i = 0; i < array1Sorted.length; i++) {
    if (array1Sorted[i] !== array2Sorted[i]) {
      return false;
    }
  }
  return true;
}

export default areArraysEqualInValues;
