// X's and O's
// Michael
// 11/3/22

//0, 0, 0
//0, 0, 0
//0, 0, 0

//Rememeber//
//To stop and reset everything once X or O wins
//Remember to stop a function. You just call something else.

//Extra for Experts

let state = "start";
let hit = false;

//grids//
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

  winCheck();

  if (state === "start"){
    startScreen();
  }
  if (xWins === true){
    xWinScreen();
  }
  if (oWins === true){
    oWinScreen();
  }
  if (tied === true){
    tieScreen();
  }
}


//State Names
//start
//xWin
//oWin
//tied

//Essientially. If this state is this.
//Call another thing to stop 
//The current thing.

//if statement already asked.

function startScreen(){
if (state === "start"){
  if (mouseIsPressed){
    hit = collidePointRect(mouseX, mouseY, 450, 230, 100, 20);
  }
    if (hit) {
      state = "main";
    }
      if (state === "start"){
      rect(0, 0, widthOfCanvas, heightOfCanvas);
      fill("blue");
      textSize(50);
      text("Start!", 450, 250);
    }
  }
}


function xWinScreen(){
    if (mouseIsPressed){
      hit = collidePointRect(mouseX, mouseY, 450, 230, 100, 20);
    }
      if (hit) {
        state = "start";
      }
        rect(0, 0, widthOfCanvas, heightOfCanvas);
        fill("blue");
        textSize(50);
        text("Want to play again?!", 450, 250);
  }


function oWinScreen(){
    if (mouseIsPressed){
      hit = collidePointRect(mouseX, mouseY, 450, 230, 100, 20);
    }
    if (hit) {
      state = "start";
    }
    rect(0, 0, widthOfCanvas, heightOfCanvas);
    fill("blue");
    textSize(50);
    text("Want to play again?!", 450, 250);
  }


function tieScreen(){
    state = "tied";

    if (mouseIsPressed){
      hit = collidePointRect(mouseX, mouseY, 450, 230, 100, 20);
    }
    if (hit) {
      state = "start";
    }
    rect(0, 0, widthOfCanvas, heightOfCanvas);
    fill("blue");
    textSize(50);
    text("Want to die again?", 450, 250);
  }




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
        image(XImg, x*widthofCell, y*heightofCell, widthofCell, heightofCell);
      }

      //O
      if (grids[y][x] === 2){
        image(OImg, x*widthofCell, y*heightofCell, widthofCell, heightofCell);
      }
    }
  }
}


function winCheck(){
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

      if (xWins === true){
        state = "xWin"
        console.log("X Wins");
    }
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

      if (oWins === true ){
        state = "oWin"
        console.log("O Wins");
    }
  }

//Checks for tie.
  if (grids[0][0] !== 0  && grids[0][1] !== 0 && grids[0][2] !== 0 && //Across (Top)
      grids[2][2] !== 0  && grids[2][1] !== 0 && grids[2][0] !== 0 && //Across (Bottom)
      grids[1][0] !== 0  && grids[1][1] !== 0 && grids[1][2] !== 0 ){ //Across (Middle)
      tied = true;

      if (xWins === false && oWins === false && tied === true){
        state = "tied"
        console.log("tie.");
      }
    }
  }
}
function different2DArray(COLM, ROLLS) {
  let greenArray = [];
  for (let y = 0; y < ROLLS; y++) {
    greenArray.push(Array());
    //Creates another array within the Array
    //(by filling it with empty space)

    for (let x = 0; x < COLM; x++) {
      greenArray[y].push(0);
    //Within the empty array (within an array)
    //it pushes 0 values, mousePressed and displaygrids
    //Function off of these zero values by checking and 
    //Adding off of them according to their instructions
    }
  }
  return greenArray;
  //Pushes greenArray as the grids, check above within setup function
  //for "grids = different2DArray(COLM, ROLLS);"
}

//^
// 0, 0, 0
// 0, 0, 0
// 0, 0, 0

//^
//According to the ROLLS and COLM 
//Values



//Notes/Doodles//

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