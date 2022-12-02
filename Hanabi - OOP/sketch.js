// Hanabi

//dx = direction x
//dy = direction y
//if inside a class you have to reffer to x as this.x or else it's not defined.

class Particle {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.alpha = 255;
    this.diameter = 10;
  }
  updater(){ //because it's moving and making it disappear, we call it updater instead of move
    this.x += this.dx;
    this.y += this.dy;
    this.alpha--; //slowly descreases the alpha (it's visiblity) so it fades
    this.color = color(this.r, this.g, this.b, this.alpha);
  }
  
  display(){
    fill(this.color);
    stroke(this.color);
    circle(this.x, this.y, this.diameter);
  }

  isDead(){ //Make cleaner to track if alpha value is 0 or less than
    return this.alpha <= 0;
  }
}

let theFireworks = [];

function mousePressed(){
  for (let i = 0; i < 100; i++){
    let someParticle = new Particle(mouseX, mouseY); //Passes in where it generates
    theFireworks.push(someParticle);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  for (let i = 0; i < theFireworks.length; i++){ 
    theFireworks[i].updater(); //Updates it while in array (after being pushed)
    if (theFireworks[i].isDead()){
      //remove from array
      //.splice(a, b), a = Kill location start, b = how many do you want to kill
      theFireworks.splice(i, 1); //.splice pulls out (kill off) value from array
    }
    theFireworks[i].display();
  }
}

//Rememeber That once you kill off one person in the array.
//The person in front will then turn into the dead person's number

//  # | person
//  ----------
//  1 | p1
//  2 | p2
//  3 | p3
//  4 | p4
//  5 | p5