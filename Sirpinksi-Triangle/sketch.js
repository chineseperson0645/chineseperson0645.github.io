// Sierpinski Triangle

let triangleVertices = [
  {x: 500, y: 100},
  {x: 100, y: 600},
  {x: 900, y: 600}
];

let theDepth = 0;
let theColors = ["blue", "red", "green", "white", "yellow", "purple", "orange", "black", "brown"];

function setup() {
  createCanvas(1000, 700);
}

function draw() {
  background(220);
  specialTriangle(triangleVertices, theDepth);
}

function mousePressed(){
  if (theDepth < 8){
    theDepth++;
  }
}

function specialTriangle(points, depth){
  fill(theColors[depth]);
  noStroke();
  triangle(points[0].x, points[0].y, 
           points[1].x, points[1].y,
           points[2].x, points[2].y);

  if(depth > 0){
    specialTriangle([points[0],
                    getMidPoint(points[0], points[1]),
                    getMidPoint(points[0], points[2])],
                    depth - 1);
    specialTriangle([points[1],
                    getMidPoint(points[0], points[1]),
                    getMidPoint(points[1], points[2])],
                    depth - 1); 
    specialTriangle([points[2],
                    getMidPoint(points[0], points[2]),
                    getMidPoint(points[1], points[2])],
                    depth - 1);               
  }
}

function getMidPoint(point1, point2){
  let xTotal = point1.x + point2.x;
  let yTotal = point1.y + point2.y;
  let theMidPoint = {x: xTotal/2, y: yTotal/2};
  return theMidPoint;
}

// find the 3 mid points then draw 3 tianlges based on those mid points
// Mid point is the point between two cords (i.e 500, 100 and 100, 600)