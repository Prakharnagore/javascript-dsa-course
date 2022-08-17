// The sorting algorithms we've learned so far don't scale well
// Try out bubble sort on an array of 100000 elements, it will take quite some time!
// We need to be able to sort large arrays more quickly
// There is a family of sorting algorithms that can improve time complexity from O(n  ) to O(n log n)
// There's a tradeoff between efficiency and simplicity
// The more efficient algorithms are much less simple, and generally take longer to understand
// Let's dive in!

// Merges two already sorted arrays (helper function)
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}
// merge([100, 200], [1, 2, 3, 5, 6]);

// Recrusive Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

let sortedArr = mergeSort([
  10, 24, 76, 73, 99, 63, 828, 0, -3, -89, 54, 23, 131, 1, 1, 8, 98, 4, 21,
]);

console.log(sortedArr);
