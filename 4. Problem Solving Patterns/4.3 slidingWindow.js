// SLIDING WINDOW
// This pattern involves creating a window which can either be an
// array or number from one position to another
// Depending on a certain condition, the window either increases
// or closes (and a new window is created)
// Very useful for keeping track of a subset of data in an array/string etc.

// Example
/*
Write a function called maxSubarraySum which accepts an array of integers 
and a number called n. The function should calculate the maximum sum of n 
consecutive elements in the array.

maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null
*/

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    console.log(arr.slice(i));
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
