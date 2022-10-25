// Terrian - Perlin Noise
// Michael
// 10/21/22
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//All you do is change where you start/begin on the array counter. 

let theHeights = [];
let startLocation = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  theHeights = gernateHeights(20000); //Increases/Decreases Height points 
}

function draw() {
  background(220);
  for (let i = startLocation; i < startLocation + width; i++) {
  displayRectangle(i - startLocation, theHeights[i], 0.1); //x, height of rectangle, width of rectangle
  }

  //moves starting location with the hit of any key
  if (keyIsPressed){
    startLocation += 5
  }
}

function displayRectangle(x, rectHeight, rectWidth) { //Y Value - rectHeight (700 - 500)
  let y = height - rectHeight;
  rect(x, y, rectWidth, rectHeight);
}

function gernateHeights(howMany){
  let tempArray = [];
  let time = random(10000);
  for (let i = 0; i < howMany; i++){ //should happen 2000 times
    tempArray.push(noise(time)*height); //??
    time += 0.001; //follows curve slower (the perlin noise curve), sees a smaller area of the actual curve
  }
  return tempArray;
}