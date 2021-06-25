import mainFun from '../index.js';
import isEven from '../extraFn/isEven.js';
import getRandom from '../extraFn/getRandom.js';

const taskOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

// -------------Brain-Even-------------
const brainEven = () => {
  const gameValue = [];

  for (let round = 0; round < 3; round += 1) {
    const randomNumber = getRandom(1, 100);

    const question = `Question: ${randomNumber}`;
    const correctAnswer = isEven(randomNumber);

    gameValue.push([question, correctAnswer]);
  }

  return gameValue;
};

export default () => mainFun(taskOfGame, brainEven());
