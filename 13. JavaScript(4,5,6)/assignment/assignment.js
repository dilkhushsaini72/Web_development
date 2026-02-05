// Q.1 Write a JavaScript function that returns array elements larger than a number.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num = 8;

function greaterElements(arr, num) {
  for (element of arr) {
    if (element > num) {
      console.log(element);
    }
  }
}

greaterElements(arr, num);

// Q.2 Write a JavaScript funtion toextract unique characters from a string:

let str = "abcdabcdfgggh";

function getUnique(str) {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    let currChar = str[i];
    if (ans.indexOf(currChar) == -1) {
      ans = ans + currChar;
    }
  }

  return ans;
}

console.log(getUnique(str));

// Q.3 Write a JavaScript function to count the number of vowels in a String argument.
let str2 = "apna college";

function vowelCount(str2) {
  let count = 0;
  for (ch of str2) {
    if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
      count++;
    }
  }
  console.log("no. of vowels : ", count);
}

vowelCount(str2);

// Q. 5 Write a JavaScript function to generate a random number within a range (start, end).
