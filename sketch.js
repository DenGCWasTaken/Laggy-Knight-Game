var knight, knightImage;
var ground, groundImage, ground2, ground2Image, invisibleGround;
var gameState = 0;
var startButton;
var platform1;
var leftEdge;
var grounds;

function preload(){
  
  groundImage = loadImage("sprites/ground.png");
  ground2Image = loadImage("sprites/ground2.png");

}

function setup(){

  createCanvas(windowWidth, windowHeight);

  ground2 = createSprite(0,16*height/17);
  ground2.addImage(ground2Image);
  ground2.scale = 2.5;

  invisibleGround = createSprite(width/2,7.5*height/8.5,999*width,10);
  invisibleGround.visible = false;

  knight = createSprite(width/35,4.5*height/5.5,64,128);
  knight.lifetime = -50;
  
  startButton = createSprite(width/2,1.4*height/2.4,width/7,height/21);

  leftEdge = createSprite(width/100-width/69,height/2,width/100,height);
  leftEdge.visiblity = false;

  grounds = new Group();

  //platform1 = new Plataform(2*width/3,height/2,100,100);  
}

function draw(){

  //background('skyBlue');

  groundFunc(10*height/11);

  //platform1.display();
  platform1 = createSprite(2*width/3,1.5*height/2.5,300,100);

  if(gameState == 0){
    if(mousePressedOver(startButton)){
      gameState = 1;
    }
  }

  if(gameState == 1){

  startButton.visible = false;

  if(keyIsDown(RIGHT_ARROW)){
    knight.x += 6;
  }

  if(keyIsDown(LEFT_ARROW)){
    knight.x -= 6;
  }

  if(keyDown(UP_ARROW)&& knight.isTouching(invisibleGround)){
    knight.velocityY -= 15;
  }

  //if(knight.x > width/2){
  //camera.position.x = knight.x;
  //}
    
  knight.velocityY += 1;

  knight.collide(ground);
  knight.collide(platform1);
  knight.collide(leftEdge)

  }

  drawSprites();
}

function mousePressed(){

  if(gameState == 0){
    gameState = 1;
  }
}

function groundFunc(y){
  for(var i = 0; i < 20; i++){
    ground = createSprite(65+54*i,y,50,25);
    grounds.add(ground);
    ground.addImage(groundImage);
    ground.scale = 2.5;
  }
}