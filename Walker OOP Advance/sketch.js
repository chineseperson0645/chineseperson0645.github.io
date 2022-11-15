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

let michael; 
let katherine;

function setup() {
  createCanvas(windowWidth, windowHeight);
  michael = new Walker(width/2, height/2);
  katherine = new Walker(200, 300);
  katherine.color = "black";
  amogus = new Walker(1600, 800)
  amogus.color = "green"
}

function draw() {
//Don't want bacckground so we see a trail (so it doesn't keep draw over it)
  michael.move();
  katherine.move();
  amogus.move();

  katherine.display();
  michael.display();  
  amogus.display();
}

//Possbily if a button pressed. Make new Walker
