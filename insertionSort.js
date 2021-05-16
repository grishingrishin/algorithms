/**
 * Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. 
 * Insertion sort iterates, consuming one input element each repetition,
 * and grows a sorted output list. At each iteration,
 * insertion sort removes one element from the input data,
 * finds the location it belongs within the sorted list, and inserts it there.
 * It repeats until no input elements remain
 * @param {array} a - The array to process
 * @returns {array} Returns a sorted array
 */
 function insertionSort(a) {
    if (!Array.isArray(a)) {
        return;
    }

    if (!a.length) {
        return;
    }

    for (let i = 0, l = a.length; i < l; i++) {
        let c = a[i];
        let j = i - 1;

        while((j > -1) && (c < a[j])) {
            a[j + 1] = a[j];
            j--;
        }

        a[j + 1] = c;
    }

    return a;
}