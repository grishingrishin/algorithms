/**
 * Reverses array so that the first element becomes the last,
 * the second element becomes the second to last, and so on.
 * @param {array} a - The array to modify.
 * 
 * @returns {array} Returns array.
 */
function reverse(a) {  
  if (!Array.isArray(a))
    throw new Error('The array to modify is not array');

  if (!a.length)
    throw new Error('The array to modify is null');
  
 return a.reverse(); 
}
