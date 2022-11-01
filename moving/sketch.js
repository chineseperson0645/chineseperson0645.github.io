// Randomized 2D Grid
// Michael Gao
// 10/26/2022

const ROWS = 40;
const COLMS = 40;
let grid; 
let cellWidth;
let cellHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/COLMS;
  cellHeight = height ROWS;
  grid = createRandom2dArray(COLMS, ROWS); //colms and ROWS values
}

function draw() {
  background(220);
}

function mousePressed(){
  let xPos = Math.floor(mouseX/cellWidth);
  let yPos = Math.floor(mouseY/cellHeight);
    if (grid[yPos])
}

function displayGrid(grid) {
  for (let y=0; y ROWS; y++) {
    for (let x=0; x<COLMS; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("black");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}


function create2dArray(COLMS, ROWS) {
  let emptyArray = [];
  for (let y = 0; y < ROWS; y++) {
    emptyArray.push([]);
    for (let x = 0; x < COLMS; x++) { //How many colms you want
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}

function createRandom2dArray(COLMS, ROWS) {
  let emptyArray = [];
  for (let y=0; y ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLMS; x++) {
      if (random(100) < 50) {
        emptyArray[y].push(0);
      }
      else {
        emptyArray[y].push(1);
      }
    }
  }
  return emptyArray;
}