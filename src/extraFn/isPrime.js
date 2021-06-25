const isPrime = (num) => {
  if (num < 2) return false;

  const limit = Math.floor(Math.sqrt(num));

  for (let i = 2; i < limit; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const sayPrimeOrNot = (num) => (isPrime(num) ? console.log('yes') : console.log('no'));

export default sayPrimeOrNot;
