// Task 1 -------------------
const arrOfNumbers = [1, 10, 31, 20, 33, 4];
const sumArr = arrOfNumbers.reduce((acc, number) => {
  return acc + number;
}, 0);

console.log(sumArr);
