import mainFun from '../index.js';

const taskOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

const isPrime = (num) => {
  if (num < 2) return false;

  const limit = Math.floor(Math.sqrt(num));

  for (let i = 2; i < limit; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const sayPrimeOrNot = (num) => (isPrime(num) ? 'yes' : 'no');

// -------------Brain-Prime-------------
const brainPrime = () => {
  const gameValue = [];

  for (let round = 0; round < 3; round += 1) {
    const getNumber = getRandom(2, 101);

    const question = String(getNumber);
    const correctAnswer = sayPrimeOrNot(getNumber);

    gameValue.push([question, correctAnswer]);
  }

  return gameValue;
};

export default () => mainFun(taskOfGame, brainPrime());
