const Stack = require('./stack');

function calc(calcStr) {

  const calcStrPieces = calcStr.split(" ");
  const numStack = new Stack();

  while (calcStrPieces.length > 0) { 
    let nextVal = calcStrPieces.pop();

    // console.log(nextVal);
    // console.log(numStack);

    if (["+", "-", "*", "/"].includes(nextVal)) {

      let result = numStack.pop() || 0;

      while (numStack.size > 0) {
        if (nextVal === "+") {
          result = result + numStack.pop();
        } else if (nextVal === "*") {
          result = result * numStack.pop();
        } if (nextVal === "-") {
          result = result - numStack.pop();
        } if (nextVal === "/") {
          result = result / numStack.pop();
        }
      }
      numStack.push(result);
      // console.log(numStack);

    } else {
      numStack.push(Number(nextVal));
    }
  }
  // should be last element
  return numStack.pop();
}

function log(str, expct) { 
  let calculated = calc(str);
  console.log(str, calculated, calculated==expct)
}

log("+ 1 2", 3);
log("* 2 + 1 2", 6);
log("+ 9 * 2 3", 15);
log("- 1 2", -1);
log("- 9 * 2 3", 3);
log("/ 6 - 4 2", 3);


console.log(calc("+ 1 2"));
console.log(calc("* 2 + 1 2"));
console.log(calc("+ 9 * 2 3"));