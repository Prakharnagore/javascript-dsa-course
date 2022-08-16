// Write a function called stringifyNumbers which takes in an object
// and finds all of the values which are numbers and converts them to strings.
// Recursion would be a great way to solve this

function stringifyNumbers(obj, newObj = {}) {
  for (let key in obj) {
    newObj[key] = obj[key];
    if (Array.isArray(obj[key])) {
      newObj[key] = obj[key];
    } else if (typeof obj[key] === "object") {
      newObj[key] = stringifyNumbers(obj[key]);
    } else if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    }
  }
  return newObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));
/* 
OUTPUT 
{
  num: "1",
  test: [],
  data: {
      val: "4",
      info: {
          isRight: true,
          random: "66"
      }
  }
}

*/
