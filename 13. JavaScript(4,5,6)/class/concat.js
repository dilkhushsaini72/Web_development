let strArr = ["Hello", "Hi", "Bye"];

function concateStr(arr) {
  let result = "";
  for (str of arr) {
    result = result + str;
  }
  return result;
}
let fullStr = concateStr(strArr);
console.log(fullStr);

let newNum = 123;
function outerFun() {
  let newNum = 987;
  function innerFun() {
    console.log(newNum);
  }

  innerFun();
}

outerFun();
