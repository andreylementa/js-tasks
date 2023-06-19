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

const arrOfStrings = [
  "asdasdasd",
  "JavaScript dddsssaa",
  "asdasdasd",
  "fffrfefasd JavaScript",
];

const firstJs = arrOfStrings.find((item) => item.includes("JavaScript"));
console.log(firstJs);
