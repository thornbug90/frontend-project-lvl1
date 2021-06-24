import mainFun from '../index.js';

// Result of expression
const getResult = (num1, num2, operator) => {
  let result = null;
  if (operator === '+') result = num1 + num2;
  if (operator === '-') result = num1 - num2;
  if (operator === '*') result = num1 * num2;

  return String(result);
};

const taskOfGame = 'What is the result of the expression?';

// -------------Brain-Calc-------------
const brainCalc = () => {
  const gameValue = [];
  const operations = ['+', '-', '*'];

  for (let round = 0; round < 3; round += 1) {
    const number1 = Math.floor(Math.random() * 50);
    const number2 = Math.floor(Math.random() * 50);
    const randomSign = operations[Math.floor(Math.random() * operations.length)];

    const question = `${number1} ${randomSign} ${number2}`; // question
    const correctAnswer = getResult(number1, number2, randomSign); // correct result

    gameValue.push([question, correctAnswer]);
  }

  return gameValue;
};

export default () => mainFun(taskOfGame, brainCalc());
