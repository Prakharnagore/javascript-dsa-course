// Frequency Counter Pattern
// This pattern uses objects or sets to collect values/frequencies of values
// This can often avoid the need for nested loops or O(N^2) operations with arrays / strings

// Example
/*
Question && Solution 
Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
Write a function called same, which accepts two arrays. 
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency
*/
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

/*
Question and Solution :
Given two strings, write a function to determine if the second string 
is an anagram of the first. An anagram is a word, phrase, or name formed 
by rearranging the letters of another, such as cinema, formed from iceman.

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
*/

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] = (lookup[letter] || 0) + 1;
  }
  console.log(lookup);
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
