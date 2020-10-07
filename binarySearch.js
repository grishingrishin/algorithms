/**
 * Binary search compares the target value to the middle element of the array.
 * If they are not equal, the half in which the target cannot lie
 * is eliminated and the search continues on the remaining half,
 * again taking the middle element to compare to the target value,
 * and repeating this until the target value is found.
 * If the search ends with the remaining half being empty,
 * the target is not in the array.
 * @param {array} a - The array to process.
 * @param {number|string} t - The value to search for.
 * 
 * @returns {number|string} Returns target value.
 */
function binarySearch(a, t) {
  if (!Array.isArray(a))
    throw new Error('The array to modify is not array');

  if (!a.length)
    throw new Error('The array to modify is null');

  if (a.length < 2)
    throw new Error('The array to modify is too short');
  
  if (!t)
    throw new Error('The target to search for is undefined');
  
  let l = 0,
      r = a.length;
  
  let s = -1;
  
  while(l <= r) {
    let mid = Math.floor((l + r) / 2);
    
    if (t === a[mid]) {
      s = a[mid];
      break;
    }
    
    if (t < a[mid])
      r = mid - 1;
    else
      l = mid + 1;
  }
  
  return s;
}