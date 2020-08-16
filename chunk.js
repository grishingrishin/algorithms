/**
 * Creates an array of elements split into groups the length of size.
 * If array can't be split evenly, the final chunk will be the remaining elements.
 * @param {array} a - The array to process.
 * @param {number} s - The length of each chunk
 * 
 * @returns {array} Returns the new array of chunks.
 */
function chunk(a, s) {
  if (!Array.isArray(a))
    throw new Error('The array to process is not array');

  if (!a.length)
    throw new Error('The array to process is null');

  if (!s)
    s = 1;

  const result = [];
  
  for (let i=0, len = a.length-1; i<=len; i+=s)
    result.push(a.slice(i, i + s));
  
  return result;
}
