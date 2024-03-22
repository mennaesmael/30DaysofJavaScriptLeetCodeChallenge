/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  const result = []; // Create an empty array to store the transformed elements

  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i)); // Apply the function to each element and push the result
  }

  return result; // Return the newly created array with transformed values
};