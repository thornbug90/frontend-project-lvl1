// Get a progression array;
const getProgArray = (num, diff) => {
  const arrProg = [num];

  for (let i = 0; i < 9; i += 1) {
    const last = arrProg[arrProg.length - 1];
    arrProg.push(last + diff);
  }

  return arrProg;
};

export default getProgArray;
