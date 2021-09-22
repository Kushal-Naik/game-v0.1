
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var drone, groundP, roofP;
var box1, box2, box3;
var Dx, Dy;

var DR;
var op1, op2, op3;

var map;

var health = 100;

function preload()
{
	DRimg = loadImage("img/droneT.png");
  mapImg = loadImage("img/Map.png");
}

function setup() {
	createCanvas(displayWidth, displayHeight-150);

	engine = Engine.create();
	world = engine.world;

	//Bodies
        drone = new Drone(60,500,126,60);

        box1 = new Box(random(0,1200),500, 60,60);
        box2 = new Box(random(0,1200),500, 60,60);

        // platform = new Obstacle(150, 305, 300, 170);
        // platform1 = new Obstacle(600, 400, 200,400);
        // platform2 = new Obstacle(800, 200, 40,200);
        // platform3 = new Obstacle(1100, 400, 300, 80);

        roofP = new Ground(displayWidth/2, -100, 10000,20);
        groundP = new Ground(displayWidth/2,height,10000,20);
  
  //Sprites
    map = createSprite(1700,1730, 10000, 10000);
    map.addImage("map", mapImg);
    map.scale = 3;

    DR = createSprite(60, 580, 60, 60);
    DR.shapeColor = "blue";
    // DR.addImage("DR", DRimg);
    // DR.scale = 0.3;

    //INSPECT !!!!!!!!!


    // roof =  createSprite(displayWidth/2,-100,10000,20);
    // roof.shapeColor = "black";

    // ground = createSprite(displayWidth/2,height,10000,20);
    // ground.shapeColor = "black";
    //ground.addImage("ground",groundImage);

    platform = createSprite(300, 400, 840, 20);
    platform.shapeColor = "black";
    platform1 = createSprite(140, 800, 525, 20);
    platform1.shapeColor = "black";
    platform2 = createSprite(-98, 600, 40,380);
    platform2.shapeColor = "black";
    platform3 = createSprite(710, 960, 20, 1100);
    platform3.shapeColor = "black";
    platform4 = createSprite(394, 1260, 20, 900);
    platform4.shapeColor ="black";
    platform5 = createSprite(950, 1700, 1100, 20);
    platform5.shapeColor ="black";
    platform6 = createSprite(1040, 1060, 640, 20);
    platform6.shapeColor ="black";
    platform7 = createSprite(1510, 900, 20, 800);
    platform7.shapeColor ="black";
    platform8 = createSprite(1510, 1610, 20, 200);
    platform8.shapeColor ="black";
    platform9 = createSprite(1010, 460, 20, 1200);
    platform9.shapeColor ="black";
    platform10 = createSprite(1510, -350, 20, 500);
    platform10.shapeColor ="red";

    // op1 = createSprite(1800, 50, 60, 60);
    // op1.shapeColor = "red";
    // op1.velocityX = -5;
    // op2 = createSprite(1000, 50, 60, 60);
    // op2.shapeColor = "red";
    // op2.velocityY = 5;  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CORNER);
  background(100);

  camera.position.x = DR.x;
  camera.position.y = DR.y;

  Engine.update(engine);

  // drone.display();
  // box1.display();
  // box2.display();

  // platform.display();
  // platform1.display();
  // platform2.display();

  // platform3.display();

  // groundP.display();
  // roofP.display();

  //movement
  if(keyDown("W") || keyDown(UP_ARROW)){
    //DR.y = DR.y - 15;
    DR.velocityY = DR.velocityY - 1;
  }
  if(keyDown("S") || keyDown(DOWN_ARROW)){
    //DR.y = DR.y + 15;
    DR.velocityY = DR.velocityY + 1;
  }
  if(keyDown("A") || keyDown(LEFT_ARROW)){
    //DR.x = DR.x - 15;
    DR.velocityX = DR.velocityX - 1;
  }
  if(keyDown("D") || keyDown(RIGHT_ARROW)){
    //DR.x = DR.x + 15;
    DR.velocityX = DR.velocityX + 1;
  }

  //Brake
  if(keyDown("space")){
    DR.velocityY = 0;
    DR.velocityX = 0;
  }

  //gravity
  DR.velocityY = DR.velocityY + 0.2;

  // if(DR.isTouching(op1) || DR.isTouching(op2)){
  //   health = health-10
  // }

  // DR.collide(ground);
  // DR.collide(roof);

  DR.collide(platform);
  DR.collide(platform1);
  DR.collide(platform2);
  DR.collide(platform3);
  DR.collide(platform4);
  DR.collide(platform5);
  DR.collide(platform6);
  DR.collide(platform7);
  DR.collide(platform8);

  // DR.bounceOff(op1);
  // DR.bounceOff(op2);

  // op1.bounceOff(platform4);
  // op1.bounceOff(platform6);

  // op2.bounceOff(roof);
  // op2.bounceOff(platform3);

  fill("black");
  text("health = " + health, 1000, 300);

  console.log("DR", DR.x, DR.y);
  console.log("M", mouseX, mouseY);

  drawSprites();
 
}


