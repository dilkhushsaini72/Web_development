// Q.1 Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.
let arrayAverage = (arr) => {
  let totalSum = 0;
  for (num of arr) {
    totalSum += num;
  }
  return totalSum / arr.length;
};

let arrNum = [3, 5, 6, 7, 1, 3];
console.log(arrayAverage(arrNum));

// Q.2 Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not..
let isEven = (a) => {
  if (a % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
};

console.log(isEven(13));

// Q.3 What is the output of the following code:
const object = {
  message: "Hello, World!",
  logMessage() {
    console.log(this.message);
  },
};

setTimeout(object.logMessage, 1000);

// Q.4 What is the output of the following code:
let length = 4;
function callback() {
  // console.log(this.length);   //
}

const object2 = {
  length: 5,
  method(callback) {
    callback();
  },
};

object2.method(callback, 1, 2);
