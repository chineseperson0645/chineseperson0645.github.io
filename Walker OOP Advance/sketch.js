// WALKER OOP
//Inscatchiate = calling the constructor (creating another class). Copying in a sense

class Walker {
  constructor(x, y) {
    this.x = x; //Insanciating
    this.y = y; //Insanciating
    this.color = "red"; //Insanciating
    this.speed = 5; //Insanciating
    this.radius = 5;
  }
//Everything you do in here (the squiggly brackets),
//is assumed to be a function so you don't 
//Need to call function in a sense
  display(){
    stroke(this.color);
    fill(this.color);
    circle(this.x, this.y, this.radius*2); //Easier to detect with math to call raidus
  }
  move(){
    let choice = random(100);

    if (choice < 25) {
      //up
      this.y -= this.speed;
    }

    else if (choice < 50){
      //down
      this.y += this.speed;
    }
    else if (choice < 75){
      //right
      this.x += this.speed;
    }
    else {
      //left
      this.x -= this.speed;
    }
  }
}

let walkerArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnWalker();
}

function draw() {
  //Don't want bacckground so we see a trail (so it doesn't keep draw over it)
  for (let i = 0; i < walkerArray.length; i++){
    walkerArray[i].move();
    walkerArray[i].display();  
  }
}

function spawnWalker(){
  let michael = new Walker(random(width), random(height));
  let someColor = color(random(255), random(255), random(255));
  michael.color = someColor;
  walkerArray.push(michael);
}

function keyPressed(){
  spawnWalker();
}
//Possbily if a button pressed. Make new Walker
