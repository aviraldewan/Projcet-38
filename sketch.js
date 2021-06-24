const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;

var Play = 1;
var End = 0;
var gameState = Play;
var car,cari,bgi,pa,pa2,pa3;

function preload()
{
  bgi = loadImage("track.png");
  cari = loadImage("car.png");
}

function setup() {
	createCanvas(displayWidth,displayHeight);
	engine = Engine.create();
	world = engine.world;

 car = createSprite(780,displayHeight,30,30);
 car.addImage(cari);
 car.scale = 0.06;

 pa = createP('Suprised to see the length of road?<br>Answer: LIFE is short but we think that it is long just like this road');
 pa2 = createP('Road ,here, represents life and car ,here, represents you');
 pa3 = createP('I hope you got my point!<br>Thanks for your precious time');

	Engine.run(engine);
}
 
function draw() {
  background(0);
  image(bgi, 0,-displayHeight*4,displayWidth, displayHeight*5.3);

  camera.position.x = displayWidth/2;
  camera.position.y = car.y;

  if (gameState === Play)
  {
    if (keyIsDown(UP_ARROW))
    {
      car.y -= 15;
    }
    else if (keyDown('right_arrow'))
    {
      car.x += 10;
    }
    else if (keyDown('left_arrow'))
    {
      car.x -= 10;
    }
  }
  drawSprites();
 
}