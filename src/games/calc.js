import mainFun from '../index.js';
import getResult from '../extraFn/resultOfExpression.js';
import getRandom from '../extraFn/getRandom.js';

const taskOfGame = 'What is the result of the expression?';

// -------------Brain-Calc-------------
const brainCalc = () => {
  const gameValue = [];
  const operations = ['+', '-', '*'];

  for (let round = 0; round < 3; round += 1) {
    const number1 = getRandom(1, 50);
    const number2 = getRandom(1, 50);
    const randomSign = operations[Math.floor(Math.random() * operations.length)];

    const question = `Question: ${number1} ${randomSign} ${number2}`; // question
    const correctAnswer = getResult(number1, number2, randomSign); // correct result

    gameValue.push([question, correctAnswer]);
  }

  return gameValue;
};

export default () => mainFun(taskOfGame, brainCalc());
