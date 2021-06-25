import mainFun from '../index.js';
import getRandom from '../extraFn/getRandom.js';
import gcd from '../extraFn/findGcd.js';

const taskOfGame = 'Find the greatest common divisor of given numbers.';

// -------------Brain-GCD-------------
const brainGcd = () => {
  const gameValue = [];

  for (let round = 0; round < 3; round += 1) {
    const number1 = getRandom(1, 50);
    const number2 = getRandom(1, 50);

    const question = `Question: ${number1} ${number2}`;
    const correctAnswer = gcd(number1, number2);

    gameValue.push([question, correctAnswer]);
  }

  return gameValue;
};

export default () => mainFun(taskOfGame, brainGcd());
