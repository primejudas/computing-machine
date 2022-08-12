function add(parameter1, parameter2) {
  console.log(parameter1 + parameter2);
}
function multiply(parameter1, parameter2) {
  console.log(parameter1 * parameter2);
}
function subsract(parameter1, parameter2) {
  console.log(parameter1 - parameter2);
}
function divide(parameter1, parameter2) {
  console.log(parameter1 / parameter2);
}

function output(parameter1, operator, parameter2) {
  let parameter1 = number;
  let parameter2 = number;
  let operator = operator;

  if (operator === "+") {
    add(parameter1, parameter2);
  } else if (operator === "-") {
    subsract(parameter1, parameter2);
  } else if (operator === "*") {
    multiply(parameter1, parameter2);
  } else if (operator === "/") {
    divide(parameter1, parameter2);
  }
}

console.log(output());
