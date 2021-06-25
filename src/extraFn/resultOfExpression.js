// Function gets a result of expression for calculation (Brain-Calc)
const getResult = (num1, num2, operator) => {
  let result = null;
  if (operator === '+') {
    result = num1 + num2;
  }
  if (operator === '-') {
    result = num1 - num2;
  }
  if (operator === '*') {
    result = num1 * num2;
  }

  return String(result);
};

export default getResult;
