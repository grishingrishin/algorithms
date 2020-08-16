/**
 * Converts the first character of string to lower case.
 * @param {string} s - The string to convert.
 * 
 * @returns {string} The string to convert.
 */
function lowerFirst(s) {  
  if (!s)
    throw new Error('The string to convert is undefined');

  if (s.length <= 1)
    throw new Error('The string to convert is too small');
  
  const firstSymbol = s[0];

  const arrSymbols = s.split('');
  arrSymbols.shift();
  
  const otherSymbols = arrSymbols;
  
  return firstSymbol.toLowerCase() + otherSymbols.join('');
}
