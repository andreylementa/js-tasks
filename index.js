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

const arrOfStrings = [
  "as",
  "JavaScript dddsssaa",
  "asdad",
  "fffrfefasd JavaScript",
  "fff",
];

const arrOfStrings2 = arrOfStrings.map((item) => (item = "Hello " + item));
console.log(arrOfStrings2);
