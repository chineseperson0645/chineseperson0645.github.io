// Start Screen Demo
// Schellenberg
// Oct 3, 2022

let state = "start";
let treesImg;

function preload() {
  treesImg = loadImage("fall-trees.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if (state === "start") {
    startScreen();
  }
  if (state === "main") {
    image(treesImg, 0, 0, width, height);
  }
}

function mousePressed() {
  if (state === "start" && mouseInsideRect(400, 700, 400, 550)) {
    state = "main";
  } 
}

function startScreen() {
  if (mouseInsideRect(400, 700, 400, 550)) {
    fill("gray");
  }
  else {
    fill("black");
  }
  rect(400, 400, 300, 150);
  fill("white");
  textSize(50);
  text("Begin!", 480, 490);
}

function mouseInsideRect(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right &&
         mouseY >= top && mouseY <= bottom;
}



//Generation of wall// **ATTEMPT

// current someTime = 10;
// current generate = true;

//Variable of Wall
let r = random(10, 20)
let r2 = random(100, 480)
let r3 = random(0, 500)

//Should always be stuck on not moving..?

//Timing of Generation//

//ONLY IF THE MILLIS IS GREATER THAN TIME WILL THE MILLIS ADDER QUE.

// if (someTime >= millis()) { // 10 > 0(M) // Currently still in generate = true 
//   someTime = millis() + 10; // 10 < 20(M) // AFTER 10 MILLISECONDS
//   generate = !generate; //!generate

//     if (millis()*1.5 >= someTime){ // 20*1.5 = 30(M) > 10 // 
//       someTime*4; // 30(M) < 10*4 = 40 //
//       generate = !generate
//   }
// }

// if (generate){ 
//   //Possibly add a && ifNotTouchingRed or something function.
//   fill("green");
//   rect(r3, 0, r, r2)
//   x3 = random(1, widthOfCanvas);
//   y3 = random(1, heightOfCanvas);
//   }
// }

// function moveWall(){
//  x3 += 0.01;
// }

