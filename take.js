/**
 * Creates a slice of array with n elements taken from the beginning.
 * @param {array} a - The array to query.
 * @param {number} n - The number of elements to take.
 * 
 * @returns {array} Returns the slice of array.
 */
function take(a, n) {
  if (!Array.isArray(a))
    throw new Error('The array to query is not array');

  if (!a.length)
    throw new Error('The array to query is null');
  
  if (!n)
    n = 1;
 
  if (n >= a.length-1)
    n = 1;
  
  return a.slice(a.length-n);
}
