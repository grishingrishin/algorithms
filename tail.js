/**
 * Gets all but the first element of array.
 * @param {array} a - The array to query.
 * @param {number} n - The index of the item from which to start deleting items
 * 
 * @returns Returns the slice of array.
 */
function tail(a, n) {
  if (!Array.isArray(a))
    throw new Error('The array to query is not array');

  if (!a.length)
    throw new Error('The array to query is null');
  
  if (!n)
    n = 1;
  
  return a.slice(n);
}
