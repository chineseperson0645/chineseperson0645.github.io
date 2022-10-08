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
let rectSize = 200
let squareColor;

//Width and Height of Canvas 
let widthOfCanvas = 500; //Eason helped me.
let heightOfCanvas = 500; //Eason helped me.

//WASD//
let x2 = 200;
let y2 = 200;
let dx2 = 3;
let dy2 = 2;
let circleSize = 50
let circleSpeed = 10;


//----------------------------------------------------------------------------------------------------// 

//Draw Loop

//----------------------------------------------------------------------------------------------------// 


function setup() {
  createCanvas(widthOfCanvas, heightOfCanvas); //Eason helped me.
  squareColor = color(255, 0, 0);
}

function draw() {
  background(220);
  drawSquare();
  drawRectangles();
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

function drawRectangles(){
  fill("green");
  rect(0, 0, 500, 10);
  rect(0, 0, 10, 500);
  rect(0, 490, 500, 10);
  rect(490, 0, 10, 500);

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
  }
  //bounce off left wall
  else if (x <= 0) {
    dx *= -1;
    //don't get caught on wall
    x = 1; 
  }
  //bounce off bottom wall
  if (y >= height - squareSize) {
    dy *= -1;
    //don't get caught on wall
    y = height - squareSize - 1; 
  }
  //bounce off top wall
  if (y <= 0) {
    dy *= -1;
    //don't get caught on wall
    y = 1; 
  }
}

// function changeSquareColor() {
//   let r = random(0, 255);
//   let g = random(0, 255);
//   let b = random(0, 255);
//   squareColor = color(r, g, b);
// }

//----------------------------------------------------------------------------------------------------// 

//WASD Controls 

//----------------------------------------------------------------------------------------------------// 


function drawCircle() {
    fill("red");
    noStroke();
    circle(x2, y2, circleSize);
  }
  
  function handleKeys() {

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

  
function dontGoBeyondEdge(){ //Stops it from getting caught in wall

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


// if the coridinate of charcter = to any coridinate of the collided item (i.e a wall or block)
// if x = x2
// neg

//Maybe make a thin layer of a color around the border. Then do something like if red touching green or something. Send them back a step to create a border.