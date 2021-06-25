import mainFun from '../index.js';
import getRandom from '../extraFn/getRandom.js';
import sayPrimeOrNot from '../extraFn/isPrime.js';

const taskOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// -------------Brain-Prime-------------
const brainPrime = () => {
  const gameValue = [];

  for (let round = 0; round < 3; round += 1) {
    const getNumber = getRandom(1, 101);

    const question = `Question: ${String(getNumber)}`;
    const correctAnswer = sayPrimeOrNot(getNumber);

    gameValue.push([question, correctAnswer]);
  }

  return gameValue;
};

export default () => mainFun(taskOfGame, brainPrime());
