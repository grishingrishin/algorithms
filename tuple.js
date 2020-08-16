/**
 * Creates a tuple from the passed array.
 * @param {array} a - The array to modify.
 * 
 * @returns {array}  Returns freeze array.
 */
function tuple(a) {
  if (!Array.isArray(a))
    throw new Error('The array to modify is not array');

  if (!a.length)
    throw new Error('The array to modify is null');

  const result = [];
  
  for (let i = 0, len = a.length - 1; i <= len; i++)
    result.push(a[i]);
  
  return Object.freeze(result);
}
