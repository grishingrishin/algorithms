/**
 * Converts the first character of string to upper case and the remaining to lower case.
 * @param {string} s - The string to capitalize.
 * 
 * @returns {string} Returns the capitalized string.
 */
function capitalize(s) {
  if (!s)
    throw new Error('The string to capitalize is undefined');

  if (s.length < 1)
    throw new Error('The string to capitalize is too short');

  let result = s;

  for (let i=0, len=s.length-1; i<=len; i++) {
    if (i==0)
      result += s[i].toUpperCase();
    else
      result += s[i].toLowerCase();
  }
  
  return result;
}
