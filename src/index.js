import readlineSync from 'readline-sync';
import greeting from './cli.js';

// Function gives a result for a wrong answer;
const wrongAnswer = (wrong, correct, name) => {
  const getWrong = `"${wrong}" is wrong answer =(. Correct answer was "${correct}". \nLet's try again, ${name}!`;

  return console.log(getWrong);
};

// -------------Engine of games-------------
const mainFun = (taskOfGame, gameValue) => {
  console.log('Welcome to the Brain Games!');
  const userName = greeting();

  console.log(taskOfGame);

  for (let round = 0; round < 3; round += 1) {
    const [question, correct] = gameValue[round];

    console.log(question);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correct) {
      console.log('Correct!');
    }
    if (answer !== correct) {
      return wrongAnswer(answer, correct, userName);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default mainFun;
