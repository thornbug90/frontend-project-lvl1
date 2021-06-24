import mainFun from '../index.js';

const gcd = (a, b) => {
  if (!b) return a;

  return String(gcd(b, a % b));
};

const taskOfGame = 'Find the greatest common divisor of given numbers.';

// -------------Brain-GCD-------------
const brainGcd = () => {
  const gameValue = [];

  for (let round = 0; round < 3; round += 1) {
    const number1 = Math.floor(Math.random() * 50);
    const number2 = Math.floor(Math.random() * 50);

    const question = `${number1} ${number2}`;
    const correctAnswer = gcd(number1, number2);

    gameValue.push([question, correctAnswer]);
  }

  return gameValue;
};

export default () => mainFun(taskOfGame, brainGcd());
