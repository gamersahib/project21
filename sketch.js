var bullet,wall;
var speed,weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50, 200, 20, 30);
  bullet.shapeColor=("black");
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=(80,80,80);
  bullet.velocityX=speed;
  thickness=random(22,83);
}

function draw() {
  background(255,255,255);
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  
    if (damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if (damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }  
  drawSprites();
}
function hasCollided(bullet, wall){
  if(wall.x-bullet.x< (bullet.width+wall.width)/2){
    if (bullet>=wall){
      return true;
    }
    else{
      return false;
    }
  }
}