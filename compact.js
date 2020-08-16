/**
 * Creates an array with all falsey values removed.
 * The values false, null, 0, "", undefined, and NaN are falsey.
 * @param {array} a - The array to compact.
 * 
 * @returns {array} Returns the new array of filtered values.
 */
function compact(a) {
  if (!Array.isArray(a))
    throw new Error('The array to compact is not array');

  if (!a.length)
    throw new Error('The array to compact is null');

  const result = [];

  for (let i=0, len=a.length-1; i <=len; i++) {
    const curElement = a[i];
    
    if (curElement)
      result.push(curElement);
    else
      continue;
  }
  
  return result;
}
