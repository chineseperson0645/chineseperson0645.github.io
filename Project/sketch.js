// Project
// Michael Gao
// 10/3/22

//----------------------------------------------------------------------------------------------------// 

//Global Variables

//----------------------------------------------------------------------------------------------------// 

//Blocks//
let x = 0;
let y = 0;
let dx = 3;
let dy = 2;
let squareSize = 50;
let squareColor;

//WASD//
let x2 = 200;
let y2 = 200;
let dx2 = 3;
let dy2 = 2;
let circleSize = 14
let circleSpeed = 5;


//----------------------------------------------------------------------------------------------------// 

//Draw Loop

//----------------------------------------------------------------------------------------------------// 


function setup() {
  createCanvas(500, 500);
  squareColor = color(255, 0, 0);
}

function draw() {
  background(220);
  drawSquare();
  moveSquare();
  bounceIfNeeded();
  handleKeys()
  drawCircle()
  dontGoBeyondEdge()
}

//----------------------------------------------------------------------------------------------------// 

//Code

//----------------------------------------------------------------------------------------------------// 


function mouseWheel(event) {
  // console.log(event.delta);
  if (event.delta < 0) {
    //sanity check for max size
    if (squareSize < height * 0.75 &&
        squareSize < width * 0.75) {
      squareSize += 5;
    }
  }
  else {
    //sanity check for min size
    if (squareSize > 10) {
      squareSize -= 5;
    }
  }
}

function mousePressed() {
  dx = random(-5, 5);
  dy = random(-5, 5);
}

function drawSquare() {
  fill(squareColor);
  square(x, y, squareSize);
}

function moveSquare() {
  x += dx;
  y += dy;
}

function bounceIfNeeded() {
  //bounce off right wall
  if (x >= width - squareSize) {
    dx *= -1;
    //don't get caught on wall
    x = width - squareSize - 1; 
    changeSquareColor();
  }
  //bounce off left wall
  else if (x <= 0) {
    dx *= -1;
    //don't get caught on wall
    x = 1; 
    changeSquareColor();
  }
  //bounce off bottom wall
  if (y >= height - squareSize) {
    dy *= -1;
    //don't get caught on wall
    y = height - squareSize - 1; 
    changeSquareColor();
  }
  //bounce off top wall
  if (y <= 0) {
    dy *= -1;
    //don't get caught on wall
    y = 1; 
    changeSquareColor();
  }
}

function changeSquareColor() {
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  squareColor = color(r, g, b);
}

//----------------------------------------------------------------------------------------------------// 

//WASD Controls 

//----------------------------------------------------------------------------------------------------// 


function drawCircle() {
    fill("red");
    noStroke();
    circle(x2, y2, circleSize);
  }
  
  function handleKeys() {

  //if (y2 >= 0 || y2 <= windowHeight){

    if (keyIsDown(87) && y2 >= 0) { //w
      y2 -= circleSpeed;
    }
      if (keyIsDown(83) && y2 <= height) { //s
      y2 += circleSpeed;
    }
      if (keyIsDown(68) && x2 >= 0) { //d
      x2 += circleSpeed;
    }
      if (keyIsDown(65) && x2 <= width) { //a
      x2 -= circleSpeed;
    }
}

  
function dontGoBeyondEdge(){
  if (x2 >= width - squareSize){
    (x2 - width && x2 - height);
  }

  else if (x2 <= 0) {

  }
  else if (y2 >= height - squareSize){

  }
 else if (y2 <= 0){

 }
}

// if the coridinate of charcter = to any coridinate of the collided item (i.e a wall or block)
// if x = x2
// neg 

