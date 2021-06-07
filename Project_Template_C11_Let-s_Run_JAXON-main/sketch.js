var track, jaxon;
var TRACK, JAXON;
var left, right;
var LEFT, RIGHT;
var audio = new Audio('applause.mp3')
function preload(){
  //pre-load images
  TRACK = loadImage("path.png")
  JAXON = loadAnimation("runner-1.png","runner-2.png");
 
}

function setup(){
  createCanvas(400,400);

  //TRACK SPRITE
  track = createSprite(200,200,400,20);
  track.addImage("track",TRACK);
  track.velocityY = 4;
  track.scale = 1.2;

  //RUNNER SPRITE
  jaxon = createSprite(60,50,20,50);
  jaxon.addAnimation("ground",JAXON);
  jaxon.scale = 0.1;

  //LEFT BOUNDARY
  left = createSprite(0,16);
  left.visible = false

  //RIGHT BOUNDARY
  right = createSprite(400,16);
  right.visible = false

}

function draw() {
  background(0);
  jaxon.x = World.mouseX;
  if(keyDown("space")){
    audio.play();
  }
  if(jaxon.x < 60)
  {
    jaxon.x = 0;
  }
  
  if(jaxon.x > 400)
  {
    jaxon.x = 400;
  }
  console.log(track.y);
  if(track.y > 600){
    track.y = height / 2;
  }
  drawSprites();
}
