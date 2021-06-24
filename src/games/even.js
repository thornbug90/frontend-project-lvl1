import mainFun from '../index.js';

// Check an even number.
const checkEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const taskOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

// -------------Brain-Even-------------
const brainEven = () => {
  const gameValue = [];

  for (let round = 0; round < 3; round += 1) {
    const randomNumber = Math.floor(Math.random() * 100);

    const question = `Question: ${randomNumber}`;
    const correctAnswer = checkEven(randomNumber);

    gameValue.push([question, correctAnswer]);
  }

  return gameValue;
};

export default () => mainFun(taskOfGame, brainEven());
