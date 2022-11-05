// X's and O's
// Michael
// 11/3/22

//Extra for Experts

const ROWS = 3;
const COLS = 3;
let grid;
let cellWidth;
let cellHeight;
let oTurn = false;
let BOX = 0;
let OImg;
let XImg;

let widthOfCanvas = 800;
let heightOfCanvas = 700; 

const cells = {
  cell1XOccupied: "no",
  cell1OOccupied: "no",
  cell2XOccupied: "no",
  cell2OOccupied: "no",
  cell3XOccupied: "no",
  cell3OOccupied: "no",
  cell4XOccupied: "no",
  cell4OOccupied: "no",
  cell5XOccupied: "no",
  cell5OOccupied: "no",
  cell6XOccupied: "no",
  cell6OOccupied: "no",
  cell7XOccupied: "no",
  cell7OOccupied: "no",
  cell8XOccupied: "no",
  cell8OOccupied: "no",
  cell9XOccupied: "no",
  cell9OOccupied: "no"
}

// const cell1 = {
//   cell1XOccupied: "no",
//   cell1OOccupied: "no",
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



function preload() {
  OImg = loadImage('O.png');
  XImg = loadImage('X.png');
}



function setup() {
  createCanvas(widthOfCanvas, heightOfCanvas);
  cellWidth = width/COLS;
  cellHeight = height/ROWS;
  grid = create2dArray(COLS, ROWS);
}



function draw() {
  background(220);
  displayGrid(grid);
}



function mousePressed() {
  let xPos = Math.floor(mouseX/cellWidth);
  let yPos = Math.floor(mouseY/cellHeight);
  let xPos2 = Math.floor(mouseX/cellWidth);
  let yPos2 = Math.floor(mouseY/cellHeight);

  //X
  if (grid[yPos][xPos] === 0 && oTurn === false) {
    grid[yPos][xPos] = 1;
    oTurn = true;
    cell1.xOccupied = "yes";
      console.log("X.");
  }

  //O
  else if (grid[yPos2][xPos2] === 0 && oTurn === true) {
    grid[yPos2][xPos2] = 2;
    oTurn = false;
    cell1.oOccupied = "yes";
    if (cell1.oOccupied === "yes");
      console.log("O.");
  }
}



function displayGrid(grid) {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {

      //Blank
      if (grid[y][x] === 0) {
        fill("white");
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);

      }

      //X
      else if (grid[y][x] === 1) {
        image(XImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }

      //O
      if (grid[y][x] === 2){
        image(OImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
    }
  }
}

function whoWon() {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
    }
  }
}



function create2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLS; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}

//Notes//

  // else if (grid[yPos][xPos] === 1) {
  //   grid[yPos][xPos] = 2;
  // }

  // else if (grid[yPos][xPos] === 3){
  //   grid[yPos2][xPos2] = 0;
  // }