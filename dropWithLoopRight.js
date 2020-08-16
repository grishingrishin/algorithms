/**
 * Creates a slice of array with n elements dropped from the beginning.
 * @param {array} a - The array to query.
 * @param {number} n - The number of elements to drop.
 * 
 * @returns {array} Returns the slice of array.
 */
function dropWithLoopRight(a, n) {
  if (!Array.isArray(a))
    throw new Error('The array to query is not array');

  if (!a.length)
    throw new Error('The array to query is null');
  
  if (!n)
    n = 1;
  
  const result = [];
  
  const isBreak = (a.length) - n;
  
  for (let i=0, len=a.length-1; i<=len; i++)
    if (i < isBreak)
      result.push(a[i]);
    else
      break;
  
  return result;
}