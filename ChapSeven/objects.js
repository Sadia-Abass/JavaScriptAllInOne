// Ways to create JavaScript Objects

// Using constructor function
function Cat(name, type) {
  this.name = name;
  this.type = type;
}

const ourCat = new Cat("Murray", "domestic short hair");

// Using a Class
class Pet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

const ourDog = new Pet("Chauncey", "AmStaff");

// Creating an object using Object.class()
const computer = { memory: "16GB", HD: "8TB" };
const laptop = Object.create(computer);

// A object with nested properties
const myLocation = {
  city: {
    id: 2643743,
    name: "London",
    coord: {
      lon: -0.1258,
      lat: 51.5085,
    },
    country: "GB",
    population: 9820000,
    timezone: 3600,
  },
};

// Printing out the properties of an object
for (const property in document) {
  console.log(`${property}: ${document[property]}`);
}
