/**
 * Shaker sort, also known as bidirectional bubble sort, cocktail sort, shaker sort
 * (which can also refer to a variant of selection sort), ripple sort, shuffle sort,
 * or shuttle sort, is an extension of bubble sort. The algorithm extends
 * bubble sort by operating in two directions.
 * @param {array} a - The array to process.
 *
 * @returns {array} Returns a sorted array
 */
function shakerSort(a) {
  let l = 0;
  let r = a.length;

  do {
    for (let i = l; i < r; i++) {
      if (a[i] > a[i + 1]) {
        const s = a[i];

        a[i] = a[i + 1];
        a[i + 1] = s;
      }
    }

    r--;

    for (let i = r; l < i; i--) {
      if (a[i] < a[i - 1]) {
        const s = a[i];

        a[i] = a[i - 1];
        a[i - 1] = s;
      }
    }

    l++;
  } while (l < r);

  return a;
}
