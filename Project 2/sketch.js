// Aliean Invasion. (Plagrisim)
// Michael Gao
// November 2 2022

//Pea shooter game. Kind of like aliean invasion game.

const ROWS = 15;
const COLS = 30;
let grid;
let cellWidth;
let cellHeight;
let playerX = COLS/2;
let playerY = ROWS-1;
let bulletX = COLS/2;
let bulletY = ROWS-1;
let stoneImg;


function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/COLS;
  cellHeight = height/ROWS;
  grid = create2dArray(COLS, ROWS);
  //place player in grid
  grid[playerY][playerX] = 9;
}

function draw() {
  background(220);
  displayGrid(grid);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    if (grid[playerY][playerX+1] === 0) {
      //reset old location to white
      grid[playerY][playerX] = 0;
      
      //move
      playerX++;

      //set new player location
      grid[playerY][playerX] = 9;
    }
  }

  if (keyCode === LEFT_ARROW) {
    if (grid[playerY][playerX-1] === 0) {
      //reset old location to white
      grid[playerY][playerX] = 0;
      
      //move
      playerX--;

      //set new player location
      grid[playerY][playerX] = 9;
    }
  }

  //Bullet Logic/Function
  if (keyCode === UP_ARROW) {
    for (let i = 0; i < windowHeight; i++){
      if (grid[bulletY-1][parseInt(playerX)] === 0) {
        bulletY--;
      //reset old location to white
        grid[bulletY][bulletX] = 0;
      // //set new player location
        grid[bulletY][bulletX] = 9;
      }
    }
  }
}

function mousePressed() {
  let xPos = Math.floor(mouseX/cellWidth);
  let yPos = Math.floor(mouseY/cellHeight);

  if (grid[yPos][xPos] === 0) {
    grid[yPos][xPos] = 1;
  }
  else if (grid[yPos][xPos] === 1) {
    grid[yPos][xPos] = 0;
  }
}

function displayGrid(grid) {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      noStroke();
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("black");
      }
      else if (grid[y][x] === 9) {
        fill("red");
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



//----------------------------------------------------------------------------------------------------// 

//Notes / Credits / Doodles / Abandoned Ideas // Others

//----------------------------------------------------------------------------------------------------//



//---NOTES---//

//Additional Controls//

//   if (keyCode === DOWN_ARROW) {
//     if (grid[playerY+1][playerX] === 0) {
//       //reset old location to white
//       grid[playerY][playerX] = 0;
      
//       //move
//       playerY++;

//       //set new player location
//       grid[playerY][playerX] = 9;
//     }
//   }



//Random 2D Array//

// function createRandom2dArray(COLS, ROWS) {
//   let emptyArray = [];
//   for (let y=0; y<ROWS; y++) {
//     emptyArray.push([]);
//     for (let x=0; x<COLS; x++) {
//       if (random(100) < 50) {
//         emptyArray[y].push(0);
//       }
//       else {
//         emptyArray[y].push(1);
//       }
//     }
//   }
//   return emptyArray;
// }