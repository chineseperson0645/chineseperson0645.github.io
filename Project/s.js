// Project
// Michael Gao
// 10/3/22

//----------------------------------------------------------------------------------------------------// 

//Global Variables

//----------------------------------------------------------------------------------------------------// 

//Random Walls Generation Controls (Karar helped me)

let generate = true;
let someTime = 1000;
let x3 = 480;
let y3 = 480;
let wallHeight = 480;
let wallWidth = 10;

//Width and Height of Canvas (Eason helped me)
let widthOfCanvas = 800;
let heightOfCanvas = 500; 

//WASD//
let x2 = 200;
let y2 = 200;
let dx2 = 3;
let dy2 = 2;
let circleSize = 15
let circleSpeed = 20;



//----------------------------------------------------------------------------------------------------// 

//Draw Loop

//----------------------------------------------------------------------------------------------------// 



function setup() {
  createCanvas(widthOfCanvas, heightOfCanvas); //Eason helped me.
  squareColor = color(255, 0, 0);
}

function draw() {
  
  //Backround
  background(220);

  //WASD
  handleKeys();
  drawCircle();
  dontGoBeyondEdge();

  //Wall Gen
  generateWall();

  frameRate(5);
}



//----------------------------------------------------------------------------------------------------// 

//Random Wall Generation (Based on Millis Demo w/Karar's Help)

//----------------------------------------------------------------------------------------------------// 



function generateWall() {
  let r = random(10, 20)
  let r2 = random(100, 480)
  let r3 = random(widthOfCanvas)

if (millis() > someTime) {
  generate = !generate;
  someTime = millis() + 0; 
}
  
if (generate){
  fill("green");
  rect(r3, 0, r, r2)
  x3 = random(1, widthOfCanvas);
  y3 = random(1, heightOfCanvas);
}
  
// else {
//   ellipse("white");
//   }
}

//----------------------------------------------------------------------------------------------------// 

//WASD Controls 

//----------------------------------------------------------------------------------------------------// 



function drawCircle() {
//Draws circle

    fill("red");
    noStroke();
    circle(x2, y2, circleSize);
  }
  
  function handleKeys() {
  //Controls WASD

    if (keyIsDown(87)) { //w
      y2 -= circleSpeed;
    }
      if (keyIsDown(83)) { //s
      y2 += circleSpeed;
    }
      if (keyIsDown(68)) { //d
      x2 += circleSpeed;
    }
      if (keyIsDown(65)) { //a
      x2 -= circleSpeed;
    }
}



//----------------------------------------------------------------------------------------------------// 

//Collisions

//----------------------------------------------------------------------------------------------------// 


function dontGoBeyondEdge(){ 
//Stops it from getting caught in wall

  //If the x value of our circle is GREATER than the width of the canvas negative the circle size
  //The x value of our circle will equal the with negative the circle size.

  if (x2 > width - circleSize){
    x2 = width - circleSize;
  }

  if (x2 < circleSize) {
    x2 = circleSize;

  }
  if (y2 > height - circleSize){
    y2 = height - circleSize;

  }
  if (y2 < circleSize){
    y2 = circleSize; 

 }
}

function collideWithWall(){
//Stops it from going past certain color ***(NOT COMPLETE)***
  if (state === true){
  x2 = width - circleSize;
}
  else {
  y2 = height - circleSize;
  }
}

walls = [[100, 150, 100, 200]]
line (100, 150, 100, 200)

walls[0][0]
walls[0][1]


//----------------------------------------------------------------------------------------------------// 

//Notes

//----------------------------------------------------------------------------------------------------//



//implement part of the swords game on by the collision library guy

// if the coridinate of charcter = to any coridinate of the collided item (i.e a wall or block)
// if x = x2
// neg

//Maybe make a thin layer of a color around the border. Then do something like if red touching green or something. Send them back a step to create a border.