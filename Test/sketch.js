// Do not edit the code between these comments. 
// You should only edit the class Particle below.
// -----------------------------------------------
let fireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");

  for (let i=fireworks.length-1; i>=0; i--) {
    fireworks[i].update();
    fireworks[i].display();
  }
  for (let i = 0; i < fireworks.length; i++){
    if (this.isDead){
      fireworks.splice(i, 1);
    }  
  }
}

function mousePressed() {
  for (let i=0; i<100; i++) {
    let someParticle = new Particle(mouseX, mouseY);
    fireworks.push(someParticle);
  }
}

// -----------------------------------------------

class Particle {
  constructor(x, y){
    this.x = x; 
    this.y = y;
    this.dx = random(5, -5);
    this.dy = random(5, -5);
    this.size = 10;
    this.alpha = 200;
  }
  update(){
    this.alpha--;
    this.x += this.dx;
    this.y += this.dy;
    this.color = color(255, 0, 0, this.alpha);
   }
  display(){
    fill(this.color);
    circle(this.x, this.y, this.size);
  }
  isDead(){
    return alpha <= 0;
  }
}

