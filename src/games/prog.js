import mainFun from '../index.js';
import getRandom from '../extraFn/getRandom.js';
import getProgArray from '../extraFn/getProgression.js';

const taskOfGame = 'What number is missing in the progression?';

// -------------Brain-Progression-------------
const brainProg = () => {
  const gameValue = [];

  for (let round = 0; round < 3; round += 1) {
    const number = getRandom(1, 20);
    const difference = getRandom(1, 5);

    const progArray = getProgArray(number, difference);
    const getCorrect = progArray[Math.floor(Math.random() * progArray.length)];
    const replaceNum = progArray.indexOf(getCorrect);
    progArray[replaceNum] = '..';

    const question = `Question: ${String(progArray.join(' '))}`;
    const correctAnswer = String(getCorrect);

    gameValue.push([question, correctAnswer]);
  }

  return gameValue;
};

export default () => mainFun(taskOfGame, brainProg());
