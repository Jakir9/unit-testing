export function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

export function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

export function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

export function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

export function square(number) {
  return number * number;
}

export function calculate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "*":
      return multiply(firstNumber, secondNumber);
    case "/":
      return divide(firstNumber, secondNumber);
    case "sq":
      // Even if caller passes in an argument for `secondNumber`, it's effectively ignored.
      return square(firstNumber);
    default:
      throw new Error(`Unsupported operator ${operator}`);
  }
}
