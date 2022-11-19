# Browser Back/Forward

const historyStack = new Stack
const forwardStack = new Stack
currentSite = null

function clearForwardStack()
  forwardStack.first = null
  forwardStack.last = null


function goToNewSite(site)
  historyStack.push(currentSite)
  currentSite = site
  clearForwardStack()


function goBack()
  forwardStack.push(currentSite)
  currentSite = historyStack.pop()


function goForward()
  historyStack.push(currentSite)
  currentSite = forwardStack.pop()


# String Reversal

function reverseString(str) {
  const charStack = new Stack();
  let i = 0;
  while (i < str.length) {
    charStack.push(str[i])
    i++;
  }
  retStr = ""
  while (!charStack.isEmpty()) {
    retStr += charStack.pop()
  }
  return retStr;
}


# Balanced Brackets?

function balancedBrackets(str) {

  // traverse a string, add open bracket
  // if closing bracket, compare with last open bracket
  // if not a match, return false
  // if string is traversed with any open brackets left, return false
  // else return trueb

  const openBracketStack = new Stack();
  let i=0;
  while (i < str.length) {
    if (["(", "{", "["].includes(str[i])) {
      openBracketStack.push(str[i])
    }
    if ([")", "}", "]"].includes(str[i])) {
      if (str[i] === ")") {
        if (openBracketStack.pop() !== "(") {
          return false;
        }
      }
      else if (str[i] === "}") {
        if (openBracketStack.pop() !== "{") {
          return false;
        }
      } else if (str[i] === "]") {
        if (openBracketStack.pop() !== "[") {
          return false;
        }
      }
    }
    i++;
  }

  if (openBracketStack.isEmpty()) return true; 

}


# Josephus Survivor

function find_survivor(numPeople, skip) {

  // create and populate queue
  const murderQueue = new Queue;
  for (let i=1; i <= numPeople; i++) {
    murderQueue.enqueue(i);
  }

  // do the murdering
  while (murderQueue.first !== murderQueue.last) {
    // skip "skip" number of times minus one
    for (let i=0; i < (skip-1); i++ ) {
      murderQueue.enqueue(murderQueue.dequeue())
    }
    // kill
    murderQueue.dequeue();
  }

  return murderQueue.first.val;

}


# Calculator

function calc(calcStr) {

  const calcStrPieces = calcStr.split(" ");
  const numStack = new Stack();

  while (calcStrPieces.length > 0) { 
    let nextVal = calcStrPieces.pop();

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

    } else {
      numStack.push(Number(nextVal));
    }
  }
  // should be last element
  return numStack.pop();
}
