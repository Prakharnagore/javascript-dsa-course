// What is recursion?
// A process (a function in our case) that calls itself

// How recursive functions work
// Invoke the same function with a different input until you reach your base case!

// Base Case
// The condition when the recursion ends.

// It uses call stack.
// At the most basic level, a call stack is a data structure that
// uses the Last In, First Out (LIFO) principle to temporarily store
// and manage function invocation (call)

// What about big O?
// Measuring time complexity is relatively simple.
// You can measure the time complexity of a recursive function
// as then number of recursive calls you need to make relative to the input
// Measuring space complexity is a bit more challenging.
// You can measure the space complexity of a recursive function as the
// maximum number of functions on the call stack at a given time, since
// the call stack requires memory

// Count Down
// Recursive Version
function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
countDown(3);

// Count Down
// Iterative Version
function countDown(num) {
  for (var i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All done!");
}

// Sum Range Recursivly
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
sumRange(4);

// factorial iterativly
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

// factorial recursivly
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// helper method functions
function collectOddValues(arr) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);

  return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Pure Recursive Function
function collectOddValues(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}
collectOddValues([1, 2, 3, 4, 5]);
