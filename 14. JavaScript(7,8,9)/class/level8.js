// reduce function

console.log(
  [1, 2, 3, 4].reduce((acc, element) => {
    return acc + element;
  }),
);

let num = [20, 10, 70, 90];

let result = num.every((val) => {
  return val % 10 == 0;
});

console.log(result);

// find min in array..
let minVal = num.reduce((min, ele) => {
  if (min < ele) {
    return min;
  } else {
    return ele;
  }
});

console.log("minmum value:", minVal);
