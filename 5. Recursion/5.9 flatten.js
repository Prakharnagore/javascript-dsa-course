// Write a recursive function called flatten which accepts an array of arrays
// and returns a new array with all values flattened.

function flatten(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) {
    return [];
  }
  if (Array.isArray(arr[0])) {
    return flatten(arr[0]).concat(flatten(arr.slice(1)));
  }
  return [arr[0]].concat(flatten(arr.slice(1)));
}

flatten([1, 2, 3, [4, (5)[[[6]]]], [7], [[8]]]);
