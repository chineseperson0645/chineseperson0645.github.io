// OOP - Shooter

let playerX = 100;
let playerY = 100;
let theBullets = [];

class Player {
  constructor(playerX, playerY){
    this.playerX = playerX;
    this.playerY = playerY;
    this.circle = circle(playerX, playerY, this.size);
    this.color = "red";
    this.size = 50;
  }
  display(){
    fill(this.color);
    stroke(this.color);
    circle(this.playerX, this.playerY, this.size);
  }
}

class Bullet {
  constructor(bulletX, bulletY) {
    this.bulletX = bulletX;
    this.bulletY = bulletY;
    this.speed = 10;
    this.size = 6;
    this.bulletAlpha = 255;
    this.color = 80;
    this.theColor = color(this.color, this.bulletAlpha);
  }

  updater(){
    this.bulletX += this.speed;
    this.bulletAlpha--;
    this.theColor = color(this.color, this.bulletAlpha);
  }

  display(){
    fill(this.theColor);
    stroke(this.theColor);
    circle(this.bulletX, this.bulletY, this.size);
  }

  isDead(){
    return this.bulletAlpha <= 0;
  }
}

function mousePressed(){
  let shotBullet = new Bullet(playerX, playerY);
  theBullets.push(shotBullet);
}

function bulletLogic(){
  for (let i = 0; i < theBullets.length; i++){
    theBullets[i].updater();
    if (theBullets[i].isDead()){
      theBullets.splice(i, 1);
    }
    theBullets[i].display();
  }
}

let player1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  player1 = new Player(playerX, playerY)
}

function draw() {
  background(220);
  bulletLogic();
  player1.display();
}
