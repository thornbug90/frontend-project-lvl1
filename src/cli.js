import readlineSync from 'readline-sync';

const question = () => {
  const userName = readlineSync.question('May I have your name? ');
  const hello = console.log(`Hello, ${userName}!`);

  return hello;
};

export default question;
