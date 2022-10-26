// Colliding Circles
// Schellenberg
// Oct 24, 2022

let nums = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  nums.push(spawnBall(100, 100));
}

function draw() {
  background(220);

  //move
  for (let i = 0; i < nums.length; i++) {
    nums[i].x += nums[i].dx;
    nums[i].y += nums[i].dy;

    //collision check
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) { //don't check if hitting self
        if (isColliding(nums[i], nums[j])) {
            let tempDx = nums[i].dx;
            let tempDy = nums[i].dy;
            nums[i].dx = nums[j].dx;
            nums[i].dy = nums[j].dy;
            nums[j].dx = tempDx;
            nums[j].dy = tempDy;
        }
      }
    }


    //left-right edges
    if (nums[i].x + nums[i].radius > width ||
       nums[i].x - nums[i].radius < 0) {
      nums[i].dx *= -1;
    }

    //top-bottom edges
    if (nums[i].y + nums[i].radius > height || 
      nums[i].y - nums[i].radius < 0) {
      nums[i].dy *= -1;
    }
  }
  
  //display
  for (let thisCircle of nums) {
    fill(thisCircle.theColor);
    noStroke();
    circle(thisCircle.x, thisCircle.y, thisCircle.radius*2);
  }
}

function isColliding(ball1, ball2) {
  let distanceBetween = dist(ball1.x, ball1.y, ball2.x, ball2.y);
  let radiiSum = ball1.radius + ball2.radius;
  if (distanceBetween > radiiSum) {
    return false;
  }
  else {
    return true;
  }
}

function mousePressed() {
  nums.push(spawnBall(mouseX, mouseY));
}

function spawnBall(tempX, tempY) {
  let newBall = {
    x: tempX, 
    y: tempY,
    radius: random(25, 100),
    dx: random(-5, 5),
    dy: random(-5, 5),
    theColor: color(random(255), random(255), random(255), random(255))
  };
  return newBall;
}


