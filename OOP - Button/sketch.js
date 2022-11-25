// OOP - Button // 

class Button{
  constructor(x, y, width, height){ //Make sure you call width and height into the brackets of the constructor.
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = "red";
    this.hoverColor = "gray";
  }

  display(){
    if (this.isInside(mouseX, mouseY)){
      fill(this.hoverColor);
    }
    else{
      fill(this.color);
    }
    rect(this.x, this.y, this.width, this.height);
  }

    isInside(x, y){
    let leftSide = this.x;
    let rightSide = this.x + this.width;
    let topSide = this.y;
    let bottomSide = this.y + this.height;

    return x > leftSide && x < rightSide &&
           y > topSide && y < bottomSide;
  }
}

let aButton = new Button(200, 300, 150, 75);
let anotherButton = new Button(200, 600, 150, 75);
let backgroundColor = "lightgrey";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(backgroundColor);
  aButton.display();
  anotherButton.display();
}

function mousePressed(){
  if (aButton.isInside(mouseX, mouseY)) {
    backgroundColor = "red";
  }
  if (anotherButton.isInside(mouseX, mouseY)) {
    backgroundColor = "blue";
  }
}