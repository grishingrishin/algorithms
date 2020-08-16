/**
 * Creates a duplicate-free version of an array, using SameValueZero for equality comparisons,
 * in which only the first occurrence of each element is kept.
 * The order of result values is determined by the order they occur in the array.
 * @param {array} a - The array to modify.
 * 
 * @return {array} Returns a sorted array without duplicates.
 */
function sortedUniqSelectionSort(a) {  
  if (!Array.isArray(a))
    throw new Error('The array to modify is not array');

  if (!a.length)
    throw new Error('The array to modify is null');
  
  let uniq = [...new Set(a)];
  
  for (let i=0; i<=uniq.length-1; i++) {
    let min = i;
    
    for (let j=i+1; j<=uniq.length-1; j++) {
      if (uniq[j] < uniq[min]) {
        min = j;
        
        let dummy = uniq[i];
        uniq[i] = uniq[min];
        uniq[min] = dummy;
      }
    }
  }
  
  return uniq;
}
