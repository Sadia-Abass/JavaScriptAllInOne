// Creating the Arrays in JavaScript

// Using array literal notation
const colors = ["red", "green", "blus"];
const myArrayLN = ["eggs", "becon", "toast"];

// Using the Array constructor - Array()
const myArrayConstructor = new Array("January", "February", "March");

// Using the split function
let customerData = "Barb Seibert, 3789 Sheila Lane, Goldfield, NV, 89013";
const customerDataArray = customerData.split(",");

// Accessing Array Elements
const myArray = [43, 299, 34];
myArray[1];

// using the length property
const myArray2 = [3434, 56, 2];
let sum = 0;
for (let i = 0; i < myArray2.length - 1; i++) {
  sum += myArray2[i];
}

console.log(`The sum is ${sum}`);

// Array Methods
const ingredients = [
  "eggs",
  "milk",
  "cheese",
  "garlic",
  "onion",
  "kale",
  "salt",
  "pepper",
];

// Using pop() method
let removedElement = ingredients.pop();
console.log("Using pop() method");
console.log(removedElement);
console.log(ingredients);

// Using push() method
let addedElement = ingredients.push("chilli flakes");
console.log("Using push() method");
console.log(addedElement);
console.log(ingredients);

// Using shift() method
let shiftElement = ingredients.shift();
console.log("Using shift() method");
console.log(shiftElement);
console.log(ingredients);

// Using unshift() method
let unshiftElement = ingredients.unshift("eggs");
console.log("Using unshift() method");
console.log(unshiftElement);
console.log(ingredients);

// Using slice() method
let sliceElement = ingredients.slice(3, 6);
console.log("Using slice() method");
console.log(sliceElement);
console.log(ingredients);

// Using splice() method
let spliceElement = ingredients.splice(3, 3);
console.log("Using splice() method");
console.log(spliceElement);
console.log(ingredients);

// Using reduce() method
let prices = [4.99, 3, 98, 54, 54.99];
let total = 0;
total = prices.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
});
console.log("Using reduce() method");
console.log(total);

// simplier way to write the callback function in the reduce() method
let total2 = prices.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
}, 0);

// Using arrow function
let total3 = prices.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);

// Using filter() method
const animalNames = [
  "aardvark",
  "alligator",
  "alpaca",
  "bear",
  "beaver",
  "cat",
  "dog",
  "elephant",
];
const animalsStartingWithA = animalNames.filter((animal) =>
  animal.startsWith("a")
);
console.log(animalsStartingWithA);

// Destructing Arrays
const person = ["Russell c. Guy", "337 Twin House Lane", "Neosho", "Mo"];
let personName = person[0];
let address = person[1];
let city = person[2];
let state = person[3];

// Simplier way to write distructuring arrays
let [personName2, address2, city2, state2] = person;

// Spreading Arrays - Shallow copy
const firstArray = ["a", "b", "c"];
const secondArray = [...firstArray, "d"];
console.log(secondArray);
console.log(firstArray);

const fruits = ["apple", "orange", "banana"];
const fruitsCopy = fruits;
fruitsCopy.push("watermelon");
console.log(fruitsCopy);
console.log(fruits);

const fruitsShallowCopy = [...fruits];
