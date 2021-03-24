import emojipedia from "./emojipedia.js";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const doubles = numbers.map(function (x) {
  return x * 2;
});
console.log(doubles);

//Filter - Create a new array by keeping the items that return true.
const great = numbers.filter(function (num) {
  return num > 10;
});
console.log(great);

//Reduce - Accumulate a value by doing something to each item in an array.
const newNumber = numbers.reduce(function (accumulator, currentNumber) {
  return (accumulator += currentNumber);
});
console.log(newNumber);

//Find - find the first item that matches from an array.
const n = numbers.find(function (num) {
  return num > 10;
});
console.log(n);

//FindIndex - find the index of the first item that matches.
const i = numbers.findIndex(function (num) {
  return num > 10;
});
console.log(i);

const res = emojipedia.map(function (x) {
  return x.meaning.slice(1, 100);
});

console.log(res);
