/**
 * The algorithm divides the input list into two parts:
 * a sorted sublist of items which is built up from left to right at the front (left) of the list
 * and a sublist of the remaining unsorted items that occupy the rest of the list. Initially,
 * the sorted sublist is empty and the unsorted sublist is the entire input list.
 * The algorithm proceeds by finding the smallest (or largest,
 * depending on sorting order) element in the unsorted sublist,
 * exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order),
 * and moving the sublist boundaries one element to the right.
 * @param {array} a - The array to process.
 *
 * @returns {array} Returns a sorted array
 */
function selectionSort(a) {
    if (!Array.isArray(a)) {
        return;
    }

    if (!a.length) {
        return;
    }

    for (let i = 0; i < a.length - 1; i++) {
        let m = i;
        
        for (let j = i + 1; j < a.length; j++) {
            if (a[m] > a[j]) {
                m = j;
            }
        }

        if (m !== i) {
            const s = a[m];
            a[m] = a[i];
            a[i] = s;
        }
    }

    return a;
}