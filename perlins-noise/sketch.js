// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let allCircles = [];

let x;
let y;
let radius;
let r;
let time = 0;

function keyPressed(){
  let theBall = {
    x: random(width),
    y: random(height),
    radius: random(50, 100),
    time: random(5000),
  };
  allCircles.push(theBall);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  let r = random(0,5000)
  background(220);
  fill("black");

  for (let i = 0; i < allCircles.length; i++) {
  allCircles[i].x = noise(allCircles[i].time) * width;
  allCircles[i].y = noise(allCircles[i].time + r) * height;

  //Put allCircles[i]. in front of x, y, time, time

  allCircles[i].time += 0.01;
  circle(allCircles[i].x, allCircles[i].y, allCircles[i].radius*2);
  }
}
