// Function finds the greatest common divisor (Brain-Gcd);
const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return String(gcd(b, a % b));
};

export default gcd;
