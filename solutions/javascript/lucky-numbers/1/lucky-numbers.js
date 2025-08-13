// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let num1 = ""
  for(let i = 0;i<array1.length;i++)
    num1 +=array1[i]
  let num2 = ""
  for(let i = 0;i<array2.length;i++)
    num2 +=array2[i]
  console.log(`num1: ${num1}, num2: ${num2}`)
  return eval(parseInt(num1) + parseInt(num2))
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const valueString = value.toString();
  for (let i = 0, end = valueString.length - 1; i <= end; i++, end--) {
    if (valueString[i] === valueString[end]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  // Check for no input (null, undefined, or empty string)
  if (input === null || input === undefined || input === '') {
    return 'Required field';
  }

  const num = Number(input); // convert string to number

  // If NaN or zero, it's invalid
  if (isNaN(num) || num === 0) {
    return 'Must be a number besides 0';
  }

  return '';
}
