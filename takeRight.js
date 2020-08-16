/**
 * Creates a slice of array with n elements taken from the end.
 * @param {array} a - The array to query.
 * @param {number} n - The number of elements to take.
 * @param {number} s - The index of the element to which to remove elements.
 * 
 * @returns {array} Returns the slice of array.
 */
function takeRight(a, n, s) {
  if (!Array.isArray(a))
    throw new Error('The array to query is not array');

  if (!a.length)
    throw new Error('The array to query is null');
  
  if (!n)
    n = 1;
  
  if (n >= a.length-1)
    n = 1;
  
  if (!s)
    s = 0;
  
  if (s >= a.length-2)
    s = 0;
  
  return a.slice(s, a.length-n);
}
