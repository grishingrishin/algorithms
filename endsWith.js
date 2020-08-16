/**
 * Checks if string ends with the given target string.
 * @param {string} s - The string to inspect.
 * @param {string} t - The string to search for.
 * @param {number} p - The position to search up to.
 * 
 * @returns {boolean} Returns true if string ends with target, else false.
 */
function endsWith(s, t, p) {
  if (!s)
    throw new Error('The string to inspect is undefined');
  
  if (!t)
    throw new Error('The string to search for is undefined');

  let result = s;
  
  if (!p)
    result = s[s.length-1] === t;

  if (p <= s.length-1)
    result = s[p] === t;
  else
    result = s;
  
  return result;
}
