// Functions

// Passing by value
const favoriteFood = "tacos";
makeDinner(favoriteFood);

function makeDinner(whatToMake) {
  console.log(`I see you want ${whatToMake}`);
  whatToMake = "salad";
  console.log(`I have decided to make ${whatToMake} instead.`);
}

// Passing an object to a function
const user = { username: "funguy37", password: "123456" };
const loginStatus = login(user);
console.log(loginStatus);
console.warn(`The password is now ${user.password}`);

function login(userCredentials) {
  if (userCredentials.password === "123456") {
    let randomString = Math.random().toString(36).slice(-16);
    userCredentials.password = randomString;
    return `Terrible password. Your password has been reset to a random string.`;
  }
  return "Logged In";
}

// Creating a numbered list from any number of arguments
function makeNumberList() {
  let numberedList = "<ol>";
  for (let i = 0; i < arguments.length; i++) {
    numberedList += `<li>${arguments[i]}</li>`;
  }
  numberedList += `</ol>`;
  return numberedList;
}

// Using a callback function
function greetSpanish(name) {
  return `Hola, ${name}`;
}

function getUserName(callback) {
  let firstName = prompt("Enter you first name");
  return callback(firstName);
}

getUserName(greetSpanish);

// A function that takes an array
function makeUnorderedList(array = []) {
  let listItems = array.map(function (element) {
    return `<li>${element}</li>`;
  });
  return `<ul>${listItems.join("")}</ul>`;
}
