// Project Title

class Bullet {
  constructor(theImage){
    this.x = 200;
    this.y = 500;
    this.dx = 5;
    this.radius = 3;
    this.image = theImage;
  }
  display(){
    image(this.image, this.x, this.y)
    // fill("black");
    // circle(this.x, this.y, this.radius*2);
  }
  move(){
    this.x += this.dx;
  }

  isDead(){
    return this.x >= width; //if we're off the screen, we're dead.
  }
}

let bulletArray = [];
let someBullet = new Bullet();

function bulletImg(){
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  //This loop is good for basic iterations, but no index (no i value) means it's basic.
  for (let someBullet of bulletArray){ //For every 
    someBullet.move();
    someBullet.display();
  }
  //delete dead bullets
  for (let i = bulletArray.length-1; i >= 0; 1--){
    if (bulletArray[i].isDead()){
      bulletArray.splice(i, 1);
    }
  }
}

function keyPressed(){
  let someBullet = new Bullet(bulletImg);
  bulletArray.push(someBullet);
}
//Loaded image in setup. Passed in