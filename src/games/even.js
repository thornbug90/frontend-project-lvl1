import readlineSync from 'readline-sync';
import greeting from '../cli.js';

console.log('Welcome to the Brain Games!');

// Check an even number.
const checkEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

// Function gives a result for a wrong answer;
const wrongAnswer = (wrong, correct, name) => {
  const getWrong = `Something went wrong! "${wrong}" is wrong answer =(. Correct answer was "${correct}". \nLet's try again, ${name}!`;

  return console.log(getWrong);
};

// Game function
const isEven = () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let round = 0; round < 3; round += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (checkEven(randomNumber) === answer) {
      console.log('Correct!');
    }
    if (checkEven(randomNumber) !== answer) {
      return wrongAnswer(answer, checkEven(randomNumber), userName);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default isEven;
