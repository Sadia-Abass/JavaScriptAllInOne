function Vehicle(speed) {
  this.speed = speed;
  this.moveFoward = function () {
    return `Moving forward at ${this.speed}`;
  };
}

const Automobile = new Vehicle(55);
Automobile.wheels = 4;
Automobile.engine = "electric";
Automobile.doors = 4;
const Truck = Object.create(Automobile);
Truck.doors = 2;
Truck.maxHaul = "1 ton";
delete Truck.doors;
