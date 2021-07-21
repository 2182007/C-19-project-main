var redcar,silvercar,yellowcar,road;
var silvercarImg,redcarImg,yellowcarImg,roadImg;
var carsGroup

var cars , obstacle;
var score=0;



function preload(){

redcarImg=loadImage('redcar.png');
silvercarImg=loadImage('silvercar.png');
yellowcarImg=loadImage('yellowcar.png');
roadImg=loadImage('road.png');
}

function setup() 
{
createCanvas(windowWidth,windowHeight);

road = createSprite(windowWidth,windowHeight);
road.addImage(roadImg);
road.velocityY = 5;
road.scale = 0.5;

silvercar = createSprite(100,600,30,30);
silvercar.addImage("silvercar",silvercarImg);
silvercar.scale=0.5



redcar = createSprite(600,600,30,30);
redcar.addImage("redcar",redcarImg);
redcar.scale=0.5
redcar.velocityY = 3;

yellowcar = createSprite(400,600,30,30);
yellowcar.addImage("yellowcar",yellowcarImg);
yellowcar.scale=0.5;
yellowcar.velocityY = 3;

carsGroup = new Group();


}

function draw() 
{
background(roadImg);

edges = createEdgeSprites();
silvercar.bounceOff(edges);
redcar.bounceOff(edges);
yellowcar.bounceOff(edges);

silvercar.x = World.mouseX;


if(keyDown(UP_ARROW)){
silvercar.velocityY = -3;
}

spawncars();

if(silvercar.isTouching(carsGroup)){
carsGroup.destroyEach;
road.velocityY = 0;
text("Game Over");
textSize(30);
}



drawSprites();

function spawncars(){
 if (frameCount % 60 === 0){
   var cars = createSprite(600,165,10,40);
   cars.velocityY = -(6 + score/100);
   
    //generate random obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      
      case 1: redcar.addImage(redcarImg);
              break;
      case 2: yellowcar.addImage(yellowcarImg);
              break;
      default: break;
    }



carsGroup.add(cars);


}


if(silvercar.isTouching(carsGroup)){
carsGroup.destroyEach;
road.velocityY = 0;
text("Game Over");
textSize(30);
}
 }
}