/**
 * Removes all elements from array that predicate returns truthy for and returns
 * an array of the removed elements. The predicate is invoked
 * with three arguments: (value, index, array).
 * @param {array} a - The array to modify.
 * @param {Object} f - The function invoked per iteration.
 * 
 * @returns {array} Returns the new array of removed elements.
 */
function remove(a, f) {
  if (!Array.isArray(a))
    throw new Error('The array to modify is not array');

  if (!a.length)
    throw new Error('The array to modify is null');

  if (!f)
    throw new Error('The function invoked per iteration is undefined');
  
  return f ? a.filter(f) : a;
}
