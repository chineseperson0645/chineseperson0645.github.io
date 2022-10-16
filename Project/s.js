// Project
// Michael Gao
// 10/3/22


//TO DO LIST
//1. Collision Detection (And stop the round once hit)
//2. Start(and End) Menu and Mode Selector
//3. Score Counter
//4. 

//----------------------------------------------------------------------------------------------------// 

//Global Variables

//----------------------------------------------------------------------------------------------------// 



//Collision Detection
let hit = false;
let circleAlive = true;

//Random Walls Generation Controls (Karar helped me)

let generate = true;
let someTime = 300;
let x3 = 480;
let y3 = 480;
let wallHeight = 480;
let wallWidth = 10;

//Width and Height of Canvas (Eason helped me)
let widthOfCanvas = 1010;
let heightOfCanvas = 500; 

//WASD//
let x2 = 505;
let y2 = 500;
let dx2 = 3;
let dy2 = 2;
let circleSize = 30
let circleSpeed = 10;

//Image
let nightImage;

function preload() {
  nightImage = loadImage("night.png");

}

//----------------------------------------------------------------------------------------------------// 

//Draw Loop

//----------------------------------------------------------------------------------------------------// 



function setup() {
  createCanvas(widthOfCanvas, heightOfCanvas); //Eason helped me.
}

function draw() {
  
  //Backround
  background(255);

  image(nightImage, 0, 0, widthOfCanvas, heightOfCanvas);

  //Wall Gen
  drawWalls();
  
  //Random Wall Gen
  generateWall();

  //WASD
  drawCircle();
  dontGoBeyondEdge();

  frameRate(60);

  circle(1051, 136, 50);
}

function mousePressed() {
  console.log(mouseX, mouseY);
}

//----------------------------------------------------------------------------------------------------// 

//Generates Walls

//----------------------------------------------------------------------------------------------------//

function drawWalls(){
fill("Black")
  rect (0, 0, 20, heightOfCanvas)
  rect (0, 0, widthOfCanvas, 20)
  rect (0, 480, widthOfCanvas, 30)
  rect (990, 0, 20, heightOfCanvas)

  //Diving Line
  rect (500, 0, 10, heightOfCanvas)
}


//----------------------------------------------------------------------------------------------------// 

//Random Wall Generation (Based on Millis Demo w/Karar's Help)

//----------------------------------------------------------------------------------------------------// 

// function whatMode() {
//   if //person clicks easy

// }


function generateWall() {

//Modes
//random(x, ) = Minimum Value that is Added (Shortest Time Burst).
//random ( , y) = Maximum Value that is Added (Longest Time Burst).
let easy = random(400, 700); 
let medium = random(250, 500);
let hard = random(100, 250);

  //someTime = 300 (Currently)

  let r = random(widthOfCanvas/2 - 10)
  let ms = millis();

if (ms >= someTime) { // 0 > 500
  generate = !generate;
  someTime = someTime + hard; //Put whatMode here
}

//Think of Generation not like something that happens in order nessarily
//Rather a gate that is open, and closed.

if (generate){ 
  fill("white");
  rect(r, 0, 20, 490)
  x3 = random(1, widthOfCanvas);
  y3 = random(1, heightOfCanvas);
  generate = !generate
}

//if (x3 && y3 = x4 && y4) 
//sometime = !sometime (or something)

//Rain Game.
//Random Generator for where the protected roof generates.
//If wall >= roof. 
}

//----------------------------------------------------------------------------------------------------// 

//WASD Controls 

//----------------------------------------------------------------------------------------------------// 

function deadOrAlive(){
hit = collideRectCircle(200, 200, 100, 150, mouseX, mouseY, 100);
if (hit = true)
circleAlive = !circleAlive

}

// function deadScreen(){
//   if (circleAlive === false)
// }

function drawCircle() {
//Draws circle
if (circleAlive)
    fill("yellow");
    noStroke();
    circle(x2, y2, circleSize);
    handleKeys()
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

// walls = [[100, 150, 100, 200]]
// line (100, 150, 100, 200)

// walls[0][0]
// walls[0][1]


//----------------------------------------------------------------------------------------------------// 

//Notes

//----------------------------------------------------------------------------------------------------//



//implement part of the swords game on by the collision library guy

// if the coridinate of charcter = to any coridinate of the collided item (i.e a wall or block)
// if x = x2
// neg

//Maybe make a thin layer of a color around the border. Then do something like if red touching green or something. Send them back a step to create a border.

//Color Scheme Idea From
//https://editor.p5js.org/mbardin/sketches/oNoGbSiHm
//By "mbardin"

//https://p5js.org/reference/