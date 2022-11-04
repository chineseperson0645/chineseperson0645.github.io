// X's and O's
// Michael
// 11/3/22

const ROWS = 3;
const COLS = 3;
let grid;
let cellWidth;
let cellHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
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
  if (grid[yPos][xPos] === 0) {
    grid[yPos][xPos] = 1;
  }
  else if (grid[yPos][xPos] === 1) {
    grid[yPos][xPos] = 0;
  }

  //O
  if (grid[yPos2][xPos2] === 2) {
    grid[yPos2][xPos2] = 3;
  }
  else if (grid[yPos][xPos] === 3){
    grid[yPos2][xPos2] = 2;
  }
}

function displayGrid(grid) {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {

      //X
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("black");
      }

      //O
      if (grid[y][x] === 2){
        fill("red");
      }
      else if (grid[y][x] === 3){
        fill("blue");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
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