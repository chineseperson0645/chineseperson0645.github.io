// X's and O's
// Michael Gao
// 11/3/22

//Rememeber//
//Remember to stop a function. You just call something else.
//Remove Img Backgroud
//Possibly Imploment AI
//Add Title

//0, 0, 0
//0, 0, 0
//0, 0, 0

//Extra for Experts//
//Set a font
//Experimented with "classes" (didn't implemenet though).

/////////////////////////////////////////////////////////////////////

//Global Variables/ Draw Loop/ Setup

/////////////////////////////////////////////////////////////////////

//Grids//
let greenArray = [];
const ROLLS = 3;
const COLM = 3;
let grids;
let widthofCell;
let heightofCell;

//Functionality//
let oTurn = false;
let xWins = false;
let oWins = false;
let tied = false;
let hit = false;
let state = "start";

//Canvas Width and Height//
let widthOfCanvas = 800;
let heightOfCanvas = 700; 

//X and O Images//
let OImg;
let XImg;

//Image Preloader//
function preload() {
  OImg = loadImage('O.png');
  XImg = loadImage('X.png');
}

function setup() {
  createCanvas(widthOfCanvas, heightOfCanvas);
  widthofCell = width/COLM; //Overall Width divided by COLM value (# of COLM)
  heightofCell = height/ROLLS; //Overall Height divided by ROLLS vlaue (# of ROLLS)
  grids = different2DArray(COLM, ROLLS);
}

function draw() {
  background(220);
  displaygrids(grids);
  screens();
  winDetect();
}

/////////////////////////////////////////////////////////////////////

//Screens

/////////////////////////////////////////////////////////////////////

function screens(){
  if (state === "start"){
    formatText();
    text("Start!", widthOfCanvas/2, heightOfCanvas/2);
    hitBox();
  }
  if (state === "tied"){
    formatText();
    text("Tied! Again?", widthOfCanvas/2, heightOfCanvas/2);
  }

  if (state === "oWin"){
    formatText();
    text("O Wins! Again?", widthOfCanvas/2, heightOfCanvas/2);
  }

  if (state === "xWin"){
    formatText();
    text("X Wins! Again?", widthOfCanvas/2, heightOfCanvas/2);
  }
  if (state === "xWin" || state === "oWin" || state === "tied"){
    resetter();
    hitBox();
  }
}

function resetter(){
  for (let y=0; y<ROLLS; y++) {
    for (let x=0; x<COLM; x++) {
      greenArray[y][x] = 0;
      oTurn = false;
    }
  }
}

function hitBox(){
  if (mouseIsPressed){
    hit = collidePointRect(mouseX, mouseY, widthOfCanvas/2, heightOfCanvas/2, 100, 20);
  }
  if (hit) {
    state = "main";
    oWins = false;
    xWins = false;
    tied = false;
  }
}

function formatText(){
  rect(0, 0, widthOfCanvas, heightOfCanvas);
  fill("blue");
  textAlign(CENTER);
  textSize(50);
  textFont("impact");
}

/////////////////////////////////////////////////////////////////////

//Main Functions

/////////////////////////////////////////////////////////////////////

function mousePressed() {
if (state === "main"){
  let xPos = Math.floor(mouseX/widthofCell);
  let yPos = Math.floor(mouseY/heightofCell);

  //X
  if (grids[yPos][xPos] === 0 && oTurn === false) {
    grids[yPos][xPos] = 1;
    oTurn = true;
  }

  //O
  if (grids[yPos][xPos] === 0 && oTurn === true) {
    grids[yPos][xPos] = 2;
    oTurn = false;
    }
  }
}

function displaygrids(grids) {
  for (let y=0; y<ROLLS; y++) {
    for (let x=0; x<COLM; x++) {

      //Blank
      if (grids[y][x] === 0) {
        fill("white");
        rect(x*widthofCell, y*heightofCell, widthofCell, heightofCell);
      }

      //X
      else if (grids[y][x] === 1) {
        fill("white");
        rect(x*widthofCell, y*heightofCell, widthofCell, heightofCell);
        image(XImg, x*widthofCell, y*heightofCell, widthofCell, heightofCell);
      }

      //O
      else if (grids[y][x] === 2){
        fill("white");
        rect(x*widthofCell, y*heightofCell, widthofCell, heightofCell);
        image(OImg, x*widthofCell, y*heightofCell, widthofCell, heightofCell);
      }
    }
  }
}

function winDetect(){
  if (state === "main") {

  // 0, 0, W
  // 0, W, 0
  // W, 0, 0

//Checks for X win
  if (grids[0][0] === 1 && grids[1][0] === 1 && grids[2][0] === 1 || //Down (Left)
      grids[0][0] === 1 && grids[0][1] === 1 && grids[0][2] === 1 || //Across (Top)
      grids[0][2] === 1 && grids[1][2] === 1 && grids[2][2] === 1 || //Down (Right)
      grids[2][2] === 1 && grids[2][1] === 1 && grids[2][0] === 1 || //Across (Bottom)
      grids[1][0] === 1 && grids[1][1] === 1 && grids[1][2] === 1 || //Across (Middle)
      grids[0][1] === 1 && grids[1][1] === 1 && grids[2][1] === 1 || //Down (Middle)
      grids[0][0] === 1 && grids[1][1] === 1 && grids[2][2] === 1 || //Top Left --> Bottom Right
      grids[0][2] === 1 && grids[1][1] === 1 && grids[2][0] === 1 ){ //Top Right --> Bottom Left
      
      xWins = true;
      state = "xWin";
      console.log("X Wins");
  }

//Checks for O win
  if (grids[0][0] === 2 && grids[1][0] === 2 && grids[2][0] === 2 || //Down (Left)
      grids[0][0] === 2 && grids[0][1] === 2 && grids[0][2] === 2 || //Across (Top)
      grids[0][2] === 2 && grids[1][2] === 2 && grids[2][2] === 2 || //Down (Right)
      grids[2][2] === 2 && grids[2][1] === 2 && grids[2][0] === 2 || //Across (Bottom)
      grids[1][0] === 2 && grids[1][1] === 2 && grids[1][2] === 2 || //Across (Middle)
      grids[0][1] === 2 && grids[1][1] === 2 && grids[2][1] === 2 || //Down (Middle)
      grids[0][0] === 2 && grids[1][1] === 2 && grids[2][2] === 2 || //Top Left --> Bottom Right
      grids[0][2] === 2 && grids[1][1] === 2 && grids[2][0] === 2 ){ //Top Right --> Bottom Left
      
      oWins = true;
      state = "oWin";
      console.log("O Wins");
  }

//Checks for tie.
  if (grids[0][0] !== 0  && grids[0][1] !== 0 && grids[0][2] !== 0 && //Across (Top)
      grids[2][2] !== 0  && grids[2][1] !== 0 && grids[2][0] !== 0 && //Across (Bottom)
      grids[1][0] !== 0  && grids[1][1] !== 0 && grids[1][2] !== 0 ){  //Across (Middle)

      tied = true;
      if (xWins === false && oWins === false && tied === true){
        state = "tied";
        console.log("tie.");
      }
    }
  }
}

function different2DArray(COLM, ROLLS) {
  for (let y = 0; y < ROLLS; y++) {
    greenArray.push(Array());
    for (let x = 0; x < COLM; x++) {
      greenArray[y].push(0);
    }
  }
  return greenArray;
}

//////////////////////////////////////////////////////////////////////

//Notes/ Doodles

/////////////////////////////////////////////////////////////////////

// class cell1 {
//   constructor (xOccupied, yOccupied);
  
//   cell1XOccupied: "no",
//   cell1OOccupied: "no",
//   cell2XOccupied: "no",
//   cell2OOccupied: "no",
//   cell3XOccupied: "no",
//   cell3OOccupied: "no",
//   cell4XOccupied: "no",
//   cell4OOccupied: "no",
//   cell5XOccupied: "no",
//   cell5OOccupied: "no",
//   cell6XOccupied: "no",
//   cell6OOccupied: "no",
//   cell7XOccupied: "no",
//   cell7OOccupied: "no",
//   cell8XOccupied: "no",
//   cell8OOccupied: "no",
//   cell9XOccupied: "no",
//   cell9OOccupied: "no"
// }

// const cell1 = {
//   XOccupied: "no",
//   OOccupied: "no",
// }
// const cell2 = {
//   cell2XOccupied: "no",
//   cell2OOccupied: "no"
// }
// const cell3 = {
//   cell3XOccupied: "no",
//   cell3OOccupied: "no"
// }
// const cell4 = {
//   cell4XOccupied: "no",
//   cell4OOccupied: "no"
// }
// const cell5 = {
//   cell5XOccupied: "no",
//   cell5OOccupied: "no"
// }
// const cell6 = {
//   cell6XOccupied: "no",
//   cell6OOccupied: "no"
// }
// const cell7 = {
//   cell7XOccupied: "no",
//   cell7OOccupied: "no"
// }

// const cell8 = {
//   cell8XOccupied: "no",
//   cell8OOccupied: "no"
// }
// const cell9 = {
//   cell9XOccupied: "no",
//   cell9OOccupied: "no"
// }


// if (grids[yPos][xPos] === 1){
//   cell1XOccupied = "yes";
//     if (cell1XOccupied === "yes"){
//       console.log("X.");

//     }
//   }
//   if (grids[yPos][xPos] === 1 && grids[yPos][xPos+1] === 1 && grids[yPos][xPos+2] === 1){
//     console.log("X Wins!");
//   }
// }

// if (grids[yPos][xPos] === 2){
//   cell1OOccupied = "yes";
//     if (cell1OOccupied === "yes"){
//       console.log("O.");

//     }
//   }
// if (grids[yPos][xPos] === 2 && grids[yPos][xPos+1] === 2 && grids[yPos][xPos+2] === 2){
//   console.log("O Wins!");
// }
// }

// function cellsChecker() {
//   let cells = {
//     cell1XOccupied: "no",
//     cell1OOccupied: "no",

//     cell2XOccupied: "no",
//     cell2OOccupied: "no",

//     cell3XOccupied: "no",
//     cell3OOccupied: "no",

//     cell4XOccupied: "no",
//     cell4OOccupied: "no",

//     cell5XOccupied: "no",
//     cell5OOccupied: "no",

//     cell6XOccupied: "no",
//     cell6OOccupied: "no",

//     cell7XOccupied: "no",
//     cell7OOccupied: "no",

//     cell8XOccupied: "no",
//     cell8OOccupied: "no",

//     cell9XOccupied: "no",
//     cell9OOccupied: "no"
//   };
//   grids.push(cells);
// }

// if (grids[0][0] === 1 && grids[0][1] === 1 && grids[0][2] === 1){
//   xWins = true;
//   if (xWins === true){
//     console.log("X Wins");
//   }
// }
// if (grids[0][0] === 2 && grids[0][1] === 2 && grids[0][2] === 2){
//   oWins = true;
//     if (oWins === true){
//       console.log("O Wins");
//     }
// }

// function whoWon() {
//   for (let y=0; y<ROLLS; y++) {
//     for (let x=0; x<COLM; x++) {
//       if (grids[y][x] === 1){
//         console.log("X won!")
//       }
//         if (grids[y][x] === 2){
//         console.log("O won!")
//       }
//     }
//   }
// }

// grids[0][0] === 1 && grids[0][1] === 1 && grids[0][2] === 1 && //Across (Top)
// grids[2][2] === 1 && grids[2][1] === 1 && grids[2][0] === 1 && //Across (Bottom)
// grids[1][0] === 1 && grids[1][1] === 1 && grids[1][2] === 1 ){ //Across (Middle)

// function different2DArray(COLM, ROLLS) {
//   for (let y = 0; y < ROLLS; y++) {
//     greenArray.push(Array());
//     //Creates another array within the Array
//     //(by filling it with empty space)

//     for (let x = 0; x < COLM; x++) {
//       greenArray[y].push(0);
//     //Within the empty array (within an array)
//     //it pushes 0 values, mousePressed and displaygrids
//     //Function off of these zero values by checking and 
//     //Adding off of them according to their instructions
//     }
//   }
//   return greenArray;
//   //Pushes greenArray as the grids, check above within setup function
//   //for "grids = different2DArray(COLM, ROLLS);"
// }

  // function startScreen(){
  //   if (state === "start"){
  //     rect(0, 0, widthOfCanvas, heightOfCanvas);
  //     fill("blue");
  //     textSize(50);
  //     text("Start!", widthOfCanvas/2-35, heightOfCanvas/2);
  //     hitBox();
  //     }
  //   }
  
  // function xWinScreen(){
  //   if (state === "xWin"){
  //     rect(0, 0, widthOfCanvas, heightOfCanvas);
  //     fill("blue");
  //     textSize(50);
  //     text("X Wins! Again?", widthOfCanvas/2-35, heightOfCanvas/2);
  //     hitBox();
  //     resetter();
  //     }
  //   }
  
  // function oWinScreen(){
  //   if (state === "oWin"){
  //     rect(0, 0, widthOfCanvas, heightOfCanvas);
  //     fill("blue");
  //     textSize(50);
  //     text("O Wins! Again?", widthOfCanvas/2-35, heightOfCanvas/2);
  //     hitBox();
  //     resetter();
  //     }
  //   }
  
  // function tieScreen(){
  //   if (state === "tied"){
  //     rect(0, 0, widthOfCanvas, heightOfCanvas);
  //     fill("blue");
  //     textSize(50);
  //     text("Tied! Again?", widthOfCanvas/2-35, heightOfCanvas/2);
  //     hitBox();
  //     resetter();
  //   }
  // }