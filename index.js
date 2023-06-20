// Task 1 -------------------
//const arrOfNumbers = [1, 10, 31, 20, 33, 4];
//const sumArr = arrOfNumbers.reduce((acc, number) => {
//  return acc + number;
//}, 0);

//console.log(sumArr);

// Task 2 -------------------

//const arrOfStrings = ["asdasdasd", "dddsssaa", "asdasdasd", "fffrfefasd"];

//const arrOfStryingsUpper = arrOfStrings.map((item) => item.toUpperCase());
//console.log(arrOfStryingsUpper);

// Task 3 -------------------

//const arrOfNumbers = [1, 10, 31, 20, 33, 4];
//const arrOfEven = arrOfNumbers.filter((item) => item % 2 === 0);
//console.log(arrOfEven);

// Task 4 -------------------

//const arrOfStrings = [
//  "asdasdasd",
//  "JavaScript dddsssaa",
//  "asdasdasd",
//  "fffrfefasd JavaScript",
//];

//const firstJs = arrOfStrings.find((item) => item.includes("JavaScript"));
//console.log(firstJs);

// Task 5 -------------------

//const arrOfObjects = [
//  { name: "Breu", age: 11 },
//  { name: "Alex", age: 34 },
//  { name: "Jack", age: 26 },
//  { name: "Nick", age: 3 },
//];

//arrOfObjects.sort((a, b) => (a.age > b.age ? 1 : -1));
//console.log(arrOfObjects);

// Task 6 -------------------

//const arrOfNumbers = [1, 10, -31, 20, 33, 4];

//console.log(arrOfNumbers.every((item) => item >= 0));

// Task 7 -------------------

//const arrOfObjects = [
//  { name: "Breu", age: 11 },
//  { name: "Alex", age: 34 },
//  { name: "Jack", age: 26 },
//  { name: "Nick", age: 3 },
//];

//const averageAge = arrOfObjects.reduce((acc, item, index, arr) => {
//  acc += item.age;
//  if (index === arr.length - 1) {
//    return acc / arr.length;
//  } else {
//    return acc;
//  }
//}, 0);
//console.log(averageAge);

// Task 8 -------------------

//const arrOfStrings = [
//  "as",
//  "JavaScript dddsssaa",
//  "asdad",
//  "fffrfefasd JavaScript",
//  "fff",
//];
//console.log(arrOfStrings);
//const arrStrMore5 = arrOfStrings.filter((item) => item.length >= 5);
//console.log(arrStrMore5);

// Task 9 -------------------

//const arrOfNumbers = [1, 10, -31, 20, 33, 4];
//const arrOfX = arrOfNumbers.reduce((acc, item) => acc * item, 1);
//console.log(arrOfX);

// Task 10 -------------------

//const arrOfStrings = [
//  "as",
//  "JavaScript dddsssaa",
//  "asdad",
//  "fffrfefasd JavaScript",
//  "fff",
//];

//console.log(arrOfStrings.some((item) => item.includes("JavaScript")));

// Task 11 -------------------

//const arrOfNumbers = [1, 10, -31, 20, 33, 4];

//console.log(arrOfNumbers.findIndex((item) => item < 0));

// Task 12 -------------------

//const arrOfObjects = [
//  { name: "Breu", age: 11 },
//  { name: "Alex", age: 34 },
//  { name: "Jack", age: 26 },
//  { name: "Nick", age: 47 },
//  { name: "Nick", age: 10 },
//  { name: "Nick", age: 55 },
//];

//const arrOfObjectsMore30 = arrOfObjects.filter((item) => item.age > 30);
//console.log(arrOfObjectsMore30);

// Task 13 -------------------

//const arrOfStrings = [
//  "as",
//  "JavaScript dddsssaa",
//  "asdad",
//  "fffrfefasd JavaScript",
//  "fff",
//];

//const arrOfStrings2 = arrOfStrings.map((item) => (item = "Hello " + item));
//console.log(arrOfStrings2);

// Task 14 -------------------

//const arrOfNumbers = [1, 10, -31, 20, 33, 4];

//console.log(arrOfNumbers.some((item) => item < 10));

// Task 15 -------------------

//const arrOfObjects = [
//  { name: "Breu", age: 11 },
//  { name: "Alex", age: 34 },
//  { name: "Jack", age: 26 },
//  { name: "Martin", age: 47 },
//  { name: "Stiv", age: 10 },
//  { name: "Bob", age: 55 },
//];

//arrOfObjects.sort((a, b) => (a.name > b.name ? 1 : -1));
//console.log(arrOfObjects);

// Task 16 -------------------

//const arrOfStrings = [
//  "as",
//  "JavaScript dddsssaa",
//  "asdad",
//  "fffrfefasd JavaScript",
//  "fff",
//];

//const totalLength = arrOfStrings.reduce((acc, item) => acc + item.length, 0);
//console.log(totalLength);

// Task 17 -------------------

//const arrOfNumbers = [1, 10, -31, 60, 33, 54];

//const arrOfNumbersMore50 = arrOfNumbers.filter((item) => item >= 50);
//console.log(arrOfNumbersMore50);

// Task 18 -------------------

//const arrOfObjects = [
//  { name: "Breu", age: 11 },
//  { name: "Alex", age: 34 },
//  { name: "Jack", age: 26 },
//  { name: "Martin", age: 47 },
//  { name: "Stiv", age: 10 },
//  { name: "Bob", age: 55 },
//];

//console.log(arrOfObjects.some((item) => item.age > 50));

// Task 2_2

const summElementsWorker = function (...items) {
  if (items.length === 0) {
    return 0;
  } else {
    return items.reduce((acc, item) => acc + item, 0);
  }
};
summElementsWorker(1, 2, 3, 4, 5);

const differenceMaxMinWorker = function (...items) {
  if (items.length === 0) {
    return 0;
  } else {
    //const minValue = items.sort((a, b) => (a < b ? 1 : -1)).slice(-1)[0];
    const minValue = Math.min.apply(null, items);
    //const maxValue = items.sort((a, b) => (a > b ? 1 : -1)).slice(-1)[0];
    const maxValue = Math.max.apply(null, items);
    return maxValue - minValue;
  }
};

differenceMaxMinWorker(4, 5, 6, 3, 1, 10);

const differenceEvenOddWorker = function (...items) {
  if (items.length === 0) {
    return 0;
  } else {
    let sumEvenElement = 0;
    let sumOddElement = 0;
    items.forEach((item) => {
      item % 2 === 0 ? (sumEvenElement += 1) : (sumOddElement += 1);
    });
    return sumEvenElement - sumOddElement;
  }
};

differenceEvenOddWorker(1, 2, 44, 6, 4, 5);

const averageEvenElementsWorker = function (...items) {
  if (items.length === 0) {
    return 0;
  } else {
    let sumEvenElement = 0;
    let countEvenElement = 0;
    items.forEach((item) => {
      if (item % 2 === 0) {
        sumEvenElement += item;
        countEvenElement += 1;
      }
    });
    return sumEvenElement / countEvenElement;
  }
};
averageEvenElementsWorker();
//averageEvenElementsWorker(1, 3, 4, 6, 9, 10, 2, 3);

const makeWork = function (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  arrOfArr.forEach((arr) => {
    const resultValue = func(...arr);
    resultValue > maxWorkerResult
      ? (maxWorkerResult = resultValue)
      : maxWorkerResult;
  });
  console.log(maxWorkerResult);
};

makeWork(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 1, 2],
    [44, 22, 11],
  ],
  summElementsWorker
);

// Task Formater numbers -----------------------
const parseCount = function (value) {
  if (Number.parseFloat(value)) {
    return value;
  } else {
    console.log("Невалидное значение");
  }
};
