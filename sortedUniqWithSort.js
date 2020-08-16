/**
 * Creates a duplicate-free version of an array, using SameValueZero for equality comparisons,
 * in which only the first occurrence of each element is kept.
 * The order of result values is determined by the order they occur in the array.
 * @param {array} a - The array to modify.
 * 
 * @return {array} Returns a sorted array without duplicates.
 */
function sortedUniqWithSort(a) {
  if (!Array.isArray(a))
    throw new Error('The array to modify is not array');

  if (!a.length)
    throw new Error('The array to modify is null');
  
  const uniq = [...new Set(a)];

  return uniq.sort((a, b) => a - b );
}
