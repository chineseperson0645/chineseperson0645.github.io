// Project
// Michael Gao
// 10/3/22

//----------------------------------------------------------------------------------------------------//

//TO DO LIST
//3. Score Counter

//CURRENTLY ON
//Score Counter. 

//QUESIONS
//How to load a JS file for end and start screen.

//METHODS
//1. Easy Way. Make a bunch of walls (hardcoded) and call them randomly. Then set collision for 
//those walls <---------THIS ONE.

//2. Harder Way. Make an array for only the X of walls. Set wallX for the collisions x value. (Maybe possible?)

//----------------------------------------------------------------------------------------------------// 

//Global Variables

//----------------------------------------------------------------------------------------------------// 



//Start Screen/End Screen (Based off Demo)
let state = "start"

//Collision Detection (Based off Demo)
let hit = false;
let circleAlive = true;
let r; //Eason helped me
let hitboxOn = false;

//Circle Generation (Karar still techincally helped me)
let generate = true;
let someTime = 300;
let wallHeight = 480;
let wallWidth = 10;

//Width and Height of Canvas (Eason helped me)
let widthOfCanvas = 1010;
let heightOfCanvas = 500; 

//WASD (Based off Demo)
let x2 = 1000;
let y2 = 250;
let dx2 = 3;
let dy2 = 2;
let circleSize = 10
let circleSpeed = 5;

//Image (Based off Demo)
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
  
  frameRate(60)
  //Backround
  background(255);

  //BG Image
  image(nightImage, 0, 0, widthOfCanvas, heightOfCanvas);
  
  //Buttun Starter
  starter();

  //Wall Gen
  drawStartBack();

  //Random Wall Gen
  generateWall();

  //WASD
  deadOrAlive();
  drawCircle();
  dontGoBeyondEdge();

  //States for Start/End Screens
  if (state === "start") {
    startScreen();
  }
  if (state === "end") {
    endScreen();
  }

  //Cord Checker
  circle(1051, 136, 50);
}


//Cord Checker
function mousePressed() {
  console.log(mouseX, mouseY);
}



//----------------------------------------------------------------------------------------------------// 

//Start and End Screens

//----------------------------------------------------------------------------------------------------//


//Changes from start screen to main screen after "Start" pressed
function starter() {
  if (state === "start" && hit) {
    state = "main";
  } 
}

function startScreen() {
  if (mouseIsPressed){
    hit = collidePointRect(mouseX, mouseY, 450, 230, 100, 20);
  }
  if (hit) {
    fill("white");
  }
  rect(0, 0, widthOfCanvas, heightOfCanvas);
  fill("blue");
  textSize(50);
  text("Start!", 450, 250);
}

function endScreen() {
  if (mouseIsPressed){
    hit = collidePointRect(mouseX, mouseY, 460, 220, 400, 40);

  }
  if (hit) {
    fill("white");
    state = "main"
  }
  rect(0, 0, widthOfCanvas, heightOfCanvas);
  fill("blue");
  textSize(50);
  text("Want to die again?", 450, 250);

//Resets the Ball so it doesn't keep getting hit.
  x2 = 1000
  y2 = 250
  circleAlive = true
}



//----------------------------------------------------------------------------------------------------// 

//Generates Walls

//----------------------------------------------------------------------------------------------------//



function drawStartBack(){
fill("Black")
  rect (0, 0, 20, heightOfCanvas)
  rect (0, 0, widthOfCanvas, 20)
}



//----------------------------------------------------------------------------------------------------// 

//Circle Generation

//----------------------------------------------------------------------------------------------------// 

function generateWall() {
  if (state === "main"){

if (generate){ 
  hitboxOn = true
  fill("blue");
  rect(0, 0, 20, 500)
  fill("white");
  circle(250, 250, 40)
  circle(100, 300, 60)
  circle(600, 230, 40)
  circle(650, 400, 50)
  circle(450, 200, 30)
  circle(323, 123, 132)
  circle(234, 427, 67)
  circle(898, 67, 76)
  circle(128, 58, 45)
  circle(567, 373, 89)
  circle(920, 300, 98)
  circle(78, 432, 56)
  circle(670, 156, 78)
  circle(400, 355, 98)
    }
  }
}



//----------------------------------------------------------------------------------------------------// 

//Collisions

//----------------------------------------------------------------------------------------------------// 



function deadOrAlive(){
  if (state === "main" && hitboxOn){
    //Collision Hitboxes
    hit = collideRectCircle(0, 0, 20, 500, x2, y2, circleSize);
    hit1 = collideCircleCircle(250, 250, 40, x2, y2, circleSize);
    hit2 = collideCircleCircle(100, 300, 60, x2, y2, circleSize);
    hit3 = collideCircleCircle(600, 230, 40, x2, y2, circleSize);
    hit4 = collideCircleCircle(650, 400, 50, x2, y2, circleSize);
    hit5 = collideCircleCircle(450, 200, 30, x2, y2, circleSize);
    hit6 = collideCircleCircle(323, 123, 132, x2, y2, circleSize);
    hit7 = collideCircleCircle(234, 427, 67, x2, y2, circleSize);
    hit8 = collideCircleCircle(898, 67, 76, x2, y2, circleSize);
    hit9 = collideCircleCircle(128, 58, 45, x2, y2, circleSize);
    hit10 = collideCircleCircle(567, 373, 89, x2, y2, circleSize);
    hit11 = collideCircleCircle(920, 300, 98, x2, y2, circleSize);
    hit12 = collideCircleCircle(78, 432, 56, x2, y2, circleSize);
    hit13 = collideCircleCircle(670, 156, 78, x2, y2, circleSize);
    hit14 = collideCircleCircle(400, 355, 98, x2, y2, circleSize);
    hit15 = collideCircleCircle(250, 250, 40, x2, y2, circleSize);

  if (hit || hit2 || hit3 || hit4 || hit5 || hit6 || hit7 || hit8 || hit9 || hit10 || hit11 || hit12 || hit13 || hit14 || hit15 === true){
    circleAlive = !circleAlive
    state = "end"
    console.log("Good!") //Checks if working
    }
  }
}


//----------------------------------------------------------------------------------------------------// 

//WASD Controls

//----------------------------------------------------------------------------------------------------//



function drawCircle() {
//Draws circle
if (circleAlive && state === "main"){
    fill("yellow");
    circle(x2, y2, circleSize);
    noStroke();
    handleKeys();
  }
}

  function handleKeys() {
  //Controls WASD
  if (circleAlive && state === "main"){
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
} 



//----------------------------------------------------------------------------------------------------// 

//Don't go beyond certain cord!

//----------------------------------------------------------------------------------------------------// 


function dontGoBeyondEdge(){ 
//Stops it from getting caught in wall. 

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


//If the x value of our circle is GREATER than the width of the canvas negative the circle size
//The x value of our circle will equal the with negative the circle size.



//----------------------------------------------------------------------------------------------------// 

//Notes / Credits / Doodles / Abandoned Ideas

//----------------------------------------------------------------------------------------------------//



//---NOTES---//

//implement part of the swords game on by the collision library guy

// if the coridinate of charcter = to any coridinate of the collided item (i.e a wall or block)
// if x = x2
// neg

//Maybe make a thin layer of a color around the border. Then do something like if red touching green or something. Send them back a step to create a border.



//---CREDITS---//

//Color Scheme Idea From
//https://editor.p5js.org/mbardin/sketches/oNoGbSiHm
//By "mbardin"

//P5JS References
//https://p5js.org/reference/



//---DOODLES---//

// walls = [[100, 150, 100, 200]]
// line (100, 150, 100, 200)

// walls[0][0]
// walls[0][1]

// if (generate){ 
//   //Possibly add a && ifNotTouchingRed or something function.
//   fill("green");
//   rect(r3, 0, r, r2)
//   x3 = random(1, widthOfCanvas);
//   y3 = random(1, heightOfCanvas);
//   }
// }

// function moveWall(){ //I think Karar helped
//  x3 += 0.01;
// }



//---ABANDONED IDEAS---//

//Random Wall Generation (Based on Millis Demo w/Karar's Help) ***ABANDONED

//Random Walls Generation Controls (Karar helped me) ***ABANDONED
//let rectX = [20, 50, 80, 100, 120, 160, 170, 195, 210, 300, 312, 376, 433, 465, 489, 506, 556, 586, 590, 620, 640, 655, 670, 695, 720, 740, 780, 820, 840, 860, 890, 920, 945, 985, 1000, 1001]

//Modes
//random(x, ) = Minimum Value that is Added (Shortest Time Burst).
//random ( , y) = Maximum Value that is Added (Longest Time Burst).

//Timer
//Think of "generate" not like something that happens in order nessarily
//Rather a gate that is open, and closed.

// function whatMode() {
//}

//     let easy = random(400, 700); 
//     let medium = random(250, 500);
//     let hard = random(100, 250);
//     let ms = millis();
//     r = random(0, widthOfCanvas);

//     if (ms >= someTime) { // 0 > 500
//       generate = !generate;
//       someTime = someTime + easy; //Put whatMode here
// }

//array[round(random(0, array.length - 1))] //Eason

// function collideWithWall(){
// //Stops it from going past certain color ***(NOT COMPLETE)***
//   if (state === true){
//   x2 = width - circleSize;
// }