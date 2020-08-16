/**
 * Repeats the given string n times.
 * @param {string} a - The string to repeat.
 * @param {number} n - The number of times to repeat the string.
 */
function repeat(s, n) {
  if (!s)
    throw new Error('The string to repeat is undefined');
  
  if (!n)
    n = 1;

  let result = s;

  if (n > 1)
    for (let i = 0; i<n; i++)
      result += s;
  
  return result;
}