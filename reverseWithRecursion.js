/**
 * @param {array} a - The array to сheck.
 * @returns {number} Returns number "0" if argument is not array and "1" is array
*/
function isArray(a) {
  return !Array.isArray(a) || !a.length ? 0 : 1;
}

/**
 * @param {array} a - The array to reverse.
 * @returns {array} Returns reverse array.
*/
function swap(a) {
  return !isArray(a) ? a : a.reduce((a, b) => [b, ...a], []);
}

/**
 * @param {array} a - The array to reverse.
 * @returns {array} Returns new array.
*/
function reverse(a, i) {
  if (!isArray(a))
    return a;
  
  if (a.length - 1 === i) {
    const n = swap(a);
    n[i] = swap(n[i]);

    return reverse(n, i - 1);
  }
  
  if (i < 0)
    return a;
  
  a[i] = swap(a[i]);
  return reverse(a, i - 1);
}

const arr = [[1,2,3], [4,5,6], [7,8,9]];
console.log(reverse(arr, arr.length - 1));