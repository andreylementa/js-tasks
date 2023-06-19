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

const arrOfNumbers = [1, 10, -31, 20, 33, 4];

console.log(arrOfNumbers.every((item) => item >= 0));
