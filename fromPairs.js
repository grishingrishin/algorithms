/**
 * This method returns an object composed from key-value pairs.
 * @param {array} a - The key-value pairs.
 * 
 * @returns {Object} Returns the new object.
 */
function fromPairs(a) {
  if (!Array.isArray(a))
    throw new Error('The key-value pairs is not array');

  if (!a.length)
    throw new Error('The key-value pairs is null');

  const result = {};

  for (let i=0, len=a.length-1; i<=len; i++) {
    const curArray = a[i];
    
    const firstElement = curArray[0];
    
    if (!firstElement)
      continue;
    
    const secondElement = curArray[1];
    
    if (secondElement !== undefined && secondElement !== null)
      result[firstElement] = secondElement;
  }
  
  return result;
}
