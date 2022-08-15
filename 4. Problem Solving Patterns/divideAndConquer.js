// Divide and Conquer
// This pattern involves dividing a data set into smaller chunks
// and then repeating a process with a subset of data.
// This pattern can tremendously decrease time complexity
// Similar to Binary search

/**
 Given a sorted array of integers, write a function called search,
 that accepts a value and returns the index where the value passed 
 to the function is located. If the value is not found, return -1
 Time Complexity - Log(N)

search([1,2,3,4,5,6],4) // 3
search([1,2,3,4,5,6],6) // 5
search([1,2,3,4,5,6],11) // -1
 */

function search(array, val) {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
