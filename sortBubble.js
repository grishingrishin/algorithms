/**
 * Bubble sort, sometimes referred to as sinking sort,
 * is a simple sorting algorithm that repeatedly steps through the list,
 * compares adjacent elements and swaps them if they are in the wrong order.
 * The pass through the list is repeated until the list is sorted.
 * @param {array} a - The array to process.
 * 
 * @returns {array} Returns a sorted array
 */

function sortBubble(a) {
  if (!Array.isArray(a))
    return;
  
  if (!a.length)
    return;

  if (a.length < 2)
    throw new Error('The array to modify is too short');

  for (let i=0, len=a.length; i<len; i++) {
    let isBreak = false;
    
    for (let j=0; j<len-i; j++) {
      if (a[j] > a[j + 1]) {
        let s = a[j];
        
        a[j] = a[j + 1];
        a[j + 1] = s;
        
        isBreak = true;
      }
    }
    
    if (!isBreak) break;
  }
  
  return a;
}
