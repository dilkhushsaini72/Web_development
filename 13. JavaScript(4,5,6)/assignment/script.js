// Q.1

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for (digit of arr) {
  if (num != digit) {
    console.log(digit);
  }
}

// Q.2
// console.log("Q.2---------")
// let number = 28715242;
// let copy = number;
// let count = 0;
// while (copy != 0) {
//   count++;
//   copy = Math.floor(copy/10);
// }
// console.log("No of digits is: ", count);

// Q. 3
console.log("Q.3 ---------");
let number = 12349;
let copy = number;
let sum = 0;
while (copy != 0) {
  digit = copy % 10;
  sum = sum + digit;
  copy = Math.floor(copy / 10);
}

console.log(sum);

// Q. 4
console.log("Q.4 -----------");

