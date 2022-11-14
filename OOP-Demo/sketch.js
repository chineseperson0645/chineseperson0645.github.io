// OOP Into
// 11/14/2022

//constructor is called everytime "new" is called

class Dog { //One execption where you wanna captialize
  constructor(name) {
    this.name = name; //For this instance, I want the name of this dog to be "name"
    this.age = 0; //Something . something is a class variable

  }
  bark() {
    console.log("woof! says " + this.name);
  }
}

let myDog = new Dog("amongus"); //constructor is called everytime "new" is called
let yourDog = new Dog("child"); //constructor is called everytime "new" is called

//SETUP ONLY CALLS IT ONCE!
function setup() {
  createCanvas(windowWidth, windowHeight);
  myDog.bark(); //Only DOES THIS ONCE! SETUP ONLY CALLS IT ONCE!
}

function draw() {
  background(220);
}
