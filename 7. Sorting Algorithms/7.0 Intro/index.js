// Sorting Animation Website https://www.toptal.com/developers/sorting-algorithms

// JS built in sort method

function numberCompare(num1, num2) {
  return num1 - num2;
}
[6, 4, 15, 10].sort(numberCompare);
// [ 4, 6, 10, 15 ]

function compareByLen(str1, str2) {
  return str1.length - str2.length;
}
["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen);
// [ "Colt", "Steele", "Algorithms", "Data Structures" ]
