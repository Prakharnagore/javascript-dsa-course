// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

function capitalizeWords(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 1) {
    return arr[0].toUpperCase();
  }
  return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
}
