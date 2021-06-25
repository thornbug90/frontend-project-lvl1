import mainFun from '../index.js';

const taskOfGame = 'What number is missing in the progression?';

const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Get a progression array;
const getProgArray = (num, diff) => {
  const arrProg = [num];

  for (let i = 0; i < 9; i += 1) {
    const last = arrProg[arrProg.length - 1];
    arrProg.push(last + diff);
  }

  return arrProg;
};

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

    const question = String(progArray.join(' '));
    const correctAnswer = String(getCorrect);

    gameValue.push([question, correctAnswer]);
  }

  return gameValue;
};

export default () => mainFun(taskOfGame, brainProg());
