/**
 * Creates a duplicate-free version of an array,
 * using SameValueZero for equality comparisons,
 * in which only the first occurrence of each element is kept.
 * The order of result values is determined by
 * the order they occur in the array.
 * @param {array} a - The array to inspect.
 * 
 * @returns {array} Returns the new duplicate free array.
 */
function uniqWithSet(a) {
  if (!Array.isArray(a))
    throw new Error('The array to inspect is not array');

  if (!a.length)
    throw new Error('The array to inspect is null');
  
  return [...new Set(a)];
}
