//Local Storage Demo

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (getItem("hightscore") !== null) { //if there is a highscore, if it exists
    highestEver = getItem("highscore");
  }
  else{
    storeItem("highscore", 0);
  }
}

function draw() {
  background("white");

  fill("black");
  textSize(100);
  text(numberOfClicks, width/2, height/2);

  fill("red");
  text(highestEver, 50, height - 100)
}

let numberOfClicks = 0;
let highestEver = 0;

function mousePressed(){
  numberOfClicks++;

  if (numberOfClicks > getItem("highscore")){
    storeItem("highscore", numberOfClicks);
    highestEver = numberOfClicks;
  }
}