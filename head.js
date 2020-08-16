/**
 * Gets the first element of array.
 * @param {array} a - The array to query.
 */
function head(a) {
  if (!Array.isArray(a))
    throw new Error('The array to query is not array');

  if (!a.length)
    throw new Error('The array to query is null');
  
  return a[0];
}
