/**
 * Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot'
 * element from the array and partitioning the other elements into two sub-arrays,
 * according to whether they are less than or greater than the pivot.
 * The sub-arrays are then sorted recursively.
 * @param {array} arr - The array to modify
 * @param {number} low - Start index of array
 * @param {number} high - Last index of array
 * 
 * @returns {array} Returns a sorted array
 */
function quickSort(arr, low, high) {
  if (!Array.isArray(arr))
    throw new Error('The array to modify is not array');

  if (!arr.length)
    throw new Error('The array to modify is null');

  if (arr.length < 2)
    throw new Error('The array to modify is too short');

  if (low === (undefined || null))
    throw new Error('Start index of array is undefined');

  if (high === (undefined || null))
    throw new Error('Last index of array is undefined');

  let index = partition(arr, low, high);
  
  if (low < index - 1)
    quickSort(arr, low, index - 1);
  
  if (index < high)
    quickSort(arr, index, high);
  
  return arr;
}

/**
 * @param {array} arr - The array to modify
 * @param {number} low - Start index of array
 * @param {number} high - Last index of array
 * 
 * @returns {array}
 */
function partition(arr, low, high) {
  if (!Array.isArray(arr))
    throw new Error('The array to modify is not array');

  if (!arr.length)
    throw new Error('The array to modify is null');

  if (low === (undefined || null))
    throw new Error('Start index of array is undefined');

  if (high === (undefined || null))
    throw new Error('Last index of array is undefined');

  const pivot = arr[Math.floor((high + low) / 2)];
  let left = low;
  let right = high;
  
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  return left;
}

/**
 * @param {array} arr - The array to modify
 * @param {number} leftIndex - LeftIndex index of array
 * @param {number} rightIndex - RightIndex index of array
 * 
 * @returns {array}
 */
function swap(arr, leftIndex, rightIndex) {
  if (!Array.isArray(arr))
    throw new Error('The array to modify is not array');

  if (!arr.length)
    throw new Error('The array to modify is null');

  if (leftIndex === (undefined || null))
    throw new Error('LeftIndex index of array is undefined');

  if (rightIndex === (undefined || null))
    throw new Error('RightIndex index of array is undefined');

  const temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;

  return arr;
}
