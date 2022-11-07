// X's and O's
// Michael
// 11/3/22

//0, 0, 0
//0, 0, 0
//0, 0, 0

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

function preload() {
  OImg = loadImage('O.png');
  XImg = loadImage('X.png');
}



function setup() {
  createCanvas(widthOfCanvas, heightOfCanvas);
  cellWidth = width/COLS; //Overall Width divided by COLS value (# of COLS)
  cellHeight = height/ROWS; //Overall Height divided by ROWS vlaue (# of ROWS)
  grid = create2dArray(COLS, ROWS);
}



function draw() {
  background(220);
  displayGrid(grid);
  winCheck();
}



function mousePressed() {
  let xPos = Math.floor(mouseX/cellWidth);
  let yPos = Math.floor(mouseY/cellHeight);

  //X
  if (grid[yPos][xPos] === 0 && oTurn === false) {
    grid[yPos][xPos] = 1;
    oTurn = true;
  }


  //O
  if (grid[yPos][xPos] === 0 && oTurn === true) {
    grid[yPos][xPos] = 2;
    oTurn = false;
  }
}

// function whoWon() {
//   for (let y=0; y<ROWS; y++) {
//     for (let x=0; x<COLS; x++) {
//       if (grid[y][x] === 1){
//         console.log("X won!")
//       }
//         if (grid[y][x] === 2){
//         console.log("O won!")
//       }
//     }
//   }
// }

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


function winCheck(player1, player2){
  if (grid[0][0] === 1 && grid[1][0] === 1 && grid[2][0] === 1){
    console.log("yay")
  }
}

function create2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]); 
    //Creates another array within the Array
    //(by filling it with empty space)

    for (let x=0; x<COLS; x++) {
      emptyArray[y].push(0);
    //Within the empty array (within an array)
    //it pushes 0 values, mousePressed and displayGrid
    //Function off of these zero values by checking and 
    //Adding off of them according to their instructions
    }
  }
  return emptyArray;
  //Pushes emptyArray as the grid, check above within setup function
  //for "grid = create2dArray(COLS, ROWS);"
}

//^
// 0, 0, 0
// 0, 0, 0
// 0, 0, 0

//^
//According to the ROWS and COLS 
//Values



//Notes//
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


// if (grid[yPos][xPos] === 1){
//   cell1XOccupied = "yes";
//     if (cell1XOccupied === "yes"){
//       console.log("X.");

//     }
//   }
//   if (grid[yPos][xPos] === 1 && grid[yPos][xPos+1] === 1 && grid[yPos][xPos+2] === 1){
//     console.log("X Wins!");
//   }
// }

// if (grid[yPos][xPos] === 2){
//   cell1OOccupied = "yes";
//     if (cell1OOccupied === "yes"){
//       console.log("O.");

//     }
//   }
// if (grid[yPos][xPos] === 2 && grid[yPos][xPos+1] === 2 && grid[yPos][xPos+2] === 2){
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
//   grid.push(cells);
// }