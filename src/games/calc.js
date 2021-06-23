import readlineSync from 'readline-sync';
import greeting from '../cli.js';

console.log('Welcome to the Brain Games!');

const getResult = (num1, num2, operator) => {
  let result = null;
  if (operator === '+') result = num1 + num2;
  if (operator === '-') result = num1 - num2;
  if (operator === '*') result = num1 * num2;

  return String(result);
};

// Function gives a result for a wrong answer;
const wrongAnswer = (wrong, correct, name) => {
  const getWrong = `"${wrong}" is wrong answer =(. Correct answer was "${correct}". \nLet's try again, ${name}!`;

  return console.log(getWrong);
};

const calc = () => {
  const userName = greeting();
  const operations = ['+', '-', '*'];

  console.log('What is the result of the expression?');

  for (let round = 0; round < 3; round += 1) {
    const randomSign =
      operations[Math.floor(Math.random() * operations.length)];
    const number1 = Math.floor(Math.random() * 50);
    const number2 = Math.floor(Math.random() * 50);

    const expression = number1 + ` ${randomSign} ` + number2;
    const resultOfExpression = getResult(number1, number2, randomSign);
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');

    if (resultOfExpression === answer) {
      console.log('Correct!');
    }
    if (resultOfExpression !== answer) {
      return wrongAnswer(answer, resultOfExpression, userName);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default calc;
