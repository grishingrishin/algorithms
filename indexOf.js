/**
 * Gets the index at which the first occurrence of value is
 * found in array usingSameValueZero for equality comparisons.
 * If fromIndex is negative, it's used as the offset from the end of array.
 * @param {array} a - The array to inspect.
 * @param {number|string} v - The value to search for.
 * @param {number} f - The index to search from.
 * 
 * @returns {number} Returns the index of the matched value, else -1.
 */
function indexOf(a, v, f) {
  if (!Array.isArray(a))
    throw new Error('The array to inspect is not array');

  if (!a.length)
    throw new Error('The array to inspect is null');
 
  if (!v)
    throw new Error('The value to search for is undefined');

  let fromIndex = 0;

  if (f)
    fromIndex = f;
  
  if (f >= a.length-1)
    return;
    
  for (let i = fromIndex, len = a.length-1; i<=len; i++) {
    if (a[i] === v)
      return i;
  }
}
